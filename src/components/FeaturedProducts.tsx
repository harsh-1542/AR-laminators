import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';

const products = [
  {
    name: 'AR Pipe-Kote Coal Tar Tape',
    description: 'Reliable anti-corrosion protection for underground pipelines.'
  },
  {
    name: 'Polyseal APP Membrane',
    description: 'High-performance waterproofing membrane with excellent durability and resistance.'
  },
  {
    name: 'Bituseal SBS Membrane',
    description: 'Flexible membrane ideal for structures exposed to movement and stress.'
  },
  {
    name: 'AR Bituminous Primer (OB)',
    description: 'Improves adhesion and seals porous surfaces before membrane application.'
  },
  {
    name: 'AR Butyl Tape',
    description: 'Self-adhesive waterproof tape for quick and durable sealing.'
  }
];

export function FeaturedProducts() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-semibold mb-2" style={{ color: '#7C1823' }}>FEATURED PRODUCTS</div>
          <h2 className="text-4xl font-bold text-black">
            Industry-Leading Protection Systems
          </h2>
        </motion.div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#7C1823' }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#F5F0E8' }} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#7C1823' }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#F5F0E8' }} />
          </button>

          {/* Products Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-white p-8 rounded-lg cursor-pointer group transition-all duration-300 hover:shadow-2xl"
                style={{ border: '2px solid #C8CBCE' }}
                onClick={() => navigate('/products')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = '#7C1823';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = '#C8CBCE';
                }}
              >
                {/* Product Image Placeholder */}
                <div 
                  className="w-full h-48 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <div className="text-6xl" style={{ color: '#7C1823' }}>📦</div>
                </div>

                <h3 className="text-xl font-bold text-black mb-3">{product.name}</h3>
                <p className="text-black mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: '#7C1823' }}>
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => navigate('/products')}
            className="px-8 py-4 rounded font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
            style={{ backgroundColor: '#7C1823' }}
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
