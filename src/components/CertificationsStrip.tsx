import { Award } from 'lucide-react';
import { motion } from 'motion/react';

const certifications = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'BIS Certified',
  'Govt. Approved',
  'CE Marking',
  'NABL Accredited'
];

export function CertificationsStrip() {
  return (
    <section className="py-12" style={{ backgroundColor: '#E8EAEB' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              <Award className="w-5 h-5" style={{ color: '#7C1823' }} />
              <span className="font-semibold text-black">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}