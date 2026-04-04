import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              About AR Laminators
            </h3>
            <p className="text-base leading-relaxed text-gray-600 mb-5">
              Leading provider of engineering protection solutions for 
              infrastructure and construction projects across India since 1939.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center font-bold">
                AR
              </div>
              <div className="text-base">
                <div className="font-semibold">AR Laminators</div>
                <div className="text-sm text-gray-500">
                  Engineering Protection
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Products
            </h3>
            <ul className="space-y-4 text-base text-gray-600">
              {[
                "Waterproofing",
                "Road Surfacing",
                "Industrial Flooring",
                "Protective Coating",
                "Sealants",
                "Repair Solutions"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="inline-block hover:text-[#7C1823] hover:translate-x-1 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-4 text-base text-gray-600">
              {[
                "About Us",
                "Products",
                "Certifications",
                "Media & Downloads",
                
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="inline-block hover:text-[#7C1823] hover:translate-x-1 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Contact Information
            </h3>
            <ul className="space-y-4 text-base text-gray-600">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <span>
                  AR Laminators <br />
                  Mumbai, Maharashtra <br />
                  India
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>+91 22 1234 5678</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>info@arlaminators.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-gray-500" />
                <a href="#" className="inline-block hover:text-[#7C1823] hover:translate-x-1 transition-all duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 text-center text-base text-gray-500">
          © {new Date().getFullYear()} AR Laminators. All rights reserved.
        </div>
      </div>
    </footer>
  );
}