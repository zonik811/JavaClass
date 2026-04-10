# QWEN.md - Java Course Platform

## Project Overview

This is an **e-learning platform** for teaching Java programming from scratch to Object-Oriented Programming (OOP) in 20 days. Built with **Astro 4.0 + TypeScript + MDX**, it's specifically designed for 15-year-old students with ADHD, featuring a slow pace, micro-steps, and immediate feedback.

### Key Features
- **Progress tracking** via localStorage (no backend required)
- **Gamification**: Streaks, badges, and visual progress bars
- **Interactive components**: Exercises with hints, auto-graded quizzes, checklists
- **Gaming-inspired UI**: Dark theme with gradients, glassmorphism, and animations
- **ADHD-friendly pedagogy**: Micro-steps, immediate feedback, clear goals, frequent rewards

### Tech Stack
- **Astro 4.0** - Web framework
- **TypeScript** - Type safety
- **MDX** - Content format (Markdown + interactive components)
- **Shiki/Prism** - Syntax highlighting (Dracula theme)
- **CSS Variables** - Design system with gaming aesthetic

---

## Building and Running

### Development
```bash
npm run dev
```
Server runs at `http://localhost:4321`

### Build for Production
```bash
npm run build
```
This runs `astro check && astro build` to verify TypeScript and generate static files in `dist/`.

### Preview Production Build
```bash
npm run preview
```

### Check TypeScript
```bash
npm run astro check
```

---

## Project Structure

```
JavaClass/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Home page with day listing
│   │   └── dia/[day].astro          # Dynamic route for each day's lesson
│   ├── content/
│   │   ├── config.ts                # Content collection schema
│   │   └── lessons/
│   │       ├── dia-01.mdx           # Fully developed (Day 1)
│   │       ├── dia-02.mdx ... dia-20.mdx  # Placeholders
│   ├── components/
│   │   ├── BadgeDisplay.astro       # Badges visualization
│   │   ├── Checklist.astro          # Daily achievement checklist
│   │   ├── DayCard.astro            # Day card component
│   │   ├── ExerciseBlock.astro      # Interactive exercise with hints/solutions
│   │   ├── Navigation.astro         # Prev/Next day navigation
│   │   ├── ProgressBar.astro        # Progress bar component
│   │   ├── QuizBlock.astro          # Quiz container
│   │   └── QuizQuestion.astro       # Individual quiz question
│   ├── layouts/
│   │   └── BaseLayout.astro         # Base HTML layout
│   ├── lib/
│   │   ├── progress.ts              # Progress tracking (localStorage)
│   │   └── badges.ts                # Badge system logic
│   ├── styles/
│   │   └── global.css               # Global styles with design tokens
│   └── env.d.ts                     # TypeScript environment declarations
├── package.json
├── astro.config.mjs                 # Astro + MDX config
├── tsconfig.json
└── README.md
```

---

## Course Structure (20 Days)

| Week | Days | Topics | Mini-Project |
|------|------|--------|--------------|
| 1 | 1-5 | JDK setup, variables, operators, Scanner, if/else | Calculator (Day 5) |
| 2 | 6-10 | Switch, while/do-while/for loops, methods | Inventory system (Day 10) |
| 3 | 11-15 | Advanced methods, arrays, intro to OOP, constructors | Robot simulator (Day 15) |
| 4 | 16-20 | Encapsulation, static, inheritance, polymorphism, exceptions | Adventure game (Day 20) |

### Content Schema (per lesson)
Each MDX lesson has frontmatter with:
- `day`: Day number (1-20)
- `title`: Lesson title
- `objective`: Single-sentence learning goal
- `topics`: Array of topics covered
- `miniProject`: Boolean flag for cumulative project days

### Lesson Format (ADHD-friendly)
1. Objective (1 sentence)
2. Before starting (2-4 bullets)
3. Micro-step explanations (numbered, short)
4. Minimal example with line-by-line explanation
5. Guided exercises (with 2 hints + solution)
6. Practice exercises
7. Mini-quiz (max 5 questions)
8. Optional challenge
9. Achievement checklist (3-6 items)

---

## Progress System

Data stored in `localStorage` under key `java-course-progress`:

```typescript
interface Progress {
  completedDays: number[];        // Completed day numbers
  currentDay: number;             // Current unlocked day
  streak: number;                 // Consecutive days streak
  lastCompletedDate: string | null;
  badges: string[];               // Earned badge IDs
  exercisesCompleted: Record<string, number[]>;  // Per-day exercise tracking
  quizScores: Record<string, number>;            // Per-day quiz scores
}
```

### Available Badges
- `first-day` - First lesson completed
- `week-1` - 5 days completed
- `week-2` - 10 days completed
- `week-3` - 15 days completed
- `completed` - All 20 days completed
- `streak-3` - 3 consecutive days
- `streak-7` - 7 consecutive days

### Day Status States
- `locked` - Not yet accessible
- `available` - Ready to start
- `in-progress` - Currently working on
- `completed` - Marked as done

---

## Key Components

### ExerciseBlock
```astro
<ExerciseBlock id={1} title="Title" difficulty="easy">
  Exercise description
  <div slot="hint1">First hint</div>
  <div slot="hint2">Second hint</div>
  <div slot="solution">```java
// Solution code
```</div>
</ExerciseBlock>
```

### QuizBlock
```astro
<QuizBlock day={1}>
  <QuizQuestion
    id={1}
    question="Question text?"
    options={[
      { text: 'Option 1', correct: false },
      { text: 'Option 2', correct: true },
    ]}
  />
</QuizBlock>
```

### Checklist
```astro
<Checklist items={['Achievement 1', 'Achievement 2']} />
```

---

## Design System

### Color Palette
- **Background**: `#0a0e27` (deep dark blue)
- **Primary**: `#00d9ff` (bright cyan)
- **Secondary**: `#7b2cbf` (purple)
- **Accent**: `#ff006e` (neon pink)
- **Success**: `#06ffa5` (neon green)
- **Warning**: `#ffbe0b` (yellow)

### UI Features
- Dark theme by default
- Glassmorphism effects (blur + transparency)
- Smooth hover/fade-in/shimmer animations
- Glow shadows
- Responsive design

---

## Deployment

### Repository
- GitHub: https://github.com/zonik811/JavaClass

### Recommended Platforms
- **Netlify**: Drag `dist/` folder or connect GitHub repo
- **Vercel**: `vercel --prod` or import from GitHub
- **GitHub Pages**: `npm install -D gh-pages` + `gh-pages -d dist`

---

## Development Conventions

### Adding New Lessons
1. Create `src/content/lessons/dia-XX.mdx`
2. Follow the frontmatter schema defined in `src/content/config.ts`
3. Use Day 1 (`dia-01.mdx`) as reference format
4. Include interactive components: `ExerciseBlock`, `QuizBlock`, `Checklist`

### Code Style
- TypeScript for all logic
- Astro components (`.astro` files) with clear prop interfaces
- MDX for content pages
- CSS variables for theming (defined in `global.css`)

### Testing
Currently no automated test suite. Manual testing involves:
1. Running `npm run dev`
2. Verifying lesson rendering and navigation
3. Testing progress persistence in localStorage
4. Checking quiz auto-grading

---

## Notable Files

- `src/lib/progress.ts` - Core progress management (save/load, mark complete, award badges)
- `src/content/config.ts` - Zod schema validation for lesson content
- `src/pages/dia/[day].astro` - Dynamic route template for lessons
- `astro.config.mjs` - Astro + MDX integration settings
