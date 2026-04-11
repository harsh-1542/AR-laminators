import { Award, CheckCircle, Package, Users, Lightbulb } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString() + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [value, isInView, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
import { ImageWithFallback } from './figma/ImageWithFallback';
import TiltedCard from './TiltedCard';

const features = [
  {
    icon: Award,
    title: '30+ Years of Industry Experience',
    description: 'Proven expertise in infrastructure protection.'
  },
  {
    icon: CheckCircle,
    title: 'Certified & Compliant Products',
    description: 'Manufactured as per IS and international standards.'
  },
  {
    icon: Package,
    title: 'End-to-End Solutions',
    description: 'From product manufacturing to application services.'
  },
  {
    icon: Users,
    title: 'Trusted by Industry Leaders',
    description: 'Serving top infrastructure and industrial companies.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven Approach',
    description: 'Continuous improvement through R&D.'
  }
];

export function WhyChooseUs() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #7C1823 0%, #5a1118 100%)'
      }}
    >
      {/* Decorative Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="font-semibold mb-2 tracking-wider" style={{ color: '#F5F0E8' }}>WHY CHOOSE US</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F5F0E8' }}>
                Your Trusted Infrastructure Partner
              </h2>
              <p className="text-xl" style={{ color: '#F5F0E8', opacity: 0.9 }}>
                Delivering excellence through quality, expertise, and innovation
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-5 group cursor-pointer"
                  >
                    <div 
                      className="flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,240,232,0.3)] shadow-lg" 
                      style={{ backgroundColor: '#F5F0E8' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#7C1823' }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-white" style={{ color: '#F5F0E8' }}>
                        {feature.title}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: '#F5F0E8', opacity: 0.85 }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-5/12 flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] overflow-visible group cursor-pointer flex items-center justify-center transition-all duration-700"
            >
              <TiltedCard 
                imageSrc="/images/skyscraper.png"
                altText="Infrastructure Partner"
                captionText="Quality You Can Trust"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.02}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5a1118]/80 via-transparent to-transparent opacity-80 mix-blend-multiply w-full h-full rounded-[40px]"></div>
                }
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16"
          style={{ borderTop: '1px solid rgba(245, 240, 232, 0.2)' }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>
              <AnimatedCounter value={30} suffix="+" />
            </div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>
              <AnimatedCounter value={500} suffix="+" />
            </div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>
              <AnimatedCounter value={100} suffix="+" />
            </div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Products</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>
              <AnimatedCounter value={24} suffix="/7" />
            </div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}