export interface Progress {
    completedDays: number[];
    currentDay: number;
    streak: number;
    lastCompletedDate: string | null;
    badges: string[];
    exercisesCompleted: Record<string, number[]>;
    quizScores: Record<string, number>;
}

const STORAGE_KEY = 'java-course-progress';

export function getProgress(): Progress {
    if (typeof window === 'undefined') {
        return getDefaultProgress();
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        return getDefaultProgress();
    }

    try {
        return JSON.parse(stored);
    } catch {
        return getDefaultProgress();
    }
}

export function saveProgress(progress: Progress): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markDayComplete(day: number): void {
    const progress = getProgress();

    if (!progress.completedDays.includes(day)) {
        progress.completedDays.push(day);
        progress.completedDays.sort((a, b) => a - b);

        // Update streak
        const today = new Date().toDateString();
        const lastDate = progress.lastCompletedDate ? new Date(progress.lastCompletedDate).toDateString() : null;

        if (lastDate === today) {
            // Same day, don't increment streak
        } else if (isConsecutiveDay(lastDate, today)) {
            progress.streak++;
        } else {
            progress.streak = 1;
        }

        progress.lastCompletedDate = today;
        progress.currentDay = Math.max(progress.currentDay, day + 1);

        // Check for badges
        checkAndAwardBadges(progress);

        saveProgress(progress);
    }
}

export function markExerciseComplete(day: number, exerciseId: number): void {
    const progress = getProgress();
    const dayKey = day.toString();

    if (!progress.exercisesCompleted[dayKey]) {
        progress.exercisesCompleted[dayKey] = [];
    }

    if (!progress.exercisesCompleted[dayKey].includes(exerciseId)) {
        progress.exercisesCompleted[dayKey].push(exerciseId);
        saveProgress(progress);
    }
}

export function saveQuizScore(day: number, score: number): void {
    const progress = getProgress();
    progress.quizScores[day.toString()] = score;
    saveProgress(progress);
}

export function getDayStatus(day: number): 'locked' | 'available' | 'in-progress' | 'completed' {
    const progress = getProgress();

    if (progress.completedDays.includes(day)) {
        return 'completed';
    }

    if (day === progress.currentDay) {
        return 'in-progress';
    }

    if (day <= progress.currentDay) {
        return 'available';
    }

    return 'locked';
}

function getDefaultProgress(): Progress {
    return {
        completedDays: [],
        currentDay: 1,
        streak: 0,
        lastCompletedDate: null,
        badges: [],
        exercisesCompleted: {},
        quizScores: {},
    };
}

function isConsecutiveDay(lastDate: string | null, today: string): boolean {
    if (!lastDate) return false;

    const last = new Date(lastDate);
    const current = new Date(today);
    const diffTime = current.getTime() - last.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 1;
}

function checkAndAwardBadges(progress: Progress): void {
    // First day badge
    if (progress.completedDays.length === 1 && !progress.badges.includes('first-day')) {
        progress.badges.push('first-day');
    }

    // Week 1 badge
    if (progress.completedDays.length >= 5 && !progress.badges.includes('week-1')) {
        progress.badges.push('week-1');
    }

    // Week 2 badge
    if (progress.completedDays.length >= 10 && !progress.badges.includes('week-2')) {
        progress.badges.push('week-2');
    }

    // Week 3 badge
    if (progress.completedDays.length >= 15 && !progress.badges.includes('week-3')) {
        progress.badges.push('week-3');
    }

    // Completion badge
    if (progress.completedDays.length >= 20 && !progress.badges.includes('completed')) {
        progress.badges.push('completed');
    }

    // Streak badges
    if (progress.streak >= 3 && !progress.badges.includes('streak-3')) {
        progress.badges.push('streak-3');
    }

    if (progress.streak >= 7 && !progress.badges.includes('streak-7')) {
        progress.badges.push('streak-7');
    }
}
