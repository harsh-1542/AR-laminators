import { motion } from 'motion/react';
import { Construction, Droplets, Shield, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const services = [
  {
    icon: Construction,
    title: 'Pipeline Protection Services',
    description: 'Professional wrapping and coating solutions for underground pipelines ensuring long-term corrosion resistance.'
  },
  {
    icon: Droplets,
    title: 'Waterproofing Services',
    description: 'Advanced membrane application for roofs, basements, tunnels, and bridges.'
  },
  {
    icon: Shield,
    title: 'Corrosion Engineering',
    description: 'Specialized systems including 3LPE sleeves, heat-shrink sleeves, and industrial coatings.'
  },
  {
    icon: MapPin,
    title: 'On-Site Application Services',
    description: 'Pan-India project execution with experienced teams and technical supervision.'
  }
];

export function Services() {
  const navigate = useNavigate();

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
          <div className="font-semibold mb-2" style={{ color: '#7C1823' }}>OUR SERVICES</div>
          <h2 className="text-4xl font-bold text-black">
            Complete Application & Technical Support
          </h2>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Icon Side */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div 
                    className="rounded-lg p-12 flex items-center justify-center group transition-all duration-300 hover:shadow-xl"
                    style={{ backgroundColor: '#F5F0E8' }}
                  >
                    <Icon 
                      className="w-32 h-32 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: '#7C1823' }} 
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#7C1823' }}
                    >
                      <span className="text-2xl font-bold" style={{ color: '#F5F0E8' }}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-black">{service.title}</h3>
                  </div>
                  <p className="text-lg text-black leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300 text-lg"
                    style={{ color: '#7C1823' }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => navigate('/contact')}
            className="px-8 py-4 rounded font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
            style={{ backgroundColor: '#7C1823' }}
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}