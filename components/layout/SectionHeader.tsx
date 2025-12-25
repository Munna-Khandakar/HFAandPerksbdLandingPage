import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="h2 mb-4 text-neutral-900 dark:text-neutral-50">{title}</h2>
      {subtitle && (
        <p className="body-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
