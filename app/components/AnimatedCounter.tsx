"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1400,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (reducedMotion) return;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }


        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;

          const progress = duration <= 0 ? 1 : Math.min(elapsed / duration, 1);

          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(value * easedProgress));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, duration, reducedMotion]);

  return (
    <span ref={elementRef}>
      {reducedMotion ? value : count}
      {suffix}
    </span>
  );
}
