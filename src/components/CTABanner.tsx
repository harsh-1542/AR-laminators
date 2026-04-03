import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';

export function CTABanner() {
  const navigate = useNavigate();

  return (
    <section className="py-24" style={{ backgroundColor: '#7C1823' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
            Let's Protect What Matters Most
          </h2>
          <p className="text-2xl mb-12" style={{ color: '#F5F0E8', opacity: 0.95 }}>
            Get customized waterproofing and anti-corrosion solutions tailored to your project.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 rounded font-semibold text-lg inline-flex items-center gap-3 transition-all duration-300 shadow-2xl"
              style={{ backgroundColor: '#F5F0E8', color: '#7C1823' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            >
              Get a Quote
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-10 py-5 rounded font-semibold text-lg inline-flex items-center gap-3 transition-all duration-300"
              style={{ 
                border: '2px solid #F5F0E8', 
                backgroundColor: 'transparent',
                color: '#F5F0E8'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F5F0E8';
                e.currentTarget.style.color = '#7C1823';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#F5F0E8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone className="w-6 h-6" />
              Talk to Expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}