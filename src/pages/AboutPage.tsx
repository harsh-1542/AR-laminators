import { motion } from 'motion/react';
import { Target, Factory, Users, Award } from 'lucide-react';
import about from "../assets/images/about.png";
import mission from "../assets/images/mission.jpg";
import { ClientLogos } from '../components/ClientLogos';

const clientLogos = [
  'Siemens',
  'Adani Power',
  'Tata Projects',
  'NTPC',
  'Megha Engineering'
];

const whyChoosePoints = [
  'In-house R&D',
  'IS standard compliant products',
  'Skilled on-site execution team',
  'Proven experience in large-scale projects'
];

export function AboutPage() {
  return (
    <div className="pt-29" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Hero Section */}
      <section 
        className="py-32 relative bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${about})`,
          fontFamily: 'Montserrat, sans-serif' 
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
              Engineering Protection Since 1991
            </h1>
            <p className="text-xl md:text-2xl" style={{ color: '#F5F0E8' }}>
              Delivering high-performance waterproofing and anti-corrosion solutions for critical infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="font-semibold text-xl mb-2" style={{ color: '#7C1823' }}>COMPANY PROFILE</div>
            <h2 className="text-6xl font-bold text-black mb-8">Who We Are</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-black leading-relaxed mb-6">
              A.R. Laminators, established in 1991 by Mr. Amit Desai, is a Vadodara-based manufacturer specializing in waterproofing membranes, anti-corrosive pipeline tapes, and industrial coatings.
            </p>
            <p className="text-xl text-black leading-relaxed">
              The company has built its reputation by delivering reliable, high-performance products used in infrastructure projects across oil & gas, water systems, industrial construction, and road development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Infrastructure */}
      {/* 
      <section className="py-20" style={{ backgroundColor: '#ffffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
              style={{ borderTop: '4px solid #7C1823' }}
            >
              <Target className="w-12 h-12 mb-4" style={{ color: '#7C1823' }} />
              <h3 className="text-2xl font-bold text-black mb-4">Mission</h3>
              <p className="text-black leading-relaxed">
                To provide long-lasting protection for national infrastructure through high-bonding, durable, and environmentally responsible materials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
              style={{ borderTop: '4px solid #7C1823' }}
            >
              <Factory className="w-12 h-12 mb-4" style={{ color: '#7C1823' }} />
              <h3 className="text-2xl font-bold text-black mb-4">Infrastructure</h3>
              <p className="text-black leading-relaxed">
                Operating from a 11,000 sq. ft. facility in GIDC Makarpura, Vadodara, equipped with manufacturing, testing, and storage capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      */}
<section className="py-20">
  <motion.div className="max-w-7xl mx-auto px-4 relative">

    {/* Image */}
    <div className="flex justify-end">
      <img
        src={mission}
        alt="Mission"
        className="w-full md:w-[70%] h-[400px] md:h-[500px] object-cover"
      />
    </div>

    {/* Floating Content Box */}
    <div className="absolute top-1/2 left-1/2 md:left-4 lg:left-8 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-white p-8 md:p-10 w-[90%] md:w-[420px] lg:w-[460px] shadow-lg">
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#7C1823] mb-4">
        Our Mission
      </h2>

      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-2 md:mb-6">
        To provide long-lasting protection for national infrastructure through high-bonding, durable, and environmentally responsible materials.
      </p>

    </div>

  </motion.div>
</section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          
          {/* <div className="mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-[#7C1823]"></div>
          </div> */}

          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
           
            <div className="mt-1">
              <Target className="w-10 h-10 text-[#7C1823]" />
            </div>

          
            <div className="border-l-4 border-[#7C1823] pl-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide long-lasting protection for national infrastructure through
                high-bonding, durable, and environmentally responsible materials.
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}


      {/* Clientele */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
        

          <ClientLogos/>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#F5F0E8' }}
              >
                <div className="text-xl font-bold text-black">{client}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="w-12 h-12 mx-auto mb-4" style={{ color: '#7C1823' }} />
            <div className="font-normal text-xl mb-2" style={{ color: '#7C1823' }}>WHY CHOOSE US</div>
            <h2 className="text-6xl font-normal text-black">Your Trusted Infrastructure Partner</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#7C1823' }}
                >
                  <Award className="w-6 h-6" style={{ color: '#F5F0E8' }} />
                </div>
                <p className="text-black text-xl font-normal">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
