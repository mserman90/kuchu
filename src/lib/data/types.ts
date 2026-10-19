export interface DogProfileEntity {
  id: string;
  user_id?: string;
  name: string;
  breed: string;
  ageYears: number;
  ageMonths: number;
  size: 'small' | 'medium' | 'large' | 'giant';
  gender: 'male' | 'female';
  isNeutered: boolean;
  energyLevel: 'low' | 'medium' | 'high';
  knownIssues: string[];
  specialNotes?: string;
  createdAt: string;
}

export interface ScoreBreakdown {
  tailScore: number;      // max 30
  postureScore: number;   // max 25
  faceScore: number;      // max 20
  earScore: number;       // max 15
  energyScore: number;    // max 10
  totalScore: number;     // max 100
}

export type RiskLevel = 'green' | 'yellow' | 'red';

export interface BehaviorAnalysisEntity {
  id: string;
  user_id?: string;
  dogId?: string;
  dogName: string;
  timestamp: string;
  moodCategory: string;
  moodTitle: string;
  moodSubtitle: string;
  riskLevel: RiskLevel;
  riskScore: number; // 0 - 100
  riskTitle: string;
  confidenceScore: number; // %
  summary: string;
  scoreBreakdown: ScoreBreakdown;
  calmingSignalsDetected: string[];
  scientificInsights: string[];
  whatToDo: string[];
  whatNotToDo: string[];
  likelyCauses: string[];
  recommendedPlanCategory?: string;
  inputs: Record<string, string>;
}

export interface TrainingExerciseItem {
  day: number;
  title: string;
  durationMinutes: number;
  goal: string;
  steps: string[];
  rewardTip: string;
  calmingSignalWatch: string;
  completed: boolean;
}

export interface TrainingPlanEntity {
  id: string;
  user_id?: string;
  dogId?: string;
  dogName: string;
  category: string;
  planTitle: string;
  durationDays: 7 | 14 | 30;
  level: 'beginner' | 'intermediate' | 'advanced';
  createdAt: string;
  completedDays: number[];
  exercises: TrainingExerciseItem[];
}

export interface FavoriteEntity {
  id: string;
  user_id?: string;
  targetType: 'article' | 'problem' | 'analysis' | 'plan';
  targetId: string;
  title: string;
  category?: string;
  createdAt: string;
}

export interface AssistantMessageEntity {
  id: string;
  user_id?: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  dogName?: string;
  isStreaming?: boolean;
}
