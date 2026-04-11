import { motion } from 'motion/react';
import { Home, Building2, Construction, Factory, Route, Droplets } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

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

export function ApplicationAreasNew() {

  return (
    <section
      className="py-20 relative overflow-hidden"
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

        <div className="mt-12 w-full max-w-5xl mx-auto">
          <ScrollStack 
            itemScale={0.05}
            itemStackDistance={35}
            blurAmount={4}
            className="h-[450px]"
          >
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <ScrollStackItem key={index}>
                  <div
                    className="relative h-[450px] w-full overflow-hidden cursor-pointer group border-2 border-white/50 rounded-3xl shadow-2xl"
                  >
                    {/* Background Image */}
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Default state white box positioned at bottom-left */}
                    <div className="absolute bottom-0 left-0 w-10/12 bg-[#f8f6f3]/95 p-6 border-l-[8px] transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0 group-hover:invisible" style={{ borderLeftColor: '#862e38ff' }}>
                      <h3 className="text-2xl font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>{app.title}</h3>
                    </div>

                    {/* Hover state overly */}
                    <div className="absolute inset-0 bg-[#2b2b2b]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center mb-6 transition-transform duration-500 hover:rotate-12 bg-white/10 backdrop-blur-sm">
                         <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{app.title}</h3>
                      <span className="px-6 py-2 bg-[#862e38] text-white rounded-full font-semibold uppercase tracking-wider text-sm mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        View Details
                      </span>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}