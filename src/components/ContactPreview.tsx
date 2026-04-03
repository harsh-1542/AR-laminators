import { motion } from 'motion/react';
import { MapPin, Mail, Clock, User, ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export function ContactPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <div 
              className="w-full h-[500px] bg-gray-200 flex items-center justify-center"
              style={{ backgroundColor: '#F5F0E8' }}
            >
              {/* Map Placeholder - In production, use Google Maps embed or similar */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5555!2d73.1812!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzE0LjAiTiA3M8KwMTAnNTIuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AR Laminators Location"
              />
            </div>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4" style={{ color: '#7C1823' }}>
              <span className="font-semibold">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Visit Our Facility
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              We welcome you to visit our manufacturing facility in Vadodara. Our team is always ready to discuss your project requirements and provide technical guidance.
            </p>

            <div className="space-y-6">
              {/* Company Name */}
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: '#7C1823' }} />
                </div>
                <div>
                  <div className="font-bold text-xl text-black mb-1">
                    A.R. Laminators (AR Group)
                  </div>
                  <div className="text-black">
                    Plot No. 497/2, GIDC Estate, Makarpura,<br />
                    Vadodara – 390010, Gujarat
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <User className="w-6 h-6" style={{ color: '#7C1823' }} />
                </div>
                <div>
                  <div className="font-bold text-lg text-black mb-1">Contact Persons</div>
                  <div className="text-black">Mr. Amit Desai</div>
                  <div className="text-black">Mr. Aminesh Desai</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <Mail className="w-6 h-6" style={{ color: '#7C1823' }} />
                </div>
                <div>
                  <div className="font-bold text-lg text-black mb-1">Email</div>
                  <a 
                    href="mailto:arindustries2001@yahoo.in"
                    className="text-black hover:underline"
                    style={{ color: '#7C1823' }}
                  >
                    arindustries2001@yahoo.in
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <Clock className="w-6 h-6" style={{ color: '#7C1823' }} />
                </div>
                <div>
                  <div className="font-bold text-lg text-black mb-1">Business Hours</div>
                  <div className="text-black">Mon – Sun | 9:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="mt-8 px-8 py-4 rounded font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
              style={{ backgroundColor: '#7C1823' }}
            >
              Send Us a Message
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
