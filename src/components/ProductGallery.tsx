import CircularGallery from './CircularGallery';

const products = [
  {
    image: '/images/Waterproofing-Membranes.png',
    text: 'AR APP MEMBRANE',
    description: 'High-performance waterproofing for roofs and terraces.'
  },
  {
    image: '/images/waterproofing.png',
    text: 'AR VIGNESH BRAND',
    description: 'Premium self-adhesive protection for foundation structures.'
  },
  {
    image: '/images/sealtap.png',
    text: 'AR ALUMINIUM TAPE',
    description: 'Multi-purpose adhesive tape for reliable joint sealing.'
  },
  {
    image: '/images/bitumen.png',
    text: 'AR MINERAL FINISH',
    description: 'Durable mineral-coated surface for weather resistance.'
  },
  {
    image: '/images/sealant.png',
    text: 'AR BUTYLE TAPE',
    description: 'Strong bonding sealant for critical infrastructure joints.'
  },
  {
    image: '/images/pipeline.png',
    text: 'AR HDPE MEMBRANE',
    description: 'Heavy-duty lining for industrial structure protection.'
  },
  {
    image: '/images/primer.png',
    text: 'AR PRIMER',
    description: 'Specialized surface preparation for superior adhesion.'
  },
  {
    image: '/images/Paints.png',
    text: 'WATER BASE PRIMER',
    description: 'Eco-friendly priming solution for industrial coatings.'
  },
  {
    image: '/images/flooring.jpg',
    text: 'AR CROSS LAMINATED',
    description: 'Advanced impact-resistant protection for pipelines.'
  }
];

export function ProductGallery() {
  return (
    <section className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="text-center">
          <div className="font-semibold mb-2 tracking-wider" style={{ color: '#7C1823' }}>OUR PRODUCTS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-primary">
            Engineered Protection Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our range of specialized industrial solutions for infrastructure longevity and performance.
          </p>
        </div>
      </div>
      
      <div className="h-[500px] md:h-[650px] w-full relative">
        <CircularGallery 
          items={products} 
          bend={3} 
          textColor="#000000" 
          borderRadius={0.05}
          font="bold 28px Montserrat, sans-serif"
        />
      </div>
    </section>
  );
}
