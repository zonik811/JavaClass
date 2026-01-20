# ☕ Plataforma de Curso Java - 20 Días

## 📋 Resumen del Proyecto

Plataforma e-learning construida con **Astro + TypeScript + MDX** para enseñar Java desde cero hasta POO en 20 días. Diseñada específicamente para estudiantes de 15 años con TDAH, con ritmo lento, micro-pasos, y feedback inmediato.

---

## 🎯 Características Principales

### ✅ Plataforma
- **Framework**: Astro 4.0 + TypeScript
- **Contenido**: MDX (Markdown + Componentes React)
- **Progreso**: localStorage (sin backend)
- **Diseño**: Gaming/moderno con gradientes y animaciones
- **Componentes interactivos**: Ejercicios, quizzes, checklists

### ✅ Sistema de Progreso
- Tracking de días completados
- Sistema de racha (días consecutivos)
- Badges por logros (primer día, semanas, racha)
- Barra de progreso visual
- Estado por día: bloqueado/disponible/en progreso/completado

### ✅ Componentes Didácticos
- **ExerciseBlock**: Ejercicios con pistas colapsables y solución
- **QuizBlock**: Mini-quizzes con calificación automática
- **Checklist**: Lista de logros del día
- **BadgeDisplay**: Visualización de badges ganados
- **Navigation**: Navegación entre días

---

## 📂 Estructura del Proyecto

```
java-course-platform/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Home con listado de días
│   │   └── dia/[day].astro          # Vista dinámica por día
│   ├── content/
│   │   ├── config.ts                # Configuración de colecciones
│   │   └── lessons/
│   │       ├── dia-01.mdx           ✅ COMPLETO (ultra-detallado)
│   │       ├── dia-02.mdx           📝 Placeholder
│   │       ├── dia-03.mdx           📝 Placeholder
│   │       └── ... (hasta dia-20)   📝 Placeholders
│   ├── components/
│   │   ├── DayCard.astro            ✅ Completo
│   │   ├── ProgressBar.astro        ✅ Completo
│   │   ├── ExerciseBlock.astro      ✅ Completo
│   │   ├── QuizBlock.astro          ✅ Completo
│   │   ├── QuizQuestion.astro       ✅ Completo
│   │   ├── Checklist.astro          ✅ Completo
│   │   ├── BadgeDisplay.astro       ✅ Completo
│   │   └── Navigation.astro         ✅ Completo
│   ├── layouts/
│   │   └── BaseLayout.astro         ✅ Completo
│   ├── lib/
│   │   ├── progress.ts              ✅ Completo (localStorage)
│   │   └── badges.ts                ✅ Completo (sistema de badges)
│   └── styles/
│       └── global.css               ✅ Completo (diseño gaming)
├── package.json                     ✅ Completo
├── astro.config.mjs                 ✅ Completo
└── tsconfig.json                    ✅ Completo
```

---

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

```bash
cd java-course-platform
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

La plataforma estará disponible en `http://localhost:4321`

### 3. Build para producción

```bash
npm run build
npm run preview
```

---

## 📚 Plan del Curso (20 Días)

| Día | Título | Estado | Mini-Proyecto |
|-----|--------|--------|---------------|
| 1 | Tu Primer Programa Java | ✅ **COMPLETO** | - |
| 2 | Variables y Tipos de Datos | 📝 Placeholder | - |
| 3 | Operadores y Expresiones | 📝 Placeholder | - |
| 4 | Entrada de Datos con Scanner | 📝 Placeholder | - |
| 5 | Control de Flujo: if/else | 📝 Placeholder | 🎯 Calculadora |
| 6 | Switch y Menús | 📝 Placeholder | - |
| 7 | Bucles: while y do-while | 📝 Placeholder | - |
| 8 | Bucles: for | 📝 Placeholder | - |
| 9 | Break, Continue y Bucles Anidados | 📝 Placeholder | - |
| 10 | Métodos (Funciones) - Parte 1 | 📝 Placeholder | 🎯 Inventario |
| 11 | Métodos - Parte 2 | 📝 Placeholder | - |
| 12 | Arreglos (Arrays) | 📝 Placeholder | - |
| 13 | Recorrer Arrays y Búsqueda | 📝 Placeholder | - |
| 14 | Introducción a POO | 📝 Placeholder | - |
| 15 | Atributos, Métodos y Constructores | 📝 Placeholder | 🎯 Robot Simulator |
| 16 | Encapsulación | 📝 Placeholder | - |
| 17 | Static vs Instancia | 📝 Placeholder | - |
| 18 | Herencia Básica | 📝 Placeholder | - |
| 19 | Polimorfismo e Interfaces | 📝 Placeholder | - |
| 20 | Excepciones y Proyecto Final | 📝 Placeholder | 🎯 Juego de Aventura |

---

## 📖 Día 1: Ejemplo de Contenido Completo

El **Día 1** está completamente desarrollado con:

- ✅ Instalación paso a paso de JDK y VS Code
- ✅ Primer programa "Hola Mundo" con explicación línea por línea
- ✅ 10 ejercicios guiados (con pistas y soluciones)
- ✅ Mini-quiz de 5 preguntas con calificación automática
- ✅ Checklist de 6 logros
- ✅ Sección de errores comunes y soluciones
- ✅ Reto opcional
- ✅ Formato ADHD-friendly: micro-pasos, instrucciones cortas, feedback inmediato

**Total de ejercicios Día 1**: 10 ejercicios completos

---

## 🎨 Diseño y Estilo

