import { motion } from 'motion/react';
import { Target, Factory, Users, Award, Lightbulb } from 'lucide-react';

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
          backgroundImage: 'url(/images/aboutpage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
      
      {/* Left Content Column */}
      <div className="w-full lg:w-5/12 lg:pr-8">
        
        {/* Diamond Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-[#7C1823] rotate-45"></div>
              <div className="w-2.5 h-2.5 bg-[#7C1823] rotate-45"></div>
              <div className="w-2.5 h-2.5 bg-[#7C1823] rotate-45"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Mission</h2>
          <div className="flex items-center gap-3">
            <div className="h-[2px] bg-gray-200 w-16"></div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-[#7C1823] rotate-45"></div>
              <div className="w-2.5 h-2.5 bg-[#7C1823] rotate-45"></div>
              <div className="w-2.5 h-2.5 bg-[#7C1823] rotate-45"></div>
            </div>
            <div className="h-[2px] bg-gray-200 w-16"></div>
          </div>
        </div>

        {/* List Items */}
        <div className="space-y-10">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start gap-6 group"
          >
            <div className="w-16 h-16 flex-shrink-0 border-2 border-gray-200 rounded-2xl rotate-45 flex items-center justify-center transition-all duration-300 group-hover:border-[#7C1823] mt-2 group-hover:bg-[#7C1823]/5">
              <div className="-rotate-45">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#7C1823]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                To be the global leader in providing innovative and sustainable infrastructure protection solutions.
              </p>
            </div>
          </motion.div>

          {/* Missions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-6 group"
          >
            <div className="w-16 h-16 flex-shrink-0 border-2 border-gray-200 rounded-2xl rotate-45 flex items-center justify-center transition-all duration-300 group-hover:border-[#7C1823] mt-2 group-hover:bg-[#7C1823]/5">
              <div className="-rotate-45">
                <Lightbulb className="w-7 h-7 text-[#7C1823]" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Missions</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                To provide long-lasting protection for national infrastructure through high-bonding, durable materials.
              </p>
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-6 group"
          >
            <div className="w-16 h-16 flex-shrink-0 border-2 border-gray-200 rounded-2xl rotate-45 flex items-center justify-center transition-all duration-300 group-hover:border-[#7C1823] mt-2 group-hover:bg-[#7C1823]/5">
              <div className="-rotate-45">
                <Target className="w-7 h-7 text-[#7C1823]" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Goals</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Continuously pushing the boundaries of R&D to set new international benchmarks in quality.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Right Image Collage */}
      <div className="w-full lg:w-7/12 flex justify-center mt-12 md:mt-16 lg:mt-0 xl:-mr-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[550px] aspect-square mx-auto lg:mr-0"
        >
          {/* Top Diamond */}
          <div className="absolute top-[6%] left-[34%] -translate-x-[50%] w-[38%] aspect-square rounded-[2rem] md:rounded-[2.5rem] bg-gray-200 rotate-45 overflow-hidden shadow-lg z-10 hover:scale-105 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1541888081691-0f72f62b48d2?w=800&auto=format&fit=crop" className="w-full h-full object-cover -rotate-45 scale-[1.4]" alt="Infrastructure" />
            <div className="absolute inset-0 bg-[#7C1823]/20 mix-blend-multiply"></div>
          </div>
          
          {/* Left Diamond */}
          <div className="absolute top-[50%] left-[2%] -translate-y-[50%] w-[38%] aspect-square rounded-[2rem] md:rounded-[2.5rem] bg-gray-200 rotate-45 overflow-hidden shadow-lg z-10 hover:scale-105 transition-transform duration-500">
            <img src="/images/contactpage.png" className="w-full h-full object-cover -rotate-45 scale-[1.4]" alt="Workers" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Bottom Diamond */}
          <div className="absolute bottom-[6%] left-[34%] -translate-x-[50%] w-[38%] aspect-square rounded-[2rem] md:rounded-[2.5rem] bg-gray-200 rotate-45 overflow-hidden shadow-lg z-10 hover:scale-105 transition-transform duration-500">
            <img src="/images/waterproofing.png" className="w-full h-full object-cover -rotate-45 scale-[1.4]" alt="Application" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Right Huge Diamond */}
          <div className="absolute top-[50%] left-[42%] -translate-y-[50%] w-[75%] aspect-square rounded-[3rem] md:rounded-[4.5rem] bg-gray-200 rotate-45 overflow-hidden shadow-2xl z-0 hover:scale-[1.02] transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1504917595217-d4ce5eb92815?w=1000&auto=format&fit=crop" className="w-full h-full object-cover -rotate-45 scale-[1.4] translate-x-[-10%]" alt="Industrial facility" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
</section>


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
