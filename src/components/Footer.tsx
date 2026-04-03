import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About AR Laminators</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#C8CBCE' }}>
              Leading provider of engineering protection solutions for infrastructure and construction projects across India since 1939.
            </p>
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: '#7C1823' }}>
                <span className="text-white font-bold">AR</span>
              </div>
              <div className="text-sm">
                <div className="font-bold">AR Laminators</div>
                <div className="text-xs" style={{ color: '#C8CBCE' }}>Engineering Protection</div>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Waterproofing</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Road Surfacing</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Industrial Flooring</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Protective Coating</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Sealants</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Repair Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>About Us</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Industries</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Projects</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Quality & Certifications</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Media & Downloads</a></li>
              <li><a href="#" className="transition-all duration-300 hover:translate-x-2 inline-block" style={{ color: '#C8CBCE' }}>Careers</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#7C1823' }} />
                <span style={{ color: '#C8CBCE' }}>
                  AR Laminators<br />
                  Mumbai, Maharashtra<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#7C1823' }} />
                <span style={{ color: '#C8CBCE' }}>+91 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#7C1823' }} />
                <span style={{ color: '#C8CBCE' }}>info@arlaminators.com</span>
              </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2">
                <Linkedin className="w-5 h-5 flex-shrink-0" style={{ color: '#7C1823' }} />
                <a href="#" className="transition-colors duration-300" style={{ color: '#C8CBCE' }}>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-sm" style={{ borderTop: '1px solid #3a3a3a', color: '#C8CBCE' }}>
          <p>&copy; {new Date().getFullYear()} AR Laminators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}