### Paleta de Colores
- **Fondo**: `#0a0e27` (azul oscuro profundo)
- **Primario**: `#00d9ff` (cyan brillante)
- **Secundario**: `#7b2cbf` (púrpura)
- **Acento**: `#ff006e` (rosa neón)
- **Éxito**: `#06ffa5` (verde neón)
- **Advertencia**: `#ffbe0b` (amarillo)

### Características Visuales
- Gradientes vibrantes
- Glassmorphism (blur + transparencia)
- Animaciones suaves (hover, fade-in, shimmer)
- Sombras con glow
- Diseño responsive
- Dark theme por defecto

---

## 🧩 Componentes Interactivos

### ExerciseBlock
```astro
<ExerciseBlock id={1} title="Título" difficulty="easy">
  Enunciado del ejercicio
  
  <div slot="hint1">Primera pista</div>
  <div slot="hint2">Segunda pista</div>
  <div slot="solution">Solución completa</div>
</ExerciseBlock>
```

### QuizBlock
```astro
<QuizBlock day={1}>
  <QuizQuestion
    id={1}
    question="¿Pregunta?"
    options={[
      { text: 'Opción 1', correct: false },
      { text: 'Opción 2', correct: true },
    ]}
  />
</QuizBlock>
```

### Checklist
```astro
<Checklist
  items={[
    'Logro 1',
    'Logro 2',
    'Logro 3'
  ]}
/>
```

---

## 💾 Sistema de Progreso (localStorage)

### Estructura de Datos

```typescript
{
  completedDays: [1, 2, 3],        // Días completados
  currentDay: 4,                    // Día actual
  streak: 3,                        // Racha de días consecutivos
  lastCompletedDate: "2026-01-20",  // Última fecha de completado
  badges: ["first-day", "week-1"],  // Badges ganados
  exercisesCompleted: {
    "1": [1, 2, 3, 4, 5]            // Ejercicios completados por día
  },
  quizScores: {
    "1": 5                          // Puntaje de quiz por día
  }
}
```

### Badges Disponibles
- 🎯 **Primer Día**: Completaste tu primera lección
- 🔥 **Semana 1**: Completaste 5 días
- ⚡ **Semana 2**: Completaste 10 días
- 💎 **Semana 3**: Completaste 15 días
- 🏆 **Maestro Java**: Completaste todo el curso
- 🌟 **Racha de 3**: 3 días consecutivos
- 💫 **Racha de 7**: 7 días consecutivos

---

## 📝 Metodología Didáctica (ADHD-Friendly)

### Principios Aplicados

1. **Micro-pasos**: Cada instrucción es pequeña y clara
2. **Feedback inmediato**: Resultados visibles al instante
3. **Metas claras**: Objetivos específicos por día
4. **Repetición intencional**: Conceptos reforzados múltiples veces
5. **Cero teoría larga**: Máximo 2-3 párrafos, luego práctica
6. **Gamificación**: Badges, racha, progreso visual

### Estructura de Cada Día

1. **Objetivo** (1 frase clara)
2. **Antes de empezar** (2-4 bullets de recordatorio)
3. **Explicación en micro-pasos** (numerados, cortos)
4. **Ejemplo mínimo** + explicación línea por línea
5. **Ejercicios guiados** (con pista 1 y pista 2)
6. **Ejercicios de práctica** (sin solución inmediata)
7. **Mini-quiz** (máx 5 preguntas)
8. **Reto opcional** (para los que quieren más)
9. **Checklist de logro** (3-6 items)

---

## 🔄 Próximos Pasos

### Para Completar el Curso

1. **Desarrollar Días 2-20**: Seguir el mismo formato ultra-detallado del Día 1
2. **Mini-Proyectos**: Crear proyectos acumulativos para días 5, 10, 15, 20
3. **Recursos adicionales**: Videos, diagramas, ejemplos extra
4. **Testing**: Probar con estudiantes reales y ajustar

### Mejoras Opcionales

- [ ] Exportar/importar progreso (JSON download)
- [ ] Modo claro/oscuro toggle
- [ ] Búsqueda de lecciones
- [ ] Notas personales por día
- [ ] Certificado al completar
- [ ] Integración con GitHub para guardar código
- [ ] Foro de discusión (requiere backend)

---

## 🛠️ Tecnologías Utilizadas

- **Astro 4.0**: Framework web moderno
- **TypeScript**: Type-safety
- **MDX**: Markdown + Componentes
- **Prism.js**: Syntax highlighting
- **CSS Variables**: Sistema de diseño
- **localStorage**: Persistencia de progreso

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👨‍💻 Autor

Desarrollado como plataforma educativa para enseñar Java a estudiantes con TDAH.

---

## 🎓 Notas Pedagógicas

### ¿Por qué este enfoque funciona?

1. **Micro-pasos**: Reduce la carga cognitiva
2. **Feedback inmediato**: Mantiene el engagement
3. **Gamificación**: Activa el sistema de recompensa
4. **Estructura predecible**: Reduce la ansiedad
5. **Ejercicios abundantes**: Refuerza el aprendizaje
6. **Visual atractivo**: Captura y mantiene la atención

### Adaptaciones para TDAH

- ✅ Instrucciones cortas y numeradas
- ✅ Objetivos claros y alcanzables
- ✅ Recompensas frecuentes (badges, racha)
- ✅ Variedad de actividades (leer, escribir, quiz)
- ✅ Progreso visual constante
- ✅ Sin bloques largos de texto

---

**¡Listo para empezar! 🚀**

Ejecuta `npm install && npm run dev` y abre `http://localhost:4321`
