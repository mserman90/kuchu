import { ScoreBreakdown, RiskLevel, BehaviorAnalysisEntity } from '../data/types';

export type TailPosition = 'high_stiff' | 'neutral' | 'low' | 'tucked';
export type TailSpeed = 'none' | 'slow_rhythmic' | 'medium' | 'fast_frantic';
export type TailSpread = 'narrow_tight' | 'broad_loose' | 'circular_helicopter';
export type TailDirection = 'biased_right' | 'biased_left' | 'balanced';
export type TailTension = 'relaxed_fluid' | 'stiff_vibrating';

export type EarPosition = 'pricked_forward' | 'relaxed_side' | 'pulled_back' | 'pinned_flat';

export type EyeGaze = 'soft_squint' | 'relaxed_normal' | 'hard_stare' | 'whale_eye' | 'avoidant';

export type MouthFace = 
  | 'closed_relaxed' 
  | 'open_panting_gentle' 
  | 'lip_licking_stress' 
  | 'teeth_baring_snarl' 
  | 'yawning_stress';

export type BodyPosture = 
  | 'balanced_relaxed' 
  | 'weight_forward_tense' 
  | 'cowering_crouched' 
  | 'arched_small' 
  | 'piloerection_hackles' 
  | 'play_bow';

export type EnergyMovement = 
  | 'calm' 
  | 'explorative' 
  | 'hyperactive_agitated' 
  | 'frozen_still' 
  | 'fleeing' 
  | 'approach_retreat';

export type EnvironmentContext = 'home' | 'street' | 'vet_clinic' | 'dog_park' | 'guest_arrival' | 'other';
export type TriggerContext = 'none' | 'stranger_human' | 'other_dog' | 'loud_noise' | 'food_toy' | 'handling_touch';

export interface BehaviorInputState {
  tailPosition: TailPosition;
  tailSpeed: TailSpeed;
  tailSpread: TailSpread;
  tailDirection: TailDirection;
  tailTension: TailTension;
  earPosition: EarPosition;
  eyeGaze: EyeGaze;
  mouthFace: MouthFace;
  bodyPosture: BodyPosture;
  energyMovement: EnergyMovement;
  environment?: EnvironmentContext;
  trigger?: TriggerContext;
  dogName?: string;
  notes?: string;
}

export interface OptionItem<T extends string = string> {
  id: T;
  label: string;
  desc?: string;
  scientificInsight?: string;
}

export type BehaviorAnalysisResult = BehaviorAnalysisEntity;
export type { ScoreBreakdown, RiskLevel };
