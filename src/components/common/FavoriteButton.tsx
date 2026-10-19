import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { dataEntities } from '@/lib/data/entities';
import { toast } from 'sonner';

interface FavoriteButtonProps {
  targetType: 'article' | 'problem' | 'analysis' | 'plan';
  targetId: string;
  title: string;
  category?: string;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  targetType,
  targetId,
  title,
  category,
  className = ''
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    let mounted = true;
    dataEntities.favorites.list().then((list) => {
      if (mounted) {
        setIsFav(list.some((f) => f.targetType === targetType && f.targetId === targetId));
      }
    });
    return () => {
      mounted = false;
    };
  }, [targetType, targetId]);

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const result = await dataEntities.favorites.toggle({
      targetType,
      targetId,
      title,
      category
    });
    setIsFav(result.added);
    if (result.added) {
      toast.success(`"${title}" favorilere eklendi.`);
    } else {
      toast.info(`"${title}" favorilerden çıkarıldı.`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`p-1.5 border-2 border-black dark:border-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer ${
        isFav
          ? 'bg-yellow-400 text-black'
          : 'bg-white dark:bg-zinc-800 text-zinc-400 hover:text-black dark:hover:text-white'
      } ${className}`}
      title={isFav ? 'Favorilerden Çıkar' : 'Favoriye Ekle'}
      aria-label={isFav ? 'Favorilerden Çıkar' : 'Favoriye Ekle'}
    >
      <Star className={`w-3.5 h-3.5 stroke-[2.5] ${isFav ? 'fill-black' : ''}`} />
    </button>
  );
};
