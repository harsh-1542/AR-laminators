import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ApplicationForm } from '../components/ApplicationForm';

// Sample product data
const productsData: Record<string, any> = {
  'ar-bituminous-primer-ob': {
    name: 'A.R Bituminous Primer (O.B)',
    category: 'Primers & Bonding Agents',
    technicalSpecs: [
      { property: 'Type', value: 'Solvent / Oil Based' },
      { property: 'Standard', value: 'IS:3384-1986' },
      { property: 'Coverage', value: '0.30 Ltr / Sq.M' },
      { property: 'Setting Time', value: '24 Hours' },
      { property: 'Specific Gravity', value: '0.90' },
      { property: 'Flash Point', value: '40°C Min' },
      { property: 'Service Temperature', value: '5°C – 50°C' }
    ],
    packaging: [
      { type: 'Drum Sizes', value: '20 Ltr / 200 Ltr' }
    ],
    description: 'A.R Bituminous Primer (O.B) is a solvent-based primer designed to seal pores in concrete and improve adhesion of bituminous materials. It ensures strong bonding before membrane application.',
    applications: [
      'Priming concrete and masonry surfaces',
      'Surface preparation before waterproofing',
      'Canal lining and concrete flooring applications'
    ],
    benefits: [
      'High penetration and strong bonding',
      'Quick drying compared to water-based primers',
      'Improves adhesion of membranes',
      'Binds surface dust particles'
    ]
  },
  'ar-bituminous-primer-wb': {
    name: 'A.R Bituminous Primer (W.B)',
    category: 'Primers & Bonding Agents',
    technicalSpecs: [
      { property: 'Type', value: 'Water Based' },
      { property: 'Standard', value: 'IS:3384-1986' },
      { property: 'Coverage', value: '0.25 Ltr / Sq.M' },
      { property: 'Setting Time', value: '12 Hours' },
      { property: 'Specific Gravity', value: '1.02' },
      { property: 'Service Temperature', value: '10°C – 45°C' }
    ],
    packaging: [
      { type: 'Container Sizes', value: '20 Ltr / 200 Ltr' }
    ],
    description: 'A.R Bituminous Primer (W.B) is an eco-friendly water-based primer for surface preparation. It provides excellent adhesion for waterproofing membranes with faster drying time.',
    applications: [
      'Surface preparation for eco-friendly projects',
      'Indoor waterproofing applications',
      'Concrete surface priming'
    ],
    benefits: [
      'Environmentally friendly',
      'Faster drying time',
      'Low VOC content',
      'Easy application'
    ]
  },
  'ar-membrane-app': {
    name: 'A.R APP Membrane',
    category: 'Waterproofing Membranes',
    technicalSpecs: [
      { property: 'Type', value: 'APP Modified Bitumen' },
      { property: 'Standard', value: 'IS:15679' },
      { property: 'Thickness', value: '3mm / 4mm' },
      { property: 'Width', value: '1 Meter' },
      { property: 'Length', value: '10 Meters' },
      { property: 'Coverage', value: '1 Roll covers 10 Sq.M' },
      { property: 'Service Temperature', value: '-20°C to 80°C' }
    ],
    packaging: [
      { type: 'Roll Size', value: '1m x 10m' },
      { type: 'Thickness Options', value: '3mm / 4mm' }
    ],
    description: 'A.R APP Membrane is a high-quality APP modified bitumen waterproofing membrane suitable for roofs, terraces, and basements. Provides long-lasting protection against water ingress.',
    applications: [
      'Roof waterproofing',
      'Terrace waterproofing',
      'Basement protection',
      'Podium deck waterproofing'
    ],
    benefits: [
      'Excellent UV resistance',
      'High temperature stability',
      'Superior elongation properties',
      'Long service life'
    ]
  },
  'ar-pipe-kote-tape': {
    name: 'A.R Pipe-Kote Coal Tar Tape',
    category: 'Sealants & Tapes',
    technicalSpecs: [
      { property: 'Type', value: 'Coal Tar Based' },
      { property: 'Standard', value: 'IS:10102' },
      { property: 'Coverage', value: '1 Roll covers 50 M' },
      { property: 'Thickness', value: '1.5 mm' },
      { property: 'Width', value: '100 mm / 150 mm' },
      { property: 'Adhesion', value: 'High' },
      { property: 'Service Temperature', value: '-10°C to 60°C' }
    ],
    packaging: [
      { type: 'Roll Length', value: '50 Meters' },
      { type: 'Width Options', value: '100 mm / 150 mm' }
    ],
    description: 'A.R Pipe-Kote Coal Tar Tape provides reliable anti-corrosion protection for underground pipelines. This high-adhesion tape offers excellent resistance to soil chemicals and moisture.',
    applications: [
      'Underground pipeline protection',
      'Oil & gas pipeline wrapping',
      'Water pipeline anti-corrosion',
      'Industrial pipe coating'
    ],
    benefits: [
      'Excellent corrosion resistance',
      'Easy to apply and wrap',
      'Long-lasting protection',
      'Resistant to soil chemicals and moisture'
    ]
  },
  'ar-anti-corrosive-coating': {
    name: 'A.R Anti-Corrosive Coating',
    category: 'Protective Coatings & Paints',
    technicalSpecs: [
      { property: 'Type', value: 'Epoxy Based' },
      { property: 'Standard', value: 'IS:2074' },
      { property: 'Coverage', value: '0.15 Ltr / Sq.M' },
      { property: 'Dry Film Thickness', value: '100 microns' },
      { property: 'Drying Time', value: '4-6 Hours' },
      { property: 'Service Temperature', value: '-10°C to 120°C' }
    ],
    packaging: [
      { type: 'Pack Size', value: '5 Ltr / 20 Ltr' }
    ],
    description: 'A.R Anti-Corrosive Coating is a high-performance epoxy-based coating for steel structures. Provides excellent protection against corrosion in harsh industrial environments.',
    applications: [
      'Steel structure protection',
      'Tank coating',
      'Pipeline coating',
      'Industrial equipment protection'
    ],
    benefits: [
      'Superior corrosion resistance',
      'Chemical resistant',
      'Excellent adhesion',
      'Long-term durability'
    ]
  }
};

