import { MapPin, Phone, Mail, Linkedin, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const productCategories = [
    { id: 'primers-bonding', name: 'Primers & Bonding Agents' },
    { id: 'waterproofing-membranes', name: 'Waterproofing Membranes' },
    { id: 'protective-coatings', name: 'Protective Coatings & Paints' },
    { id: 'sealants-tapes', name: 'Sealants & Tapes' },
    { id: 'road-pavement', name: 'Road & Pavement Products' },
    { id: 'pipeline-tank', name: 'Pipeline & Tank Protection' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Top Bar - Hidden on mobile screens */}
      <div style={{ backgroundColor: '#862e38ff' }} className="text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
              <Phone className="w-4 h-4" />
              <span>+91 22 1234 5678</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
              <Mail className="w-4 h-4" />
              <span>info@arlaminators.com</span>
            </div>
          </div>
          <div>
            <a href="#" className="hover:opacity-80 transition-all duration-300 inline-block hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white relative" style={{ borderBottom: '1px solid #C8CBCE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105" onClick={() => { setIsMobileMenuOpen(false); navigate('/'); }}>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded flex items-center justify-center transition-all duration-300" style={{ backgroundColor: '#7C1823' }}>
                  <span className="text-white font-bold text-xl">AR</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">AR Laminators</div>
                  <div className="text-xs font-normal" style={{ color: '#6B6B6B' }}>Engineering Protection</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => navigate('/')} className="text-black font-normal text-xl transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
              </button>
              <button onClick={() => navigate('/about')} className="text-black font-normal text-xl transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
              </button>
              <div
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button className="text-black font-normal flex items-center gap-1 text-xl transition-all duration-300 relative group p-2">
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
                </button>

                {/* Mega Menu */}
                {showMegaMenu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-1 w-64 z-50">
                    <div className="bg-white shadow-lg rounded-lg py-4 px-6 animate-in fade-in slide-in-from-top-2 duration-300" style={{ border: '1px solid #C8CBCE' }}>
                      <button
                        onClick={() => {
                          setShowMegaMenu(false);
                          navigate('/products');
                        }}
                        className="block py-2 text-black hover:pl-2 transition-all duration-300 w-full text-left font-semibold text-xl mb-2 relative group"
                        style={{ borderBottom: '1px solid #C8CBCE' }}
                      >
                        All Products
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1 group-hover:w-1 transition-all duration-300 rounded" style={{ backgroundColor: '#7C1823' }}></span>
                      </button>
                      {productCategories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setShowMegaMenu(false);
                            navigate(`/products/${category.id}`);
                          }}
                          className="block py-2 text-black hover:pl-2 transition-all duration-300 w-full text-left relative group"
                        >
                          {category.name}
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1 group-hover:w-1 transition-all duration-300 rounded" style={{ backgroundColor: '#7C1823' }}></span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
                {/* <button onClick={() => navigate('/industries')} className="text-black font-normal text-xl transition-all duration-300 relative group">
                Industries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
              </button> */}
              <button onClick={() => navigate('/certification')} className="text-black font-normal text-xl transition-all duration-300 relative group">
                Certification
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
              </button>

              <button onClick={() => navigate('/media')} className="text-black font-normal text-xl transition-all duration-300 relative group">
                Media
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
              </button>

              <button onClick={() => navigate('/contact')} className="text-black font-normal text-xl transition-all duration-300 relative group">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#7C1823' }}></span>
              </button>

            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate('/contact')}
                className="text-white px-6 py-2.5 rounded font-normal transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#7C1823' }}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-black p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/'); }} className="w-full text-left text-black font-medium text-lg px-2 py-2 hover:bg-gray-50 rounded">
                Home
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/about'); }} className="w-full text-left text-black font-medium text-lg px-2 py-2 hover:bg-gray-50 rounded">
                About
              </button>
              <div className="w-full text-left px-2 py-2">
                <span className="text-black font-medium text-lg">Products</span>
                <div className="mt-3 flex flex-col space-y-3 pl-4 border-l-2 ml-1" style={{ borderLeftColor: '#7C1823' }}>
                  <button onClick={() => { setIsMobileMenuOpen(false); navigate('/products'); }} className="text-left text-black hover:text-[#7C1823] font-medium transition-colors">
                    All Products
                  </button>
                  {productCategories.map((category) => (
                    <button 
                      key={category.id} 
                      onClick={() => { setIsMobileMenuOpen(false); navigate(`/products/${category.id}`); }} 
                      className="text-left text-gray-700 hover:text-[#7C1823] transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/industries'); }} className="w-full text-left text-black font-medium text-lg px-2 py-2 hover:bg-gray-50 rounded">
                Industries
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/projects'); }} className="w-full text-left text-black font-medium text-lg px-2 py-2 hover:bg-gray-50 rounded">
                Projects
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/media'); }} className="w-full text-left text-black font-medium text-lg px-2 py-2 hover:bg-gray-50 rounded">
                Media
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/contact'); }} className="w-full text-left text-black font-medium text-lg px-2 py-2 hover:bg-gray-50 rounded">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}