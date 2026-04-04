import { useRef } from 'react';
import { Droplets, Shield, Paintbrush, StickyNote, Route, Construction } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    icon: Paintbrush,
    name: 'Primers & Bonding Agents',
    description: 'High-performance primers designed to enhance adhesion and prepare surfaces for waterproofing systems.',
    image: '/images/primer.png',
  },
  {
    icon: Droplets,
    name: 'Waterproofing Membranes',
    description: 'APP, SBS, and self-adhesive membranes engineered for roofs, basements, and structures.',
    image: '/images/Waterproofing-Membranes.png',
  },
  {
    icon: Shield,
    name: 'Protective Coatings & Paints',
    description: 'Advanced coatings for corrosion protection in industrial and marine environments.',
    image: '/images/Paints.png',
  },
  {
    icon: StickyNote,
    name: 'Sealants & Tapes',
    description: 'Reliable sealing solutions for joints, cracks, and leak prevention.',
    image: '/images/sealant.png',
  },
  {
    icon: Route,
    name: 'Road & Pavement Solutions',
    description: 'Durable bitumen products for road construction, repair, and maintenance.',
    image: '/images/road.png',
  },
  {
    icon: Construction,
    name: 'Pipeline & Tank Protection',
    description: 'Specialized systems for underground pipelines and storage infrastructure.',
    image: '/images/pipeline.png',
  }
];


export function ProductsAnimate() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const getScrollAmount = () => {
      let scrollWidth = containerRef.current?.scrollWidth || 0;
      let maxScroll = scrollWidth - window.innerWidth;
      return -(maxScroll > 0 ? maxScroll + 64 : 0);
    };

    const tween = gsap.to(containerRef.current, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      end: () => `+=${containerRef.current?.scrollWidth || 0}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
    
    return () => {
      tween.kill();
    };
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-12 bg-white overflow-hidden flex flex-col justify-center h-screen relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex-shrink-0">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-left mb-5 flex flex-col items-start"
        >
          <h2 className="text-2xl md:text-4xl font-semibold uppercase mb-4 tracking-wide" style={{ color: '#862e38ff', fontFamily: 'Montserrat, sans-serif' }}>
            Our Product Line
          </h2>
          <div className="w-16 h-[3px]" style={{ backgroundColor: '#862e38ff' }}></div>
          <div className="mt-4 text-xl text-gray-600 max-w-2xl font-medium">
             Complete Protection Solutions
          </div>
        </motion.div>
      </div>

      <div className="w-full relative">
        <div 
          ref={containerRef} 
          className="flex flex-nowrap gap-6 md:gap-8 px-4 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2))] w-max will-change-transform items-start mt-6"
        >
          {products.map((product, index) => {
            return (
                <div 
                  key={index}
                  className="product-card flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[400px] bg-white border border-gray-200 rounded-2xl  md:p-8 flex flex-col group cursor-pointer shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
                  onClick={() => navigate('/products')}
                >
                  {/* Light Image Container */}
                  <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 mb-8 overflow-hidden relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-[90%] max-h-[90%] object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110" 
                      />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-[#862e38ff] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}