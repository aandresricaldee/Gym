"use client";

import React, { useState, useMemo } from "react";
import { exercises, Exercise, categories } from "@/lib/exercises";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ExerciseModal } from "@/components/ui/ExerciseModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function HomePage() {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleViewExercise = (exercise: Exercise) => {
    setCurrentExercise(exercise);
    setModalOpen(true);
  };

  const handleAddToRoutine = (exercise: Exercise) => {
    if (!selectedExercises.find((ex) => ex.id === exercise.id)) {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  const handleRemoveFromRoutine = (exerciseId: string) => {
    setSelectedExercises(selectedExercises.filter((ex) => ex.id !== exerciseId));
  };

  const clearRoutine = () => {
    setSelectedExercises([]);
  };

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exercise.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exercise.targetMuscles.some(muscle => 
                             muscle.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      const matchesCategory = selectedCategory === "Todos" || exercise.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
              Gym Routines Pro
            </h1>
            <p className="text-muted-foreground text-lg">
              Crea rutinas personalizadas para tus alumnos
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Ejercicios disponibles */}
          <section className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Biblioteca de Ejercicios</h2>
              
              {/* Filtros */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <Input
                    placeholder="Buscar ejercicios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="sm:w-48">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contador de resultados */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {filteredExercises.length} ejercicio{filteredExercises.length !== 1 ? 's' : ''} encontrado{filteredExercises.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {/* Grid de ejercicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredExercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  onView={handleViewExercise}
                  onAddToRoutine={handleAddToRoutine}
                  isInRoutine={selectedExercises.some((ex) => ex.id === exercise.id)}
                />
              ))}
            </div>

            {filteredExercises.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No se encontraron ejercicios</h3>
                <p className="text-muted-foreground">
                  Intenta con otros términos de búsqueda o cambia la categoría
                </p>
              </div>
            )}
          </section>

          {/* Panel de rutina */}
          <section className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-lg border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Mi Rutina</CardTitle>
                    <Badge variant="secondary" className="text-sm">
                      {selectedExercises.length} ejercicio{selectedExercises.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {selectedExercises.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-3">💪</div>
                      <p className="text-muted-foreground text-sm">
                        Aún no has agregado ejercicios a tu rutina.
                        <br />
                        Selecciona ejercicios de la biblioteca.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {selectedExercises.map((exercise, index) => (
                        <div
                          key={exercise.id}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                                {index + 1}
                              </span>
                              <span className="font-medium text-sm">{exercise.name}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {exercise.category}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewExercise(exercise)}
                              className="text-xs px-2 py-1 h-auto"
                            >
                              Ver
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleRemoveFromRoutine(exercise.id)}
                              className="text-xs px-2 py-1 h-auto text-destructive hover:text-destructive"
                            >
                              ✕
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-4 border-t">
                        <Button
                          variant="outline"
                          onClick={clearRoutine}
                          className="w-full text-sm"
                        >
                          Limpiar rutina
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      {/* Modal de ejercicio */}
      <ExerciseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        exercise={currentExercise}
      />
    </div>
  );
}
