import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Droplets, Paintbrush, StickyNote, Route, Construction, Shield } from 'lucide-react';

const categories = [
  {
    id: 'primers-bonding',
    icon: Shield,
    name: 'Primers & Bonding Agents',
    image: '/images/primer.png',
    description: 'Used to prepare surfaces and improve adhesion before waterproofing applications.'
  },
  {
    id: 'waterproofing-membranes',
    icon: Droplets,
    name: 'Waterproofing Membranes',
    image: '/images/Waterproofing-Membranes.png',
    description: 'APP, SBS, and self-adhesive membranes for roofs, basements, and structures.'
  },
  {
    id: 'protective-coatings',
    icon: Paintbrush,
    name: 'Protective Coatings & Paints',
    image: '/images/tanks.png',
    description: 'Anti-corrosive coatings for steel, tanks, and industrial surfaces.'
  },
  {
    id: 'sealants-tapes',
    icon: StickyNote,
    name: 'Sealants & Tapes',
    image: '/images/sealtap.png',
    description: 'Solutions for joint sealing, crack filling, and waterproofing.'
  },
  {
    id: 'road-pavement',
    icon: Route,
    name: 'Road & Pavement Products',
    image: '/images/bitumen.png',
    description: 'Bitumen-based products for road construction and repair.'
  },
  {
    id: 'pipeline-tank',
    icon: Construction,
    name: 'Pipeline & Tank Protection',
    image: '/images/tank-protection.png',
    description: 'Specialized systems for underground pipelines and tanks.'
  }
];

export function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-32" style={{ backgroundColor: '#F5F0E8' }}>

      {/* 🔥 HERO SECTION */}
      <section
        className="relative py-24 text-center text-white"
        style={{
          backgroundImage: `url(/images/productspage.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#7C1823]/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Product Solutions
            </h1>
            <p className="text-xl md:text-2xl">
              Comprehensive range of waterproofing, coating, and protection systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔥 CATEGORY GRID */}
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
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-200"
                >

                  {/* IMAGE SECTION */}
                  <div className="relative h-[250px] overflow-hidden">

                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
                      <Icon className="w-6 h-6 text-[#7C1823]" />
                    </div>

                  </div>

                  {/* TEXT SECTION */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {category.name}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-2 font-semibold text-[#7C1823] group-hover:gap-3 transition-all duration-300">
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