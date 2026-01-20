export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const BADGES: Record<string, Badge> = {
    'first-day': {
        id: 'first-day',
        name: '🎯 Primer Día',
        description: 'Completaste tu primera lección',
        icon: '🎯',
    },
    'week-1': {
        id: 'week-1',
        name: '🔥 Semana 1',
        description: 'Completaste 5 días de curso',
        icon: '🔥',
    },
    'week-2': {
        id: 'week-2',
        name: '⚡ Semana 2',
        description: 'Completaste 10 días de curso',
        icon: '⚡',
    },
    'week-3': {
        id: 'week-3',
        name: '💎 Semana 3',
        description: 'Completaste 15 días de curso',
        icon: '💎',
    },
    'completed': {
        id: 'completed',
        name: '🏆 Maestro Java',
        description: 'Completaste todo el curso',
        icon: '🏆',
    },
    'streak-3': {
        id: 'streak-3',
        name: '🌟 Racha de 3',
        description: '3 días consecutivos',
        icon: '🌟',
    },
    'streak-7': {
        id: 'streak-7',
        name: '💫 Racha de 7',
        description: '7 días consecutivos',
        icon: '💫',
    },
};

export function getBadge(id: string): Badge | undefined {
    return BADGES[id];
}

export function getAllBadges(): Badge[] {
    return Object.values(BADGES);
}
