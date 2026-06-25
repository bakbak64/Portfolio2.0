import { useEffect, useState } from "react";

/**
 * Hook to trigger animations when a section comes into view
 * Useful for scroll-triggered reveals and staggered animations
 */
export function useSectionAnimator(threshold = 0.2) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Optional: unobserve after animation triggers
          // observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    return () => observer.disconnect();
  }, [threshold]);

  return isInView;
}
