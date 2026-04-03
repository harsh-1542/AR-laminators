import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Factory, TestTube, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';



export function AboutSnapshot() {
  const navigate = useNavigate();

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg group"
          >
            <ImageWithFallback
              src='/images/factory.png'
              alt="AR Laminators Facility"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Built on Experience. Driven by Protection.
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-black">
              Established in 1991, A.R. Laminators has grown into a trusted manufacturer and solution provider for waterproofing and anti-corrosion systems. With a strong foundation in innovation and quality, we deliver products that protect critical infrastructure across industries including oil & gas, power, construction, and water management.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-black">
              Operating from a modern facility in Vadodara, our team combines technical expertise with hands-on execution to deliver long-lasting performance in every project.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C1823' }}>
                  <Factory className="w-6 h-6" style={{ color: '#F5F0E8' }} />
                </div>
                <div>
                  <div className="font-bold text-black">11,000 sq. ft. manufacturing facility</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C1823' }}>
                  <TestTube className="w-6 h-6" style={{ color: '#F5F0E8' }} />
                </div>
                <div>
                  <div className="font-bold text-black">In-house R&D and quality testing</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C1823' }}>
                  <Users className="w-6 h-6" style={{ color: '#F5F0E8' }} />
                </div>
                <div>
                  <div className="font-bold text-black">Skilled on-site application teams</div>
                </div>
              </motion.div>
            </div>

            <button 
              onClick={() => navigate('/about')}
              className="font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 text-lg"
              style={{ color: '#7C1823' }}
            >
              Read Full Story
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}