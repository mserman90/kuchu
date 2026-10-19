// Atoms Cloud Client & Local Mirror Wrapper for Kuchu
import { 
  DogProfile, 
  BehaviorAnalysisResult, 
  TrainingPlan, 
  FavoriteItem, 
  ChatMessage, 
  UserAccount 
} from '@/types';

const STORAGE_KEYS = {
  USER: 'kuchu_user',
  DOGS: 'kuchu_dogs',
  ACTIVE_DOG: 'kuchu_active_dog_id',
  ANALYSES: 'kuchu_analyses',
  PLANS: 'kuchu_plans',
  FAVORITES: 'kuchu_favorites',
  MESSAGES: 'kuchu_messages'
};

const DEFAULT_DOG: DogProfile = {
  id: 'dog_init_1',
  name: 'Milo',
  breed: 'Golden Retriever Melezi',
  ageYears: 2,
  ageMonths: 4,
  size: 'medium',
  gender: 'male',
  isNeutered: true,
  energyLevel: 'medium',
  knownIssues: ['Tasma Çekme', 'Aşırı Karşılama Heyecanı'],
  specialNotes: 'Dışarıda diğer köpekleri görünce heyecanla çekiyor, ev içinde çok sakin.',
  createdAt: new Date().toISOString()
};

class AtomsClientWrapper {
  public auth = {
    getCurrentUser: (): UserAccount | null => {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.USER);
        if (raw) return JSON.parse(raw);
        // Default guest user
        const guest: UserAccount = {
          id: 'user_kuchu_guest',
          email: 'sahip@kuchu.app',
          name: 'Köpek Dostu',
          created_at: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(guest));
        return guest;
      } catch {
        return null;
      }
    },
    login: async (email: string, name?: string): Promise<UserAccount> => {
      const user: UserAccount = {
        id: 'usr_' + Date.now().toString(),
        email,
        name: name || email.split('@')[0],
        created_at: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      return user;
    },
    logout: async (): Promise<void> => {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  };

  public entities = {
    dog_profiles: {
      list: async (): Promise<DogProfile[]> => {
        try {
          const raw = localStorage.getItem(STORAGE_KEYS.DOGS);
          if (raw) return JSON.parse(raw);
          const initial = [DEFAULT_DOG];
          localStorage.setItem(STORAGE_KEYS.DOGS, JSON.stringify(initial));
          return initial;
        } catch {
          return [DEFAULT_DOG];
        }
      },
      create: async (data: Omit<DogProfile, 'id' | 'createdAt'>): Promise<DogProfile> => {
        const dogs = await this.entities.dog_profiles.list();
        const newDog: DogProfile = {
          ...data,
          id: 'dog_' + Date.now().toString(),
          createdAt: new Date().toISOString()
        };
        const updated = [newDog, ...dogs];
        localStorage.setItem(STORAGE_KEYS.DOGS, JSON.stringify(updated));
        return newDog;
      },
      update: async (id: string, partial: Partial<DogProfile>): Promise<DogProfile | null> => {
        const dogs = await this.entities.dog_profiles.list();
        const updated = dogs.map((d) => (d.id === id ? { ...d, ...partial } : d));
        localStorage.setItem(STORAGE_KEYS.DOGS, JSON.stringify(updated));
        return updated.find((d) => d.id === id) || null;
      },
      delete: async (id: string): Promise<void> => {
        const dogs = await this.entities.dog_profiles.list();
        const updated = dogs.filter((d) => d.id !== id);
        localStorage.setItem(STORAGE_KEYS.DOGS, JSON.stringify(updated));
      }
    },

    behavior_analyses: {
      list: async (): Promise<BehaviorAnalysisResult[]> => {
        try {
          const raw = localStorage.getItem(STORAGE_KEYS.ANALYSES);
          return raw ? JSON.parse(raw) : [];
        } catch {
          return [];
        }
      },
      create: async (analysis: BehaviorAnalysisResult): Promise<BehaviorAnalysisResult> => {
        const items = await this.entities.behavior_analyses.list();
        const updated = [analysis, ...items];
        localStorage.setItem(STORAGE_KEYS.ANALYSES, JSON.stringify(updated));
        return analysis;
      },
      delete: async (id: string): Promise<void> => {
        const items = await this.entities.behavior_analyses.list();
        const updated = items.filter((a) => a.id !== id);
        localStorage.setItem(STORAGE_KEYS.ANALYSES, JSON.stringify(updated));
      }
    },

    training_plans: {
      list: async (): Promise<TrainingPlan[]> => {
        try {
          const raw = localStorage.getItem(STORAGE_KEYS.PLANS);
          return raw ? JSON.parse(raw) : [];
        } catch {
          return [];
        }
      },
      create: async (plan: TrainingPlan): Promise<TrainingPlan> => {
        const items = await this.entities.training_plans.list();
        const updated = [plan, ...items];
        localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(updated));
        return plan;
      },
      toggleDay: async (planId: string, day: number): Promise<void> => {
        const items = await this.entities.training_plans.list();
        const updated = items.map((p) => {
          if (p.id !== planId) return p;
          return {
            ...p,
            exercises: p.exercises.map((ex) =>
              ex.day === day ? { ...ex, completed: !ex.completed } : ex
            )
          };
        });
        localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(updated));
      },
      delete: async (id: string): Promise<void> => {
        const items = await this.entities.training_plans.list();
        const updated = items.filter((p) => p.id !== id);
        localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(updated));
      }
    },

    favorites: {
      list: async (): Promise<FavoriteItem[]> => {
        try {
          const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
          return raw ? JSON.parse(raw) : [];
        } catch {
          return [];
        }
      },
      toggle: async (item: Omit<FavoriteItem, 'id' | 'createdAt'>): Promise<boolean> => {
        const list = await this.entities.favorites.list();
        const exists = list.find((f) => f.targetType === item.targetType && f.targetId === item.targetId);
        if (exists) {
          const updated = list.filter((f) => f.id !== exists.id);
          localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
          return false;
        } else {
          const newFav: FavoriteItem = {
            ...item,
            id: 'fav_' + Date.now().toString(),
            createdAt: new Date().toISOString()
          };
          localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([newFav, ...list]));
          return true;
        }
      }
    },

    assistant_messages: {
      list: async (): Promise<ChatMessage[]> => {
        try {
          const raw = localStorage.getItem(STORAGE_KEYS.MESSAGES);
          return raw ? JSON.parse(raw) : [];
        } catch {
          return [];
        }
      },
      save: async (messages: ChatMessage[]): Promise<void> => {
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
      },
      clear: async (): Promise<void> => {
        localStorage.removeItem(STORAGE_KEYS.MESSAGES);
      }
    }
  };

  public ai = {
    // Streaming assistant chat
    chatStream: async (
      prompt: string,
      dogName: string,
      onChunk: (chunk: string) => void,
      onComplete: (fullText: string) => void
    ) => {
      const lower = prompt.toLowerCase();
      let responseTemplate = '';

      if (lower.includes('sol') && lower.includes('kuyruk')) {
        responseTemplate = `Vallortigara & Quaranta nöro-etoloji çalışmasına göre; kuyruğun SOLA ağırlıklı sallanması köpeğin SAĞ BEYİN yarıküresinin devrede olduğunu gösterir.\n\nSağ beyin korku, çekingenlik ve tehdit algısını yönetir.\n\n📌 ÖNERİ:\n${dogName} şu an ortamda tedirgin edici bir unsur algılıyor. Onu zorlamayın, araya mesafe koyun ve sakinleşmesi için alan tanıyın.`;
      } else if (lower.includes('yalnız') || lower.includes('ayrılık') || lower.includes('ağla')) {
        responseTemplate = `Ayrılık anksiyetesi bir şımarıklık değil, köpeğin yaşadığı akut bir panik atağıdır.\n\n📌 3 ADIMLI PROTOKOL:\n1. Ayrılık ipuçlarını etkisizleştirin: Mont giyip anahtarları sallayın ama evden çıkmayıp oturun.\n2. Mikro ayrılıklar yapın: Önce sadece 5-10 saniye kapıyı kapatıp dönün; ağlamadığı güvenli eşikte süreyi artırın.\n3. Çıkarken dondurulmuş bir fıstık ezmeli Kong oyuncağı vererek koklama ve yalama hormonlarını (endorfin) tetikleyin.\n\n⚠️ Asla eve döndüğünüzde eşyaları kemirdiği için köpeğe bağırmayın; bu onun ayrılık korkusunu felakete dönüştürür.`;
      } else if (lower.includes('ısır') || lower.includes('kemir') || lower.includes('paça')) {
        responseTemplate = `Yavru köpeklerde ısırma davranışı diş çıkarma sancısı ve dünyayı ağızla keşfetme sürecinin doğal bir parçasıdır.\n\n📌 ÇÖZÜM ADIMLARI:\n1. Canınızı yaktığı an tiz bir sesle "AYK!" deyip hareketsiz kalın ve 15 saniye arkanızı dönün. Isırmanın oyunu bitirdiğini anlasın.\n2. Asla ellerinizi sallayarak kaçırmayın (bu av dürtüsünü tetikler).\n3. Daima uygun bir çiğneme oyuncağı ile takas yapın.\n4. Aşırı hırçınlaşma çoğunlukla yorgunluk işaretidir; yavruyu sakin uyku alanına yönlendirin.`;
      } else if (lower.includes('don') || lower.includes('freeze') || lower.includes('heykel')) {
        responseTemplate = `DİKKAT: Donma (Freeze), köpeklerde 4F stres tepkilerinden biridir (Fight, Flight, Freeze, Fiddle).\n\nKöpek kaskatı kesildiyse ve gözlerini sabitlediyse bir sonraki aşama savunma amaçlı patlama veya ısırık olabilir!\n\n💡 Acil Eylem: Karşıdaki köpek veya insanla arasına derhal en az 5-10 metre mesafe koyun. Göz temasını kesin ve yan dönerek köpeğe güvenli kaçış açısı yaratın.`;
      } else if (lower.includes('hırla') || lower.includes('mama') || lower.includes('kaynak')) {
        responseTemplate = `Hırlama bir suç değil, köpeğin "Lütfen yaklaşma, korkuyorum" deme biçimidir.\n\n⚠️ ASLA hırladığı için köpeği cezalandırmayın! Hırlamayı cezalandırırsanız köpeğiniz uyarı vermeden doğrudan ısırmayı öğrenir.\n\n💡 Çözüm (Takas Prensibi): Mama kabına yaklaştığınızda kabı almaya çalışmayın; uzaktan kabın içine çok lezzetli bir parça haşlanmış tavuk atıp geçin. "İnsan yaklaşırsa daha iyisi gelir" algısı inşa edin.`;
      } else {
        responseTemplate = `${dogName} ile ilgili paylaştığınız durum için pozitif pekiştirme ve etoloji ilkeleri şunları önerir:\n\n1. Davranışın ardındaki duyguyu anlayın: İstenmeyen davranışların %90'ı korku, aşırı uyarılma veya karşılanmamış zihinsel enerjiden kaynaklanır.\n2. Alternatif bir davranış gösterin: İstemediğiniz davranışı cezalandırmak yerine, köpeğe yerine ne yapması gerektiğini öğretin (Örn: Atlamak yerine minderde oturmak).\n3. Zihinsel yorma: Günlük 15 dakikalık koku arama ve burun işi egzersizleri stres hormonlarını belirgin biçimde düşürür.\n\nDetaylı durum için platformumuzdaki 'Davranış Sorunu Çözüm Merkezi' ve 'Davranış Analizi' araçlarını da kullanabilirsiniz.`;
      }

      // Stream words smoothly
      const words = responseTemplate.split(' ');
      let accumulated = '';
      for (let i = 0; i < words.length; i++) {
        accumulated += (i === 0 ? '' : ' ') + words[i];
        onChunk(accumulated);
        await new Promise((resolve) => setTimeout(resolve, 35));
      }
      onComplete(accumulated);
    }
  };
}

export const client = new AtomsClientWrapper();
