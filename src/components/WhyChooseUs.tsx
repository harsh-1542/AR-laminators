import { Award, CheckCircle, Package, Users, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
              className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 group cursor-pointer flex items-center justify-center transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)] bg-black/20"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541888081691-0f72f62b48d2?q=80&w=1000&auto=format&fit=crop"
                alt="Infrastructure Partner"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5a1118]/80 via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
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
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>30+</div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>500+</div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>100+</div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Products</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: '#F5F0E8' }}>24/7</div>
            <div className="text-lg" style={{ color: '#F5F0E8', opacity: 0.8 }}>Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}