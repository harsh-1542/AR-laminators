import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Award, Shield, FlaskConical, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System' },
  { name: 'BIS Certified', description: 'Bureau of Indian Standards' },
  { name: 'Government Approved', description: 'CPWD, RDSO, IRC Approved' },
  { name: 'CE Marking', description: 'European Conformity' },
  { name: 'NABL Accredited', description: 'Laboratory Accreditation' }
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
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
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
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-[#7C1823] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quality Policy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At AR Laminators, quality is not just a commitment—it's our foundation. We ensure every product meets the highest standards of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPolicies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white p-6 rounded-lg border-2 border-gray-200"
              >
                <CheckCircle className="w-6 h-6 text-[#7C1823] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{policy}</p>
              </motion.div>
            ))}
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
                className="bg-white p-8 rounded-lg border-2 border-gray-200 text-center hover:border-[#7C1823] hover:shadow-lg transition-all"
              >
                <Award className="w-12 h-12 text-[#7C1823] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
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
              <FlaskConical className="w-16 h-16 text-[#7C1823] mb-4" />
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

            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756742878998-9d8cd5360a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2R1Y3Rpb24lMjBwbGFudHxlbnwxfHx8fDE3NzA1NjIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laboratory Testing"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality Control"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
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