"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Exercise } from "@/lib/exercises";
import { Button } from "./button";
import { Badge } from "./badge";

interface ExerciseModalProps {
  open: boolean;
  onClose: () => void;
  exercise: Exercise | null;
}

export function ExerciseModal({ open, onClose, exercise }: ExerciseModalProps) {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.error("Error loading video for exercise:", exercise?.name);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    setVideoError(false);
  };

  if (!exercise) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {exercise.name}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <Badge variant="secondary">{exercise.category}</Badge>
            {exercise.targetMuscles.map((muscle) => (
              <Badge key={muscle} variant="outline" className="text-xs">
                {muscle}
              </Badge>
            ))}
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground text-center px-4">
            {exercise.description}
          </p>
          
          <div className="relative bg-black rounded-lg overflow-hidden">
            {!videoError ? (
              <video
                src={exercise.videoPath}
                controls
                onError={handleVideoError}
                onLoadStart={handleVideoLoad}
                className="w-full h-auto max-h-96 object-contain"
                preload="metadata"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 bg-muted text-muted-foreground">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-lg font-medium mb-2">Video no disponible</p>
                <p className="text-sm text-center px-4">
                  El video de demostración para este ejercicio no se pudo cargar.
                  <br />
                  Consulta con tu entrenador para obtener instrucciones detalladas.
                </p>
              </div>
            )}
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Músculos trabajados:</h4>
            <div className="flex flex-wrap gap-2">
              {exercise.targetMuscles.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={onClose} className="px-8">
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
