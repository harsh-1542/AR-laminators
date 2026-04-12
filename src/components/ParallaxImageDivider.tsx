import { useRef } from 'react';

interface ParallaxImageDividerProps {
  image?: string;
}

export function ParallaxImageDivider({ image = "/images/aboutpage.png" }: ParallaxImageDividerProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-black">
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ 
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30 w-full h-full" />
    </section>
  );
}
