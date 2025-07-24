export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoPath: string;
  category: string;
  targetMuscles: string[];
}

export const exercises: Exercise[] = [
  {
    id: "pushup",
    name: "Flexiones de Pecho",
    description: "Ejercicio fundamental para desarrollar fuerza en pecho, tríceps y hombros. Mantén el cuerpo recto y baja hasta que el pecho casi toque el suelo.",
    videoPath: "/videos/pushup.mp4",
    category: "Pecho",
    targetMuscles: ["Pectorales", "Tríceps", "Deltoides"]
  },
  {
    id: "squat",
    name: "Sentadillas",
    description: "Ejercicio compuesto para fortalecer piernas y glúteos. Baja como si te fueras a sentar en una silla, manteniendo la espalda recta.",
    videoPath: "/videos/squat.mp4",
    category: "Piernas",
    targetMuscles: ["Cuádriceps", "Glúteos", "Isquiotibiales"]
  },
  {
    id: "pullup",
    name: "Dominadas",
    description: "Ejercicio de tracción para desarrollar la espalda y bíceps. Cuelga de la barra y eleva tu cuerpo hasta que la barbilla pase la barra.",
    videoPath: "/videos/pullup.mp4",
    category: "Espalda",
    targetMuscles: ["Dorsales", "Bíceps", "Romboides"]
  },
  {
    id: "plank",
    name: "Plancha",
    description: "Ejercicio isométrico para fortalecer el core. Mantén el cuerpo recto como una tabla, apoyado en antebrazos y pies.",
    videoPath: "/videos/plank.mp4",
    category: "Core",
    targetMuscles: ["Abdominales", "Core", "Estabilizadores"]
  },
  {
    id: "deadlift",
    name: "Peso Muerto",
    description: "Ejercicio compuesto que trabaja múltiples grupos musculares. Levanta la barra desde el suelo manteniendo la espalda recta.",
    videoPath: "/videos/deadlift.mp4",
    category: "Espalda",
    targetMuscles: ["Dorsales", "Glúteos", "Isquiotibiales", "Trapecios"]
  },
  {
    id: "burpee",
    name: "Burpees",
    description: "Ejercicio de cuerpo completo que combina fuerza y cardio. Desde posición de pie, baja a plancha, haz flexión y salta.",
    videoPath: "/videos/burpee.mp4",
    category: "Cardio",
    targetMuscles: ["Cuerpo completo", "Cardiovascular"]
  },
  {
    id: "lunges",
    name: "Zancadas",
    description: "Ejercicio unilateral para piernas y glúteos. Da un paso adelante y baja hasta que ambas rodillas formen 90 grados.",
    videoPath: "/videos/lunges.mp4",
    category: "Piernas",
    targetMuscles: ["Cuádriceps", "Glúteos", "Gemelos"]
  },
  {
    id: "dips",
    name: "Fondos en Paralelas",
    description: "Ejercicio para tríceps y pecho. Baja el cuerpo flexionando los brazos y empuja hacia arriba.",
    videoPath: "/videos/dips.mp4",
    category: "Brazos",
    targetMuscles: ["Tríceps", "Pectorales", "Deltoides"]
  }
];

export const categories = [
  "Todos",
  "Pecho",
  "Espalda", 
  "Piernas",
  "Brazos",
  "Core",
  "Cardio"
];
