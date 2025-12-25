import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  variant?: 'default' | 'centered' | 'split';
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  variant = 'centered',
  className
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative h-64 md:h-80 flex items-center justify-center overflow-hidden",
        backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary-600 to-primary-800',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay for readability when using background images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40" />
      )}

      {/* Content */}
      <div className={cn(
        "relative z-10 container px-4",
        variant === 'centered' && 'text-center',
        variant === 'split' && 'text-left'
      )}>
        <h1 className="display-lg text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="body-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
