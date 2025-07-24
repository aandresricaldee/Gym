"use client";

import React from "react";
import { Exercise } from "@/lib/exercises";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ExerciseCardProps {
  exercise: Exercise;
  onView: (exercise: Exercise) => void;
  onAddToRoutine: (exercise: Exercise) => void;
  isInRoutine: boolean;
}

export function ExerciseCard({ exercise, onView, onAddToRoutine, isInRoutine }: ExerciseCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight">{exercise.name}</CardTitle>
          <Badge variant="secondary" className="text-xs shrink-0">
            {exercise.category}
          </Badge>
        </div>
        <CardDescription className="text-sm line-clamp-3">
          {exercise.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2 font-medium">Músculos trabajados:</p>
          <div className="flex flex-wrap gap-1">
            {exercise.targetMuscles.slice(0, 3).map((muscle) => (
              <Badge key={muscle} variant="outline" className="text-xs px-2 py-0.5">
                {muscle}
              </Badge>
            ))}
            {exercise.targetMuscles.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{exercise.targetMuscles.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Button
            onClick={() => onView(exercise)}
            variant="outline"
            className="w-full text-sm font-medium hover:bg-primary hover:text-primary-foreground"
          >
            Ver Demostración
          </Button>
          
          <Button
            onClick={() => onAddToRoutine(exercise)}
            disabled={isInRoutine}
            className="w-full text-sm font-medium"
            variant={isInRoutine ? "secondary" : "default"}
          >
            {isInRoutine ? "Ya en rutina" : "Agregar a rutina"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
