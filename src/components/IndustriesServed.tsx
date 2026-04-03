import { Train, Building, Zap, Landmark, Construction, Home } from 'lucide-react';
import { motion } from 'motion/react';

const industries = [
  { icon: Landmark, name: 'Highways' },
  { icon: Train, name: 'Railways' },
  { icon: Train, name: 'Metro' },
  { icon: Construction, name: 'Infrastructure' },
  { icon: Zap, name: 'Power Plants' },
  { icon: Building, name: 'Government Buildings' }
];

export function IndustriesServed() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-semibold mb-2" style={{ color: '#7C1823' }}>INDUSTRIES WE SERVE</div>
          <h2 className="text-4xl font-bold text-black">
            Trusted Across Multiple Sectors
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg transition-all duration-300 cursor-pointer group hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: '#F5F0E8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F5F0E8';
                }}
              >
                <Icon className="w-12 h-12 mx-auto mb-3 transition-all duration-300 group-hover:scale-110" style={{ color: '#7C1823' }} />
                <div className="font-semibold text-black">{industry.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}