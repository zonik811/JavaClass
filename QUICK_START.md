# 🚀 Guía de Inicio Rápido

## ✅ Instalación Completada

Las dependencias ya están instaladas. El proyecto está listo para usar.

---

## 🎯 Comandos Principales

### Ejecutar en modo desarrollo:
```bash
npm run dev
```
Abre `http://localhost:4321` en tu navegador.

### Build para producción:
```bash
npm run build
```

### Preview del build:
```bash
npm run preview
```

---

## 📂 Estructura del Proyecto

```
java-course-platform/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Página principal
│   │   └── dia/[day].astro          # Página de cada día
│   ├── content/lessons/
│   │   ├── dia-01.mdx               # ✅ COMPLETO
│   │   ├── dia-02.mdx               # 📝 Placeholder
│   │   └── ... (hasta dia-20.mdx)
│   ├── components/                  # Componentes reutilizables
│   ├── lib/                         # Lógica de progreso
│   └── styles/                      # Estilos globales
└── README.md                        # Documentación completa
```

---

## 🎨 Lo que Verás

### Página Principal (`/`)
- Listado de 20 días del curso
- Barra de progreso
- Sistema de racha
- Badges ganados
- Estados por día (bloqueado/disponible/en progreso/completado)

### Página de Día (`/dia/1`)
- Contenido completo de la lección
- Ejercicios interactivos con pistas
- Mini-quiz con calificación automática
- Checklist de logros
- Navegación entre días
- Botón "Marcar como completado"

---

## 📝 Próximos Pasos

### 1. Probar la Plataforma
```bash
npm run dev
```
Navega a `http://localhost:4321` y explora:
- Home page
- Día 1 (completamente funcional)
- Sistema de progreso
- Componentes interactivos

### 2. Desarrollar Días 2-20

Usa `dia-01.mdx` como referencia. Cada día debe incluir:

- **Objetivo** (1 frase)
- **Antes de empezar** (2-4 bullets)
- **Explicación en micro-pasos**
- **Ejemplo con explicación línea por línea**
- **10+ ejercicios** con:
  - Enunciado
  - Pista 1 (colapsable)
  - Pista 2 (colapsable)
  - Solución (colapsable)
- **Mini-quiz** (5 preguntas)
- **Checklist** (3-6 logros)
- **Reto opcional**

### 3. Crear Mini-Proyectos

**Día 5**: Calculadora Básica
**Día 10**: Sistema de Inventario
**Día 15**: Simulador de Robot
**Día 20**: Juego de Aventura

---

## 🎓 Formato ADHD-Friendly

### Reglas a Seguir:

1. **Micro-pasos**: Instrucciones numeradas, máx 2-3 líneas
2. **Sin teoría larga**: Máx 2-3 párrafos, luego práctica
3. **Feedback inmediato**: Ejercicios con soluciones
4. **Metas claras**: Objetivo específico por día
5. **Repetición**: Reforzar conceptos en ejercicios
6. **Visual**: Usar emojis, formateo, espacios

### Ejemplo de Micro-paso:
```markdown
1. **Abre VS Code**
2. **Haz clic en** `File` → `New File`
3. **Nómbralo**: `MiPrograma.java`
4. **Presiona Enter**
```

---

## 🛠️ Editar Contenido

### Archivo de Lección:
`src/content/lessons/dia-XX.mdx`

### Estructura:
```mdx
---
day: 2
title: "Variables y Tipos de Datos"
objective: "Declarar variables y usarlas"
topics: ["int", "double", "String", "boolean"]
miniProject: false
---

import ExerciseBlock from '../../components/ExerciseBlock.astro';
import QuizBlock from '../../components/QuizBlock.astro';
import QuizQuestion from '../../components/QuizQuestion.astro';
import Checklist from '../../components/Checklist.astro';

## 🎯 Objetivo del Día
[Descripción breve]

## 📋 Antes de Empezar
- Bullet 1
- Bullet 2

## Contenido
[Tu contenido aquí]

## Ejercicios
<ExerciseBlock id={1} title="Título" difficulty="easy">
  Enunciado
  
  <div slot="hint1">Pista 1</div>
  <div slot="hint2">Pista 2</div>
  <div slot="solution">
```java
// Solución
```
  </div>
</ExerciseBlock>

## Mini-Quiz
<QuizBlock day={2}>
  <QuizQuestion
    id={1}
    question="¿Pregunta?"
    options={[
      { text: 'Opción 1', correct: false },
      { text: 'Opción 2', correct: true },
    ]}
  />
</QuizBlock>

## Checklist
<Checklist
  items={[
    'Logro 1',
    'Logro 2',
  ]}
/>
```

---

## 📊 Progreso del Curso

### Completado:
- ✅ Arquitectura de plataforma
- ✅ Sistema de progreso
- ✅ Componentes interactivos
- ✅ Día 1 (ultra-detallado)
- ✅ Placeholders días 2-20

### Pendiente:
- 📝 Contenido días 2-20 (siguiendo formato Día 1)
- 📝 Mini-proyectos (días 5, 10, 15, 20)
- 📝 Testing con usuarios

---

## 🎯 Objetivos de Aprendizaje por Semana

### Semana 1 (Días 1-5)
- Setup y primer programa
- Variables y tipos
- Operadores
- Entrada de usuario
- Control de flujo (if/else)
- **Mini-Proyecto**: Calculadora

### Semana 2 (Días 6-10)
- Switch
- Bucles (while, for)
- Control de bucles
- Métodos básicos
- **Mini-Proyecto**: Inventario

### Semana 3 (Días 11-15)
- Métodos avanzados
- Arrays
- POO: Clases y objetos
- Constructores
- **Mini-Proyecto**: Robot Simulator

### Semana 4 (Días 16-20)
- Encapsulación
- Static
- Herencia
- Polimorfismo
- Excepciones
- **Proyecto Final**: Juego de Aventura

---

## 🎨 Personalización

### Cambiar Colores:
Edita `src/styles/global.css`:

```css
:root {
  --color-primary: #00d9ff;    /* Cyan */
  --color-secondary: #7b2cbf;  /* Púrpura */
  --color-accent: #ff006e;     /* Rosa */
}
```

### Agregar Badges:
Edita `src/lib/badges.ts`:

```typescript
export const BADGES: Record<string, Badge> = {
  'nuevo-badge': {
    id: 'nuevo-badge',
    name: '🎯 Nombre',
    description: 'Descripción',
    icon: '🎯',
  },
};
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
npm install
```

### Error: "Port 4321 already in use"
```bash
# Cambia el puerto en package.json:
"dev": "astro dev --port 3000"
```

### Contenido no se actualiza
```bash
# Reinicia el servidor:
Ctrl+C
npm run dev
```

---

## 📚 Recursos

- **Astro Docs**: https://docs.astro.build
- **MDX**: https://mdxjs.com
- **TypeScript**: https://www.typescriptlang.org

---

## 🎉 ¡Listo!

Tu plataforma está funcionando. Ahora solo falta:

1. **Ejecutar**: `npm run dev`
2. **Explorar**: Día 1 completo
3. **Desarrollar**: Días 2-20 siguiendo el formato

**¡Mucho éxito con el curso! 🚀**
