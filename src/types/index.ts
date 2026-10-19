export * from '@/lib/data/types';
export * from '@/lib/analysis/types';

// Backward compatibility aliases
export type DogProfile = import('@/lib/data/types').DogProfileEntity;
export type TrainingPlan = import('@/lib/data/types').TrainingPlanEntity;
export type FavoriteItem = import('@/lib/data/types').FavoriteEntity;
export type ChatMessage = import('@/lib/data/types').AssistantMessageEntity;

export interface UserAccount {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export type { BehaviorProblem } from '@/lib/content/problems';
export type { LibraryArticle } from '@/lib/content/articles';
