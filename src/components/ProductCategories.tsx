import { Droplets, Shield, Paintbrush, StickyNote, Route, Construction, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import waterproofing from '../assets/images/Waterproofing-Membranes.png';
import Primers from '../assets/images/Primers.jpg';
import Paints from '../assets/images/Paints.png';
import Sealants from '../assets/images/sealant.png';
import Road from '../assets/images/road.png';
import Pipeline from '../assets/images/pipeline.png';


const products = [
  {
    icon: Paintbrush,
    name: 'Primers & Bonding Agents',
    description: 'High-performance primers designed to enhance adhesion and prepare surfaces for waterproofing systems.',
    image: Primers
  },
  {
    icon: Droplets,
    name: 'Waterproofing Membranes',
    description: 'APP, SBS, and self-adhesive membranes engineered for roofs, basements, and structures.',
    image: waterproofing
  },
  {
    icon: Shield,
    name: 'Protective Coatings & Paints',
    description: 'Advanced coatings for corrosion protection in industrial and marine environments.',
    image: Paints
  },
  {
    icon: StickyNote,
    name: 'Sealants & Tapes',
    description: 'Reliable sealing solutions for joints, cracks, and leak prevention.',
    image: Sealants
  },
  {
    icon: Route,
    name: 'Road & Pavement Solutions',
    description: 'Durable bitumen products for road construction, repair, and maintenance.',
    image: Road
  },
  {
    icon: Construction,
    name: 'Pipeline & Tank Protection',
    description: 'Specialized systems for underground pipelines and storage infrastructure.',
    image: Pipeline
  }
];

export function ProductCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-4xl font-semibold uppercase mb-4 tracking-wide" style={{ color: '#862e38ff', fontFamily: 'Montserrat, sans-serif' }}>
            Our Product Line
          </h2>
          <div className="w-16 h-[3px]" style={{ backgroundColor: '#862e38ff' }}></div>
          {/* Subtle subtitle preserving old context */}
          <div className="mt-4 text-xl text-gray-600 max-w-2xl text-center font-medium">
             Complete Protection Solutions
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate('/products')}
                className="relative h-100 w-full overflow-hidden cursor-pointer group rounded-none border border-gray-200"
              >
                {/* Background Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default state white box positioned at bottom-left */}
                <div className="absolute bottom-0 left-0 w-10/12 bg-[#f8f6f3]/95 p-4 border-l-[6px] transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0 group-hover:invisible" style={{ borderLeftColor: '#862e38ff' }}>
                  <h3 className="text-lg font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.name}</h3>
                </div>

                {/* Hover state overly */}
                <div className="absolute inset-0 bg-[#2b2b2b]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center mb-4 transition-transform duration-500 hover:rotate-12">
                     <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.name}</h3>
                  <p className="text-sm text-gray-200 line-clamp-4 leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}