"use client";

import { useState, useEffect } from 'react';
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedStatProps {
  value: string;
  label: string;
  description?: string;
  index?: number;
}

export default function AnimatedStat({ value, label, description, index = 0 }: AnimatedStatProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  // Extract number from value string
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.includes('+') ? '+' : value.includes('%') ? '%' : '';

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const duration = 2000;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentCount = Math.floor(easeOutExpo * (numericValue - startValue) + startValue);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, numericValue]);

  const displayValue = isVisible ? `${count}${suffix}` : value;

  return (
    <div
      ref={ref}
      className={`text-center scroll-reveal ${isVisible ? `revealed animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : ''}`}
    >
      <div className="text-5xl md:text-6xl font-black text-white mb-2">
        {displayValue}
      </div>
      <div className="text-lg font-semibold text-white mb-1">{label}</div>
      {description && (
        <div className="text-sm text-orange-100">{description}</div>
      )}
    </div>
  );
}
