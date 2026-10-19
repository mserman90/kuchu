import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  DogProfileEntity, 
  BehaviorAnalysisEntity, 
  TrainingPlanEntity, 
  FavoriteEntity 
} from '@/lib/data/types';
import { dataEntities } from '@/lib/data/entities';
import { toast } from 'sonner';

interface DogContextType {
  dogs: DogProfileEntity[];
  activeDog: DogProfileEntity | null;
  analyses: BehaviorAnalysisEntity[];
  activePlans: TrainingPlanEntity[];
  favorites: FavoriteEntity[];
  setActiveDog: (dog: DogProfileEntity) => void;
  addDog: (dog: Omit<DogProfileEntity, 'id' | 'createdAt'>) => Promise<DogProfileEntity>;
  deleteDog: (id: string) => Promise<void>;
  saveAnalysis: (analysis: BehaviorAnalysisEntity) => Promise<void>;
  deleteAnalysis: (id: string) => Promise<void>;
  saveTrainingPlan: (plan: TrainingPlanEntity) => Promise<void>;
  toggleExerciseCompletion: (planId: string, day: number) => Promise<void>;
  deleteTrainingPlan: (planId: string) => Promise<void>;
  toggleFavorite: (item: Omit<FavoriteEntity, 'id' | 'createdAt'>) => Promise<boolean>;
  isFavorite: (targetType: string, targetId: string) => boolean;
  refreshAll: () => Promise<void>;
}

const DogContext = createContext<DogContextType | undefined>(undefined);

export const DogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dogs, setDogs] = useState<DogProfileEntity[]>([]);
  const [activeDog, setActiveDogState] = useState<DogProfileEntity | null>(null);
  const [analyses, setAnalyses] = useState<BehaviorAnalysisEntity[]>([]);
  const [activePlans, setActivePlans] = useState<TrainingPlanEntity[]>([]);
  const [favorites, setFavorites] = useState<FavoriteEntity[]>([]);

  const refreshAll = async () => {
    const [loadedDogs, loadedAnalyses, loadedPlans, loadedFavs] = await Promise.all([
      dataEntities.dogs.list(),
      dataEntities.analyses.list(),
      dataEntities.plans.list(),
      dataEntities.favorites.list()
    ]);

    setDogs(loadedDogs);
    setAnalyses(loadedAnalyses);
    setActivePlans(loadedPlans);
    setFavorites(loadedFavs);

    const savedActiveDogId = localStorage.getItem('kuchu_active_dog_id');
    const active = loadedDogs.find((d) => d.id === savedActiveDogId) || loadedDogs[0] || null;
    setActiveDogState(active);
  };

  useEffect(() => {
    refreshAll();
  }, []);

  const setActiveDog = (dog: DogProfileEntity) => {
    setActiveDogState(dog);
    localStorage.setItem('kuchu_active_dog_id', dog.id);
    toast.success(`${dog.name} aktif köpek olarak seçildi.`);
  };

  const addDog = async (newDogData: Omit<DogProfileEntity, 'id' | 'createdAt'>) => {
    const created = await dataEntities.dogs.create(newDogData);
    const updated = [created, ...dogs];
    setDogs(updated);
    setActiveDogState(created);
    localStorage.setItem('kuchu_active_dog_id', created.id);
    toast.success(`${created.name} profili başarıyla oluşturuldu!`);
    return created;
  };

  const deleteDog = async (id: string) => {
    await dataEntities.dogs.delete(id);
    const updated = dogs.filter((d) => d.id !== id);
    setDogs(updated);
    if (activeDog?.id === id) {
      setActiveDogState(updated[0] || null);
    }
    toast.info('Profil silindi.');
  };

  const saveAnalysis = async (analysis: BehaviorAnalysisEntity) => {
    await dataEntities.analyses.create(analysis);
    setAnalyses((prev) => [analysis, ...prev.filter((a) => a.id !== analysis.id)]);
    toast.success('Davranış analizi profiline kaydedildi!');
  };

  const deleteAnalysis = async (id: string) => {
    await dataEntities.analyses.delete(id);
    setAnalyses((prev) => prev.filter((a) => a.id !== id));
    toast.info('Analiz kaydı silindi.');
  };

  const saveTrainingPlan = async (plan: TrainingPlanEntity) => {
    await dataEntities.plans.createOrUpdate(plan);
    setActivePlans((prev) => [plan, ...prev.filter((p) => p.id !== plan.id)]);
    toast.success('Eğitim planı aktif programlarınıza eklendi!');
  };

  const toggleExerciseCompletion = async (planId: string, day: number) => {
    const target = activePlans.find((p) => p.id === planId);
    if (!target) return;
    const updatedExercises = target.exercises.map((ex) =>
      ex.day === day ? { ...ex, completed: !ex.completed } : ex
    );
    const completedDays = updatedExercises.filter((ex) => ex.completed).map((ex) => ex.day);
    const updated: TrainingPlanEntity = {
      ...target,
      exercises: updatedExercises,
      completedDays
    };
    await dataEntities.plans.createOrUpdate(updated);
    setActivePlans((prev) => prev.map((p) => (p.id === planId ? updated : p)));
  };

  const deleteTrainingPlan = async (planId: string) => {
    await dataEntities.plans.delete(planId);
    setActivePlans((prev) => prev.filter((p) => p.id !== planId));
    toast.info('Eğitim planı silindi.');
  };

  const toggleFavorite = async (item: Omit<FavoriteEntity, 'id' | 'createdAt'>): Promise<boolean> => {
    const res = await dataEntities.favorites.toggle(item);
    const updatedFavs = await dataEntities.favorites.list();
    setFavorites(updatedFavs);
    return res.added;
  };

  const isFavorite = (targetType: string, targetId: string): boolean => {
    return favorites.some((f) => f.targetType === targetType && f.targetId === targetId);
  };

  return (
    <DogContext.Provider
      value={{
        dogs,
        activeDog,
        analyses,
        activePlans,
        favorites,
        setActiveDog,
        addDog,
        deleteDog,
        saveAnalysis,
        deleteAnalysis,
        saveTrainingPlan,
        toggleExerciseCompletion,
        deleteTrainingPlan,
        toggleFavorite,
        isFavorite,
        refreshAll
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

export const useDog = () => {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error('useDog must be used within a DogProvider');
  }
  return context;
};
