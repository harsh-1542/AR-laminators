import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Award, Shield, FlaskConical, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop' },
  { name: 'BIS Certified', description: 'Bureau of Indian Standards', image: 'https://images.unsplash.com/photo-1541888081691-0f72f62b48d2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Government Approved', description: 'CPWD, RDSO, IRC Approved', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { name: 'CE Marking', description: 'European Conformity', image: 'https://images.unsplash.com/photo-1504917595217-d4ce5eb92815?q=80&w=800&auto=format&fit=crop' },
  { name: 'NABL Accredited', description: 'Laboratory Accreditation', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop' }
];

const qualityPolicies = [
  'Commitment to delivering products that meet or exceed customer expectations',
  'Continuous improvement of processes, products, and services',
  'Compliance with all applicable regulatory and statutory requirements',
  'Investment in research and development for innovative solutions',
  'Training and development of workforce for quality excellence',
  'Environmental sustainability in all operations'
];

const labCapabilities = [
  'Chemical composition analysis',
  'Physical property testing',
  'Performance evaluation under various conditions',
  'Durability and aging tests',
  'Environmental impact assessment',
  'Quality control and batch testing'
];

export function QualityPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 mb-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Quality & Certifications"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col text-center  justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">Quality & Certifications</h1>
            <p className="text-xl text-gray-200">
              Committed to excellence through stringent quality control and international standards
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Quality Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8"
        >
          {/* Left Round Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-md md:max-w-lg aspect-square rounded-full overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.12)] border-2 border-gray-100 cursor-pointer flex items-center justify-center transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              <ImageWithFallback
                src="/images/waterproofing.png"
                alt="Quality Standards"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Our Quality Policy</h2>
            <p className="text-lg text-gray-500 mb-8 border-b border-gray-200 pb-6">Standards of Excellence</p>
            
            <div className="space-y-4 mb-8">
              {qualityPolicies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7C1823] flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#68141d] group-hover:shadow-[0_4px_15px_rgba(124,24,35,0.3)]">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-[1.05rem]">{policy}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed pt-6 border-t border-gray-200">
              At AR Laminators, quality is not just a commitment—it's our foundation. We ensure every product meets the highest standards of excellence.
            </p>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-[#7C1823] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Approvals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized and certified by leading national and international quality bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden text-center hover:shadow-[0_15px_40px_rgba(124,24,35,0.08)] transition-all group flex flex-col cursor-pointer"
              >
                <div className="w-full h-48 relative overflow-hidden bg-gray-50 border-b border-gray-100">
                   <ImageWithFallback 
                     src={cert.image} 
                     alt={cert.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col items-center justify-center relative">
                   <div className="absolute -top-8 bg-white p-3 rounded-full shadow-md border border-gray-50">
                     <Award className="w-8 h-8 text-[#7C1823]" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{cert.name}</h3>
                   <p className="text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Laboratory Testing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <FlaskConical className="w-16 h-16 text-[#7C1823] mb-4" /> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Laboratory Testing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Our NABL-accredited laboratory is equipped with state-of-the-art testing equipment to ensure every batch meets stringent quality parameters. We conduct comprehensive tests at every stage of production.
              </p>
              
              <div className="space-y-3">
                {labCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#7C1823] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                <ImageWithFallback
                  src="/images/advancelab.png"
                  alt="Laboratory Testing"
                  className="w-120 h-100 object-cover"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Safety & Compliance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 -mx-4 px-4 py-16"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety & Compliance</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We adhere to all safety regulations and environmental standards. Our products comply with CPWD specifications, RDSO guidelines, IRC standards, and other government requirements. Worker safety, environmental protection, and sustainable practices are integral to our operations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-800">CPWD Approved</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-800">RDSO Certified</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-800">IRC Standards</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-800">Environmental Compliance</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}