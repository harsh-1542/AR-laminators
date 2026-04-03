import { Award, CheckCircle, Package, Users, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

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
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-semibold mb-2" style={{ color: '#F5F0E8' }}>WHY CHOOSE US</div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#F5F0E8' }}>
            Your Trusted Infrastructure Partner
          </h2>
          <p className="text-xl" style={{ color: '#F5F0E8', opacity: 0.9 }}>
            Delivering excellence through quality, expertise, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 group"
                style={{ backgroundColor: 'rgba(245, 240, 232, 0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(245, 240, 232, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(245, 240, 232, 0.1)';
                }}
              >
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:scale-110" 
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <Icon className="w-10 h-10" style={{ color: '#7C1823' }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#F5F0E8' }}>
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#F5F0E8', opacity: 0.85 }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
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