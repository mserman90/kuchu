import React from 'react';
import { OptionItem } from '@/lib/analysis/types';

interface OptionGroupProps<T extends string> {
  label: string;
  categoryTag?: string;
  weightTag?: string;
  options: OptionItem<T>[];
  value: T;
  onChange: (val: T) => void;
  eduMode: boolean;
  columns?: 1 | 2 | 3 | 4;
}

export function OptionGroup<T extends string>({
  label,
  categoryTag,
  weightTag,
  options,
  value,
  onChange,
  eduMode,
  columns = 2
}: OptionGroupProps<T>) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4'
  }[columns];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black dark:border-white pb-2">
        <label className="font-mono text-xs font-black uppercase tracking-wider text-black dark:text-white">
          {label}
        </label>
        <div className="flex items-center gap-2">
          {categoryTag && (
            <span className="font-mono text-[10px] font-bold uppercase bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white px-2 py-0.5 border border-black dark:border-white">
              {categoryTag}
            </span>
          )}
          {weightTag && (
            <span className="font-mono text-[10px] font-bold uppercase bg-red-600 text-white px-2 py-0.5 border border-black">
              {weightTag}
            </span>
          )}
        </div>
      </div>

      <div className={`grid ${colClasses} gap-2.5`}>
        {options.map((opt) => {
          const isSelected = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`p-3 text-left border-2 transition-all cursor-pointer relative ${
                isSelected
                  ? 'border-black bg-red-600 text-white shadow-brutal-sm dark:border-white'
                  : 'border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <div className="font-mono text-xs font-black uppercase leading-snug">
                {opt.label}
              </div>

              {eduMode && opt.desc && (
                <p className={`text-[11px] font-medium mt-1.5 leading-snug ${
                  isSelected ? 'text-white/90' : 'text-zinc-600 dark:text-zinc-400'
                }`}>
                  {opt.desc}
                </p>
              )}

              {eduMode && opt.scientificInsight && (
                <div className={`mt-2 pt-1.5 border-t text-[10px] font-mono font-bold uppercase ${
                  isSelected ? 'border-white/30 text-white' : 'border-zinc-200 dark:border-zinc-800 text-red-600 dark:text-red-400'
                }`}>
                  🔬 {opt.scientificInsight}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
