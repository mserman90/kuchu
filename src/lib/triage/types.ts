export type ProblemCategory = 
  | 'barking'
  | 'biting_aggression'
  | 'separation_anxiety'
  | 'leash_reactivity'
  | 'potty_regression'
  | 'fear_phobia'
  | 'jumping_hyperactivity'
  | 'senior_dishaa'
  | 'pain_medical'
  | 'predatory_drift';

export interface TriageOption {
  id: string;
  label: string;
  description: string;
  icon?: string;
  tags?: string[];
}

export interface TriageQuestion {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  options: TriageOption[];
}

export interface TriageAnswers {
  primarySymptom?: string;
  timelineOnset?: string;
  dogAgeGroup?: string;
  bodyLanguageStress?: string;
  ownerReaction?: string;
}

export interface TriageSolution {
  diagnosisTitle: string;
  category: ProblemCategory;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  confidencePercentage: number;
  clinicalSummary: string;
  rootCause: string;
  redFlags: string[];
  merck3MPlan: {
    management: string;
    modification: string;
    responseSubstitution: string;
    medicalThreshold: string;
  };
  immediateActionSteps: string[];
  ownerMistakesToStop: string[];
  recommendedProblemSlug?: string;
  recommendedArticleSlug?: string;
  recommendedPlanType?: string;
}
