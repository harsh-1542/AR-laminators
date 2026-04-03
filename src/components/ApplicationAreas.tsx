import { motion } from 'motion/react';
import { Home, Building2, Construction, Factory, Route, Droplets } from 'lucide-react';
import { useState } from 'react';

const applications = [
  {
    icon: Home,
    title: 'Roofing & Terrace Waterproofing',
  },
  {
    icon: Building2,
    title: 'Basement & Foundation Protection',
  },
  {
    icon: Construction,
    title: 'Oil & Gas Pipelines',
  },
  {
    icon: Factory,
    title: 'Industrial Structures',
  },
  {
    icon: Route,
    title: 'Roads & Highways',
  },
  {
    icon: Droplets,
    title: 'Water Tanks & Reservoirs',
  }
];

export function ApplicationAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundColor: '#F5F0E8',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(200, 203, 206, 0.1) 35px, rgba(200, 203, 206, 0.1) 70px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="font-semibold mb-2" style={{ color: '#7C1823' }}>APPLICATION AREAS</div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Solutions for Every Environment
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Our solutions are engineered to perform across diverse environments — from residential structures to critical national infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {applications.map((app, index) => {
            const Icon = app.icon;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="p-8 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
                style={{
                  border: `2px solid ${isHovered ? '#7C1823' : '#C8CBCE'}`,
                  backgroundColor: isHovered ? '#7C1823' : 'white'
                }}
              >
                <Icon
                  className="w-14 h-14 mb-4 mx-auto transition-all duration-300"
                  style={{ color: isHovered ? '#F5F0E8' : '#7C1823' }}
                />
                <h3
                  className="text-xl font-bold text-center transition-colors duration-300"
                  style={{ color: isHovered ? '#F5F0E8' : 'black' }}
                >
                  {app.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}