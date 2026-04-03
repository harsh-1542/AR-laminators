import { motion } from 'motion/react';
import { Sparkles, Paintbrush, Flame, Package } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Sparkles,
    title: 'Surface Preparation',
    description: 'Cleaning and preparation to ensure optimal adhesion and performance.'
  },
  {
    number: 2,
    icon: Paintbrush,
    title: 'Priming',
    description: 'Application of high-quality primers to seal pores and enhance bonding.'
  },
  {
    number: 3,
    icon: Flame,
    title: 'Activation / Heating',
    description: 'Controlled heating process to activate membranes and tapes.'
  },
  {
    number: 4,
    icon: Package,
    title: 'Application & Wrapping',
    description: 'Precision wrapping with overlap to create a seamless protective layer.'
  }
];

export function TechnicalProcess() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="font-semibold mb-2" style={{ color: '#7C1823' }}>OUR PROCESS</div>
          <h2 className="text-4xl font-bold text-black mb-6">
            Technical Excellence in Every Step
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Every step is executed with precision to ensure maximum durability and protection.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connection Line - Desktop */}
          <div 
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 mx-auto"
            style={{ 
              width: 'calc(100% - 200px)',
              marginLeft: '100px',
              backgroundColor: '#C8CBCE'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    {/* Number Badge */}
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: '#7C1823' }}
                    >
                      <span className="text-2xl font-bold" style={{ color: '#F5F0E8' }}>
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <Icon 
                      className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 hover:scale-110" 
                      style={{ color: '#7C1823' }} 
                    />

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black text-center mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Arrow - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div 
                        className="w-1 h-8"
                        style={{ backgroundColor: '#C8CBCE' }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div 
            className="inline-block px-8 py-4 rounded-lg"
            style={{ backgroundColor: '#7C1823' }}
          >
            <p className="text-xl font-semibold" style={{ color: '#F5F0E8' }}>
              Professional execution backed by 30+ years of expertise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