export function ProductDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const productId = params.productId || 'ar-bituminous-primer-ob';
  const product = productsData[productId] || productsData['ar-bituminous-primer-ob'];

  return (
    <>
      <div className="pt-32" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <button 
              onClick={() => navigate('/products')}
              className="hover:underline"
              style={{ color: '#7C1823' }}
            >
              Products
            </button>
            <span className="text-black">/</span>
            <span className="text-black">{product.category}</span>
            <span className="text-black">/</span>
            <span className="text-black font-semibold">{product.name}</span>
          </div>

          {/* TOP SECTION - 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* LEFT - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-12 flex items-center justify-center"
              style={{ border: '2px solid #C8CBCE' }}
            >
              <div 
                className="w-64 h-64 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#7C1823' }}
              >
                <span className="text-8xl font-bold" style={{ color: '#F5F0E8' }}>
                  AR
                </span>
              </div>
            </motion.div>

            {/* RIGHT - Product Info + Technical Table */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Product Name and Category */}
              <div>
                <div 
                  className="text-sm font-semibold mb-2 inline-block px-3 py-1 rounded"
                  style={{ backgroundColor: '#F5F0E8', color: '#7C1823' }}
                >
                  {product.category}
                </div>
                <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="px-8 py-3 rounded font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 text-white flex items-center gap-2"
                  style={{ backgroundColor: '#7C1823' }}
                >
                  Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ border: '2px solid #C8CBCE' }}>
                <div className="px-6 py-4" style={{ backgroundColor: '#7C1823' }}>
                  <h3 className="text-xl font-bold" style={{ color: '#F5F0E8' }}>
                    Technical Specifications
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead style={{ backgroundColor: '#F5F0E8' }}>
                      <tr>
                        <th className="text-left px-6 py-3 font-semibold text-black border-b" style={{ borderColor: '#C8CBCE' }}>
                          Property
                        </th>
                        <th className="text-left px-6 py-3 font-semibold text-black border-b" style={{ borderColor: '#C8CBCE' }}>
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.technicalSpecs.map((spec: any, index: number) => (
                        <tr 
                          key={index} 
                          className="hover:bg-gray-50 transition-colors"
                          style={{ borderBottom: `1px solid #C8CBCE` }}
                        >
                          <td className="px-6 py-3 text-black">{spec.property}</td>
                          <td className="px-6 py-3 text-black font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Packaging Table (if available) */}
              {product.packaging && product.packaging.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ border: '2px solid #C8CBCE' }}>
                  <div className="px-6 py-4" style={{ backgroundColor: '#7C1823' }}>
                    <h3 className="text-xl font-bold" style={{ color: '#F5F0E8' }}>
                      Packaging
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead style={{ backgroundColor: '#F5F0E8' }}>
                        <tr>
                          <th className="text-left px-6 py-3 font-semibold text-black border-b" style={{ borderColor: '#C8CBCE' }}>
                            Packaging
                          </th>
                          <th className="text-left px-6 py-3 font-semibold text-black border-b" style={{ borderColor: '#C8CBCE' }}>
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.packaging.map((pkg: any, index: number) => (
                          <tr 
                            key={index}
                            className="hover:bg-gray-50 transition-colors"
                            style={{ borderBottom: `1px solid #C8CBCE` }}
                          >
                            <td className="px-6 py-3 text-black">{pkg.type}</td>
                            <td className="px-6 py-3 text-black font-semibold">{pkg.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* LOWER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8"
              style={{ border: '2px solid #C8CBCE' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">Description</h3>
              <p className="text-black leading-relaxed text-lg">{product.description}</p>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
              style={{ border: '2px solid #C8CBCE' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">Application</h3>
              <ul className="space-y-3">
                {product.applications.map((app: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#7C1823' }} />
                    <span className="text-black">{app}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
              style={{ border: '2px solid #C8CBCE' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#7C1823' }} />
                    <span className="text-black">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Apply Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowApplicationForm(true)}
              className="px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
              style={{ backgroundColor: '#7C1823' }}
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationForm 
          productName={product.name}
          onClose={() => setShowApplicationForm(false)} 
        />
      )}
    </>
  );
}