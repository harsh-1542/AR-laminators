import { useRef, Suspense } from 'react';
import { Droplets, Shield, Paintbrush, StickyNote, Route, Construction } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, OrbitControls } from '@react-three/drei';

function ConveyorModel() {
  const { scene } = useGLTF('/models/conveyor.glb');
  return <primitive object={scene} position={[6,-2, 0]} scale={4} />;
}
useGLTF.preload('/models/conveyor.glb');

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

export function ProductsModel() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Extend products array for infinite looping
  const extendedProducts = [...products, ...products, ...products, ...products];

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const container = containerRef.current;
    const cards = gsap.utils.toArray('.product-card') as HTMLElement[];
    if (cards.length === 0) return;

    // Calculate exact scroll distance by measuring offset of the first item of the second set
    const scrollDistance = (itemRef.current && firstItemRef.current) 
      ? itemRef.current.offsetLeft - firstItemRef.current.offsetLeft
      : container.scrollWidth / 4;

    // Endless slider animation (linear ease for constant speed)
    tweenRef.current = gsap.fromTo(container, 
      { x: 0 },
      {
        x: -scrollDistance,
        ease: "none",
        duration: 25, // Constant speed
        repeat: -1,
      }
    );

    // Add slight vertical floating/bounce effect for realism
    gsap.to(cards, {
      y: -10,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 0.15,
        from: "random"
      }
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-12 bg-gray-900 overflow-hidden flex flex-col justify-center min-h-screen relative z-10 isolate"
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex-shrink-0 relative z-10 pointer-events-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-left mb-6 md:mb-10 flex flex-col items-start"
        >
          <h2 className="text-2xl md:text-4xl font-semibold uppercase mb-4 tracking-wide" style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif' }}>
            Our Product Line
          </h2>
          <div className="w-16 h-[3px]" style={{ backgroundColor: '#862e38ff' }}></div>
          <div className="mt-4 text-xl text-gray-300 max-w-2xl font-medium drop-shadow-md">
             Complete Protection Solutions
          </div>
        </motion.div>
      </div>

      {/* Main split layout */}
      <div className="w-full flex-1 flex flex-col lg:flex-row items-center relative z-10 mt-0 max-w-[100vw]">
        
        {/* Left Side: 3D Canvas */}
        <div className="w-full lg:w-[45%] h-[400px] lg:h-[600px] relative pointer-events-auto">
          <Canvas camera={{ position: [1, 2, 5], fov: 45 }} shadows>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <ConveyorModel />
            </Suspense>
            <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={30} blur={2.5} far={4.5} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Right Side: Sliding Images */}
        <div className="w-full lg:w-[55%] overflow-hidden py-10 relative mt-4 lg:mt-0">
          {/* Gradients for smooth trailing edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={containerRef} 
            className="flex flex-nowrap gap-16 md:gap-24 w-max will-change-transform items-center relative px-[10vw]"
            onMouseEnter={() => tweenRef.current?.pause()}
            onMouseLeave={() => tweenRef.current?.play()}
          >
            {extendedProducts.map((product, index) => {
              return (
                  <div 
                    key={index}
                    ref={index === 0 ? firstItemRef : index === products.length ? itemRef : null}
                    className="product-card flex-shrink-0 w-[200px] sm:w-[250px] md:w-[320px] flex flex-col items-center justify-center group cursor-pointer relative"
                    onClick={() => navigate('/products')}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-4" 
                    />
                    
                    {/* Hover title */}
                    <div className="absolute -bottom-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-wide drop-shadow-md">
                        {product.name}
                      </h3>
                      <div className="w-8 h-1 bg-[#862e38ff] mx-auto mt-2 rounded-full"></div>
                    </div>
                  </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}