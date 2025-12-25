import React from 'react';
import { cn } from '@/lib/utils';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'dark';
  size?: 'default' | 'sm' | 'lg';
}

export function PageSection({
  children,
  className,
  background = 'default',
  size = 'default'
}: PageSectionProps) {
  const bgClass = {
    default: 'bg-background',
    muted: 'bg-neutral-50 dark:bg-neutral-900',
    dark: 'bg-neutral-900 text-white dark:bg-neutral-950'
  }[background];

  const sizeClass = {
    default: 'section-padding',
    sm: 'section-padding-sm',
    lg: 'section-padding-lg'
  }[size];

  return (
    <section className={cn(sizeClass, bgClass, className)}>
      <div className="container">{children}</div>
    </section>
  );
}
