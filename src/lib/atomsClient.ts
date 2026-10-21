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
  name: 'Kuçu',
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
      onComplete: (fullText: string) => void,
      lang: 'tr' | 'en' = 'tr'
    ) => {
      const lower = prompt.toLowerCase();
      let responseTemplate = '';

      if (lang === 'en') {
        if (lower.includes('dishaa') || lower.includes('dementia') || lower.includes('senior') || lower.includes('old') || lower.includes('aging')) {
          responseTemplate = `According to the Merck Veterinary Manual geriatric guidelines, onset of confusion, nighttime pacing, and wandering in dogs over 8 years old can indicate Canine Cognitive Dysfunction Syndrome (CDS - Canine Dementia).\n\n🩺 VETERINARY DISHAA CLINICAL SCREENING:\n• D (Disorientation): Getting stuck behind doors or in room corners, unable to back up.\n• I (Interactions): Social changes — excessive clinginess or aloof withdrawal from family.\n• S (Sleep-wake cycles): Pacing and vocalizing at night, deep daytime sleep.\n• H (House Soiling): Urinating or defecating indoors despite years of reliable training.\n• A (Anxiety): Sudden new fears of shadows, darkness, or separation distress.\n• A (Activity): Aimless wandering, loss of interest in toys and walks.\n\n📌 RECOMMENDATION: Consult your veterinarian early for neuroprotective protocols (antioxidants, omega-3 DHA, and brain-support diets) to safeguard ${dogName}'s quality of life.`;
        } else if (lower.includes('3m') || lower.includes('modification') || lower.includes('method') || lower.includes('management')) {
          responseTemplate = `The gold standard in Merck Veterinary Manual Behavior Therapy is the '3M Model':\n\n1. MANAGEMENT (Environmental Management): Every repetition of an unwanted behavior strengthens that neural pathway. Physically prevent ${dogName} from rehearsing mistakes and exposure to overwhelming triggers (window film, gates, quiet walking times).\n2. MODIFICATION (Behavior Modification): Stay strictly below threshold using Systematic Desensitization and Counter-Conditioning. Stop the session immediately at the first sign of stress!\n3. MEDICATION (Medical / Pharmacological Support): When the brain is locked in panic, learning is physiologically blocked. In moderate to severe cases, veterinary-prescribed anxiolytics help bring the dog to a receptive learning threshold.`;
        } else if (lower.includes('pain') || lower.includes('touch') || lower.includes('sudden') || lower.includes('hurt')) {
          responseTemplate = `⚠️ MERCK VETERINARY CLINICAL PRINCIPLE: In the majority of sudden-onset reactivity, aggression, or withdrawal cases, HIDDEN PHYSICAL PAIN (osteoarthritis, dental disease, ear infections) is the primary driver.\n\nTraining a dog in physical pain only reinforces fear-induced aggression.\n\n📌 URGENT STEP: Before changing any training routines, take ${dogName} to a veterinarian for a comprehensive orthopedic and dental evaluation to rule out pain.`;
        } else if (lower.includes('alpha') || lower.includes('leader') || lower.includes('dominant') || lower.includes('pack')) {
          responseTemplate = `The Merck Veterinary Manual and modern ethology state unequivocally: Domestic dogs DO NOT form rigid linear alpha-beta hierarchies with human families.\n\nEven Dr. L. David Mech, who originally popularized the captive wolf dominance concept, debunked it after studying wild wolves, proving packs are cooperative families, not tyrannical hierarchies.\n\n${dogName} does not view you as an 'alpha' or competitor; they look to you as a benevolent, trustworthy guide. Forcible maneuvers like alpha rolls trigger severe trauma and defensive bites. Focus on cooperation and positive reinforcement.`;
        } else if ((lower.includes('left') && lower.includes('tail')) || lower.includes('asymmetry')) {
          responseTemplate = `According to the Vallortigara & Quaranta neuro-ethology study, tail wagging biased toward the LEFT indicates activation of the RIGHT brain hemisphere.\n\nThe right hemisphere governs withdrawal, fear, and threat perception.\n\n📌 RECOMMENDATION:\n${dogName} is currently perceiving something stressful or unfamiliar in the environment. Do not force approach; increase distance and give them space to decompress.`;
        } else if (lower.includes('alone') || lower.includes('separation') || lower.includes('cry') || lower.includes('bark when alone')) {
          responseTemplate = `Separation anxiety is not stubbornness or spite; it is an acute panic attack.\n\n📌 3-STEP PROTOCOL:\n1. Desensitize departure cues: Put on your coat and jingle keys, but sit down instead of leaving.\n2. Micro-separations: Step out for just 5-10 seconds and return; increase duration only while ${dogName} remains completely calm below threshold.\n3. Offer a frozen stuffed Kong toy upon departure to trigger natural licking and chewing endorphins.\n\n⚠️ Never scold or yell at ${dogName} upon returning for chewed items; this amplifies separation panic exponentially.`;
        } else if (lower.includes('bite') || lower.includes('chew') || lower.includes('nip') || lower.includes('teeth')) {
          responseTemplate = `In puppies, biting and mouthing are a natural part of teething pain and oral exploration of the environment.\n\n📌 ACTION STEPS:\n1. The second teeth touch skin, emit a high-pitched 'OUCH!', freeze, and turn your back for 15 seconds to teach that biting ends social interaction.\n2. Never jerk your hands away rapidly (this triggers prey chase drive).\n3. Always trade for an appropriate frozen chew toy.\n4. Hyperactive biting often indicates overtiredness; guide the puppy to a quiet den or crate for a nap.`;
        } else if (lower.includes('freeze') || lower.includes('stiff') || lower.includes('statue')) {
          responseTemplate = `ATTENTION: Freezing is one of the 4F stress responses in dogs (Fight, Flight, Freeze, Fiddle).\n\nIf ${dogName} has gone rigid with a fixed stare, the very next phase can be a defensive explosive snap or bite!\n\n💡 Immediate Action: Immediately create 5-10 meters of distance from the trigger. Break eye contact, turn sideways, and give ${dogName} a clear escape route.`;
        } else if (lower.includes('growl') || lower.includes('food') || lower.includes('bowl') || lower.includes('guard')) {
          responseTemplate = `Growling is not a crime; it is your dog's polite way of saying: 'Please give me space, I feel threatened.'\n\n⚠️ NEVER punish a growl! If you punish growling, ${dogName} learns to bypass warnings and bite directly without signal.\n\n💡 Solution (Trade-Up Principle): When approaching the food bowl, never take it away; toss a piece of high-value boiled chicken into the bowl from a distance. Teach that human approach always brings something better.`;
        } else {
          responseTemplate = `For the situation you described with ${dogName}, positive reinforcement and modern ethology recommend:\n\n1. Understand the emotion beneath the behavior: 90% of unwanted behaviors stem from fear, over-arousal, or unmet mental energy.\n2. Teach an incompatible replacement behavior: Instead of scolding unwanted reactions, reward what you want them to do (e.g., sitting on a mat instead of jumping).\n3. Mental decompression: 15 minutes of daily scent-work and snuffle mat games substantially lower cortisol.\n\nFor structured guidance, explore our 'Problem Center' and 'Behavior Analysis' tools.`;
        }
      } else {
        if (lower.includes('dishaa') || lower.includes('demans') || lower.includes('yaşlı') || lower.includes('bunama')) {
          responseTemplate = `Merck Veterinary Manual geriatrik klinik kılavuzuna göre, 8 yaş üzeri köpeklerde başlayan kafa karışıklığı ve gece turlamaları Köpek Kognitif Disfonksiyon Sendromu (CDS - Köpek Demansı) belirtisi olabilir.\n\n🩺 VETERİNER DISHAA MODELİ İLE TARAMA:\n• D (Disorientation): Kapının menteşe tarafında bekleme, odanın köşesinde sıkışıp geri adım atamama.\n• I (Interactions): Aileye aşırı yapışkanlık veya tam tersi sevilmekten kaçınma.\n• S (Sleep-wake): Gece uyumayıp evi turlama, gündüzleri ise derin uyku.\n• H (House Soiling): Yıllardır dışarı yapan köpeğin evin ortasına kaçırması.\n• A (Anxiety): Sebepsiz yeni korkular, karanlık kaygısı.\n• A (Activity): Amaçsız gezinme, oyuncaklara ilginin sıfırlanması.\n\n📌 ÖNERİ: ${dogName} için erken dönemde veteriner hekim kognitif koruma protokolü (antioksidan, omega-3 DHA ve nöroprotektif diyet) hayat kalitesini korur.`;
        } else if (lower.includes('3m') || lower.includes('modifikasyon') || lower.includes('yöntem')) {
          responseTemplate = `Merck Veterinary Manual Davranış Tedavisi'nin altın standardı "3M Modeli"dir:\n\n1. MANAGEMENT (Çevresel Yönetim): Köpeğin istenmeyen davranışı her tekrarı o nöral yolu güçlendirir. Köpeğin tetiğe maruz kalmasını ve hata yapmasını fiziksel olarak engelleyin (cama film, bariyer, sakin saatte yürüyüş).\n2. MODIFICATION (Davranış Modifikasyonu): Eşik altında kalarak Sistematik Duyarsızlaştırma (Desensitization) ve Karşıt Koşullanma (Counter-Conditioning) uygulayın. Stres sinyali görüldüğü saniye seansı durdurun!\n3. MEDICATION (Medikal / İlaç Desteği): Beyin panik halindeyken öğrenme kilitlenir. Şiddetli vakalarda veteriner hekim reçeteli anksiyolitikler köpeği öğrenebilir eşiğe indirmek için şarttır.`;
        } else if (lower.includes('ağrı') || lower.includes('dokun') || lower.includes('ani')) {
          responseTemplate = `⚠️ MERCK VETERİNER KLİNİK KURALI: Ani başlayan reaktivite, agresyon veya çekingenlik vakalarının büyük çoğunluğunda GİZLİ FİZİKSEL AĞRI (osteoartrit, diş çürüğü, kulak iltihabı) yatmaktadır.\n\nFiziksel acı çeken bir köpeğe eğitim uygulamak korku agresyonunu kalıcı hale getirir.\n\n📌 ACİL ADIM: ${dogName} için herhangi bir eğitim değişikliğine başlamadan önce veteriner hekim genel ortopedik ve ağız-diş muayenesi yaptırın.`;
        } else if (lower.includes('alfa') || lower.includes('lider') || lower.includes('baskın') || lower.includes('sürü')) {
          responseTemplate = `Merck Veterinary Manual ve modern etoloji açıkça belgeler: Evcil köpekler vahşi kurtlar gibi katı doğrusal alfa-beta hiyerarşisi OLUŞTURMAZ.\n\nKurt sürüsü mitini ortaya atan Dr. David Mech bile doğadaki kurtların bir aile olduğunu kanıtlayarak bu teoriyi reddetmiştir.\n\nKöpeğiniz sizi "alfa veya rakip" olarak değil; hayatını emanet ettiği rehber ebeveyni olarak görür. Sırt üstü devirmek (alpha roll) derin travma ve defansif ısırmaya yol açar. İşbirliğine ve pozitif pekiştirmeye odaklanın.`;
        } else if (lower.includes('sol') && lower.includes('kuyruk')) {
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
