import { motion } from 'motion/react';
import { Home, Building2, Construction, Factory, Route, Droplets } from 'lucide-react';

const applications = [
  {
    icon: Home,
    title: 'Roofing & Terrace Waterproofing',
    image: '/images/waterproofing.png'
  },
  {
    icon: Building2,
    title: 'Basement & Foundation Protection',
    image: '/images/Waterproofing-Membranes.png'
  },
  {
    icon: Construction,
    title: 'Oil & Gas Pipelines',
    image: '/images/pipeline.png'
  },
  {
    icon: Factory,
    title: 'Industrial Structures',
    image: '/images/factory.png'
  },
  {
    icon: Route,
    title: 'Roads & Highways',
    image: '/images/road.png'
  },
  {
    icon: Droplets,
    title: 'Water Tanks & Reservoirs',
    image: '/images/tanks.png'
  }
];

export function ApplicationAreas() {

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundColor: '#F5F0E8',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(200, 203, 206, 0.1) 35px, rgba(200, 203, 206, 0.1) 70px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-semibold mb-2 tracking-wider" style={{ color: '#7C1823' }}
          >
            APPLICATION AREAS
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Solutions for Every Environment
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Our solutions are engineered to perform across diverse environments — from residential structures to critical national infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-100 w-full overflow-hidden cursor-pointer group rounded-none border border-gray-200"
              >
                {/* Background Image */}
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default state white box positioned at bottom-left */}
                <div className="absolute bottom-0 left-0 w-10/12 bg-[#f8f6f3]/95 p-4 border-l-[6px] transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0 group-hover:invisible" style={{ borderLeftColor: '#862e38ff' }}>
                  <h3 className="text-lg font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>{app.title}</h3>
                </div>

                {/* Hover state overly */}
                <div className="absolute inset-0 bg-[#2b2b2b]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center mb-4 transition-transform duration-500 hover:rotate-12">
                     <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{app.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}