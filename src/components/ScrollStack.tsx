import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({
  children,
  itemClassName = '',
}: {
  children: React.ReactNode;
  itemClassName?: string;
}) => (
  <div className={`scroll-stack-card absolute top-0 left-0 w-full h-full ${itemClassName}`.trim()}>
    {children}
  </div>
);

type ScrollStackProps = {
  children: React.ReactNode;
  className?: string;
  itemScale?: number;
  itemStackDistance?: number;
  blurAmount?: number;
};

const ScrollStack = ({
  children,
  className = '',
  itemScale = 0.05,
  itemStackDistance = 35,
  blurAmount = 4,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
    if (cards.length === 0) return;

    // Reset all cards explicitly for resize/re-runs
    gsap.set(cards, {
      clearProps: 'all'
    });

    // Set initial configurations
    gsap.set(cards, {
      transformOrigin: 'top center',
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      zIndex: (i) => i // Stack new cards on top of old cards
    });

    // Hide all cards except the first logically
    if (cards.length > 1) {
      gsap.set(cards.slice(1), { x: '100%', opacity: 0 });
    }

    const triggerElement = containerRef.current.closest('section') || containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'center center',
        end: () => `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      // Card enters from the right
      tl.to(card, {
        x: '0%',
        opacity: 1,
        ease: 'power2.out',
      }, `stack-${index}`);

      // Previous cards scale down and push backward to the left
      for (let i = 0; i < index; i++) {
        const prevCard = cards[i];
        
        tl.to(prevCard, {
          scale: 1 - (index - i) * itemScale,
          x: -(index - i) * itemStackDistance,
          y: 0,
          filter: `blur(${(index - i) * blurAmount}px)`,
          ease: 'power2.out',
        }, `stack-${index}`);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div className={`w-full relative ${className}`} ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollStack;