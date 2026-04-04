import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxImageDivider() {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const factoryImage = "/images/aboutpage.png"

  return (
    <section ref={ref} className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-black">
      <motion.div 
        className="absolute w-full" 
        style={{ 
          y,
          height: '150%',
          top: '-15%',
          backgroundImage: `url('${factoryImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30 w-full h-full" />
    </section>
  );
}
