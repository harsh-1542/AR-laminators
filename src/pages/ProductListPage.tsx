import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

// Sample products data (from client's data - A.R Bituminous Primer example)
const productsByCategory: Record<string, any[]> = {
  'primers-bonding': [
    {
      id: 'ar-bituminous-primer-ob',
      name: 'A.R Bituminous Primer (O.B)',
      standard: 'IS:3384-1986 compliant',
      description: 'Oil-based primer for surface preparation',
      coverage: '0.30 Ltr/Sq.M'
    },
    {
      id: 'ar-bituminous-primer-wb',
      name: 'A.R Bituminous Primer (W.B)',
      standard: 'IS:3384-1986 compliant',
      description: 'Water-based primer for surface preparation',
      coverage: '0.25 Ltr/Sq.M'
    }
  ],
  'waterproofing-membranes': [
    {
      id: 'ar-membrane-app',
      name: 'A.R APP Membrane',
      standard: 'IS:15679 compliant',
      description: 'APP modified bitumen waterproofing membrane',
      coverage: '1 Roll covers 10 Sq.M'
    },
    {
      id: 'ar-membrane-sbs',
      name: 'A.R SBS Membrane',
      standard: 'IS:15679 compliant',
      description: 'SBS modified bitumen waterproofing membrane',
      coverage: '1 Roll covers 10 Sq.M'
    },
    {
      id: 'ar-self-adhesive-membrane',
      name: 'A.R Self-Adhesive Membrane',
      standard: 'IS:15679 compliant',
      description: 'Self-adhesive waterproofing membrane for easy application',
      coverage: '1 Roll covers 10 Sq.M'
    }
  ],
  'protective-coatings': [
    {
      id: 'ar-anti-corrosive-coating',
      name: 'A.R Anti-Corrosive Coating',
      standard: 'IS:2074 compliant',
      description: 'High-performance anti-corrosive coating for steel',
      coverage: '0.15 Ltr/Sq.M'
    },
    {
      id: 'ar-industrial-coating',
      name: 'A.R Industrial Coating',
      standard: 'IS:2074 compliant',
      description: 'Industrial grade protective coating for tanks',
      coverage: '0.18 Ltr/Sq.M'
    }
  ],
  'sealants-tapes': [
    {
      id: 'ar-pipe-kote-tape',
      name: 'A.R Pipe-Kote Coal Tar Tape',
      standard: 'IS:10102 compliant',
      description: 'Anti-corrosion protection for underground pipelines',
      coverage: '1 Roll covers 50 M'
    },
    {
      id: 'ar-joint-sealant',
      name: 'A.R Joint Sealant',
      standard: 'IS:2346 compliant',
      description: 'Polyurethane-based joint sealing compound',
      coverage: '300 ml/M'
    }
  ],
  'road-pavement': [
    {
      id: 'ar-bitumen-emulsion',
      name: 'A.R Bitumen Emulsion',
      standard: 'IS:8887 compliant',
      description: 'Cationic bitumen emulsion for road construction',
      coverage: '0.8 Ltr/Sq.M'
    },
    {
      id: 'ar-crack-filler',
      name: 'A.R Crack Filler',
      standard: 'IS:15351 compliant',
      description: 'Hot applied crack filler for road repair',
      coverage: '1.2 Kg/M'
    }
  ],
  'pipeline-tank': [
    {
      id: 'ar-pipeline-wrap',
      name: 'A.R Pipeline Protection Wrap',
      standard: 'IS:10102 compliant',
      description: 'Complete pipeline protection system',
      coverage: '1 Roll covers 100 M'
    },
    {
      id: 'ar-tank-coating',
      name: 'A.R Tank Coating System',
      standard: 'IS:2074 compliant',
      description: 'Specialized coating for storage tanks',
      coverage: '0.20 Ltr/Sq.M'
    }
  ]
};

const categoryNames: Record<string, string> = {
  'primers-bonding': 'Primers & Bonding Agents',
  'waterproofing-membranes': 'Waterproofing Membranes',
  'protective-coatings': 'Protective Coatings & Paints',
  'sealants-tapes': 'Sealants & Tapes',
  'road-pavement': 'Road & Pavement Products',
  'pipeline-tank': 'Pipeline & Tank Protection'
};

export function ProductListPage() {
  const navigate = useNavigate();
  const params = useParams();
  const categoryId = params.category || 'primers-bonding';
  const [filterOpen, setFilterOpen] = useState(false);
  
  const products = productsByCategory[categoryId] || [];
  const categoryName = categoryNames[categoryId] || 'Products';

  return (
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
          <span className="text-black font-semibold">{categoryName}</span>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{categoryName}</h1>
          <p className="text-lg text-black">
            {products.length} products available
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <div 
              className="sticky top-36 rounded-lg p-6 shadow-lg"
              style={{ backgroundColor: 'white', border: '2px solid #C8CBCE' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" style={{ color: '#7C1823' }} />
                <h3 className="font-bold text-black">Filters</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black mb-2">Standard</h4>
                  <div className="space-y-2 text-sm text-black">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span>IS Certified</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span>International Standard</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2">Type</h4>
                  <div className="space-y-2 text-sm text-black">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span>Solvent Based</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span>Water Based</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate('product-detail', { productId: product.id, category: categoryId })}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  style={{ border: '2px solid #C8CBCE' }}
                >
                  <div 
                    className="p-8 flex items-center justify-center"
                    style={{ backgroundColor: '#F5F0E8' }}
                  >
                    <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7C1823' }}>
                      <span className="text-3xl font-bold" style={{ color: '#F5F0E8' }}>
                        AR
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                    <div 
                      className="text-xs font-semibold mb-3 inline-block px-3 py-1 rounded"
                      style={{ backgroundColor: '#F5F0E8', color: '#7C1823' }}
                    >
                      {product.standard}
                    </div>
                    <p className="text-black text-sm mb-2">{product.description}</p>
                    <p className="text-black text-sm mb-4">
                      <span className="font-semibold">Coverage:</span> {product.coverage}
                    </p>
                    <div 
                      className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
                      style={{ color: '#7C1823' }}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
