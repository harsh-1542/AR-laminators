import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Droplets, Paintbrush, StickyNote, Route, Construction, Shield } from 'lucide-react';
import waterproofing from '../assets/images/Waterproofing-Membranes.png';
import sealtapes from '../assets/images/sealtap.png';
import primer from '../assets/images/primer.png';
import tanks from '../assets/images/tanks.png';
import bitumen from '../assets/images/bitumen.png';
import pipeline from '../assets/images/tank-protection.png';
import productspage from '../assets/images/productspage.png';
const categories = [
  {
    id: 'primers-bonding',
    icon: Shield,
    name: 'Primers & Bonding Agents',
    image: primer,
    description: 'Used to prepare surfaces and improve adhesion before waterproofing applications.'
  },
  {
    id: 'waterproofing-membranes',
    icon: Droplets,
    name: 'Waterproofing Membranes',
    image: waterproofing,
    description: 'APP, SBS, and self-adhesive membranes for roofs, basements, and structures.'
  },
  {
    id: 'protective-coatings',
    icon: Paintbrush,
    name: 'Protective Coatings & Paints',
    image: tanks,
    description: 'Anti-corrosive coatings for steel, tanks, and industrial surfaces.'
  },
  {
    id: 'sealants-tapes',
    icon: StickyNote,
    name: 'Sealants & Tapes',
    image: sealtapes,
    description: 'Solutions for joint sealing, crack filling, and waterproofing.'
  },
  {
    id: 'road-pavement',
    icon: Route,
    name: 'Road & Pavement Products',
    image: bitumen,
    description: 'Bitumen-based products for road construction and repair.'
  },
  {
    id: 'pipeline-tank',
    icon: Construction,
    name: 'Pipeline & Tank Protection',
    image: pipeline,
    description: 'Specialized systems for underground pipelines and tanks.'
  }
];

export function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-32" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Hero Section */}
      <section className="py-24" style={{
        backgroundImage: `url(${productspage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
              Our Product Solutions
            </h1>
            <p className="text-xl md:text-2xl" style={{ color: '#F5F0E8' }}>
              Comprehensive range of waterproofing, coating, and protection systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => navigate(`/products/${category.id}`)}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                  style={{ border: '2px solid #C8CBCE' }}
                >
                  <div
                    className="p-8 flex items-center justify-center group-hover:scale-110 h-[250px] transition-transform duration-300"
                    style={{ backgroundImage: `url(${category.image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                  >
                    {/* <Icon className="w-20 h-20" style={{ color: '#7C1823' }} /> */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3">{category.name}</h3>
                    <p className="text-black leading-relaxed mb-4">{category.description}</p>
                    <div
                      className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
                      style={{ color: '#7C1823' }}
                    >
                      View Products
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}