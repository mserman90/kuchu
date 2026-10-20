import { client } from '@/lib/atomsClient';
import { 
  DogProfileEntity, 
  BehaviorAnalysisEntity, 
  TrainingPlanEntity, 
  FavoriteEntity, 
  AssistantMessageEntity 
} from './types';

// Default Demo Dog
export const DEFAULT_DOG: DogProfileEntity = {
  id: 'dog_demo_01',
  name: 'Kuçu',
  breed: 'Golden Retriever Melezi',
  ageYears: 2,
  ageMonths: 4,
  size: 'medium',
  gender: 'male',
  isNeutered: true,
  energyLevel: 'medium',
  knownIssues: ['Tasma Çekme', 'Zil Çalınca Havlama'],
  specialNotes: 'Pozitif pekiştirme ile ödül mamasına yüksek motivasyon gösterir. Ani yüksek seslerden ürker.',
  createdAt: new Date().toISOString()
};

function getLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(`kuchu_${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setLocal<T>(key: string, val: T): void {
  try {
    localStorage.setItem(`kuchu_${key}`, JSON.stringify(val));
  } catch (e) {
    console.error('LocalStorage write failed:', e);
  }
}

export const dataEntities = {
  // 1. Dog Profiles
  dogs: {
    async list(): Promise<DogProfileEntity[]> {
      try {
        const remote = await client.entities.dog_profiles.list();
        if (remote && remote.length > 0) {
          setLocal('dogs', remote);
          return remote as DogProfileEntity[];
        }
      } catch (err) {
        console.warn('Backend list dogs fallback to local:', err);
      }
      return getLocal<DogProfileEntity[]>('dogs', [DEFAULT_DOG]);
    },
    async create(item: Omit<DogProfileEntity, 'id' | 'createdAt'>): Promise<DogProfileEntity> {
      const record: DogProfileEntity = {
        ...item,
        id: 'dog_' + Math.random().toString(36).substring(2, 9),
        createdAt: new Date().toISOString()
      };
      try {
        await client.entities.dog_profiles.create(record as any);
      } catch (err) {
        console.warn('Backend create dog error, stored locally:', err);
      }
      const all = await this.list();
      const updated = [record, ...all];
      setLocal('dogs', updated);
      return record;
    },
    async delete(id: string): Promise<void> {
      try {
        await client.entities.dog_profiles.delete(id);
      } catch (err) {
        console.warn('Backend delete dog error:', err);
      }
      const all = await this.list();
      setLocal('dogs', all.filter((d) => d.id !== id));
    }
  },

  // 2. Behavior Analyses
  analyses: {
    async list(): Promise<BehaviorAnalysisEntity[]> {
      try {
        const remote = await client.entities.behavior_analyses.list();
        if (remote && remote.length > 0) {
          setLocal('analyses', remote);
          return remote as any as BehaviorAnalysisEntity[];
        }
      } catch (err) {
        console.warn('Backend list analyses fallback to local:', err);
      }
      return getLocal<BehaviorAnalysisEntity[]>('analyses', []);
    },
    async create(item: BehaviorAnalysisEntity): Promise<BehaviorAnalysisEntity> {
      try {
        await client.entities.behavior_analyses.create(item as any);
      } catch (err) {
        console.warn('Backend create analysis error, saved locally:', err);
      }
      const all = await this.list();
      const updated = [item, ...all.filter((a) => a.id !== item.id)];
      setLocal('analyses', updated);
      return item;
    },
    async delete(id: string): Promise<void> {
      try {
        await client.entities.behavior_analyses.delete(id);
      } catch (err) {
        console.warn('Backend delete analysis error:', err);
      }
      const all = await this.list();
      setLocal('analyses', all.filter((a) => a.id !== id));
    }
  },

  // 3. Training Plans
  plans: {
    async list(): Promise<TrainingPlanEntity[]> {
      try {
        const remote = await client.entities.training_plans.list();
        if (remote && remote.length > 0) {
          setLocal('training_plans', remote);
          return remote as any as TrainingPlanEntity[];
        }
      } catch (err) {
        console.warn('Backend list plans fallback to local:', err);
      }
      return getLocal<TrainingPlanEntity[]>('training_plans', []);
    },
    async createOrUpdate(item: TrainingPlanEntity): Promise<TrainingPlanEntity> {
      try {
        await client.entities.training_plans.create(item as any);
      } catch (err) {
        console.warn('Backend save plan error, saved locally:', err);
      }
      const all = await this.list();
      const filtered = all.filter((p) => p.id !== item.id);
      const updated = [item, ...filtered];
      setLocal('training_plans', updated);
      return item;
    },
    async delete(id: string): Promise<void> {
      try {
        await client.entities.training_plans.delete(id);
      } catch (err) {
        console.warn('Backend delete plan error:', err);
      }
      const all = await this.list();
      setLocal('training_plans', all.filter((p) => p.id !== id));
    }
  },

  // 4. Favorites
  favorites: {
    async list(): Promise<FavoriteEntity[]> {
      try {
        const remote = await client.entities.favorites.list();
        if (remote && remote.length > 0) {
          setLocal('favorites', remote);
          return remote as any as FavoriteEntity[];
        }
      } catch (err) {
        console.warn('Backend list favorites fallback to local:', err);
      }
      return getLocal<FavoriteEntity[]>('favorites', []);
    },
    async toggle(fav: Omit<FavoriteEntity, 'id' | 'createdAt'>): Promise<{ added: boolean }> {
      try {
        const isAdded = await client.entities.favorites.toggle(fav as any);
        const remote = await client.entities.favorites.list();
        setLocal('favorites', remote);
        return { added: isAdded };
      } catch {
        const all = await this.list();
        const existing = all.find(
          (f) => f.targetType === fav.targetType && f.targetId === fav.targetId
        );
        if (existing) {
          const filtered = all.filter((f) => f.id !== existing.id);
          setLocal('favorites', filtered);
          return { added: false };
        } else {
          const newItem: FavoriteEntity = {
            ...fav,
            id: 'fav_' + Math.random().toString(36).substring(2, 9),
            createdAt: new Date().toISOString()
          };
          setLocal('favorites', [newItem, ...all]);
          return { added: true };
        }
      }
    }
  },

  // 5. Assistant Messages
  messages: {
    async list(): Promise<AssistantMessageEntity[]> {
      try {
        const remote = await client.entities.assistant_messages.list();
        if (remote && remote.length > 0) {
          setLocal('assistant_messages', remote);
          return remote as AssistantMessageEntity[];
        }
      } catch (err) {
        console.warn('Backend list messages fallback:', err);
      }
      return getLocal<AssistantMessageEntity[]>('assistant_messages', []);
    },
    async save(items: AssistantMessageEntity[]): Promise<void> {
      try {
        await client.entities.assistant_messages.save(items as any);
      } catch (err) {
        console.warn('Backend save messages error:', err);
      }
      setLocal('assistant_messages', items);
    },
    async clear(): Promise<void> {
      try {
        await client.entities.assistant_messages.clear();
      } catch (err) {
        console.warn('Backend clear messages error:', err);
      }
      setLocal('assistant_messages', []);
    }
  }
};
