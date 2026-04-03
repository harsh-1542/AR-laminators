import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/industry.jpg',
    headline: "Leaders in Anti-Corrosive Pipe Protection & Waterproofing Solutions",
    subheadline: "Protecting infrastructure since 1991 with high-performance membranes, tapes, and industrial coatings.",
    highlights: [
      "30+ Years of Excellence",
      "Approved by EIL, ONGC & L&T",
      "Pan-India Supply & Application Services"
    ],
    buttons: [
      { label: "Explore Products", link: "products", primary: true },
      { label: "Get Consultation", link: "contact", primary: false }
    ]
  },
  {
    image: '/images/hero2.jpg',
    headline: "Engineered Protection That Lasts Decades",
    subheadline: "Advanced waterproofing systems and corrosion protection solutions designed for extreme environments.",
    highlights: [],
    buttons: [
      { label: "View Applications", link: "industries", primary: true },
      { label: "Download Brochure", link: "contact", primary: false }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    headline: "From Manufacturing to On-Site Execution",
    subheadline: "Complete solutions — products, engineering, and professional application services across India.",
    highlights: [],
    buttons: [
      { label: "Request Site Visit", link: "contact", primary: true }
    ]
  }
];

export function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            {/* Simple dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
                {slide.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{ color: '#F5F0E8', opacity: 0.95 }}>
                {slide.subheadline}
              </p>

              {slide.highlights.length > 0 && (
                <div className="mb-8 space-y-3">
                  {slide.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F5F0E8' }} />
                      <span className="text-lg" style={{ color: '#F5F0E8' }}>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {slide.buttons.map((button, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    onClick={() => navigate(button.link)}
                    className={`px-8 py-4 rounded font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      button.primary ? 'text-white' : 'text-white'
                    }`}
                    style={
                      button.primary
                        ? { backgroundColor: '#7C1823' }
                        : { border: '2px solid #F5F0E8', backgroundColor: 'transparent' }
                    }
                    onMouseEnter={(e) => {
                      if (!button.primary) {
                        e.currentTarget.style.backgroundColor = '#F5F0E8';
                        e.currentTarget.style.color = '#7C1823';
                        e.currentTarget.style.borderColor = '#F5F0E8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!button.primary) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#F5F0E8';
                      }
                    }}
                  >
                    {button.label}
                    {index === 0 && <ArrowRight className="w-5 h-5" />}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: 'rgba(245, 240, 232, 0.2)', backdropFilter: 'blur(4px)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(245, 240, 232, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(245, 240, 232, 0.2)';
        }}
      >
        <ChevronLeft className="w-6 h-6" style={{ color: '#F5F0E8' }} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: 'rgba(245, 240, 232, 0.2)', backdropFilter: 'blur(4px)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(245, 240, 232, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(245, 240, 232, 0.2)';
        }}
      >
        <ChevronRight className="w-6 h-6" style={{ color: '#F5F0E8' }} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: currentSlide === index ? '#F5F0E8' : 'rgba(245, 240, 232, 0.4)'
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-23 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-center" style={{ color: '#F5F0E8' }}>
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center" style={{ borderColor: '#F5F0E8' }}>
            <motion.div
              className="w-1.5 h-3 rounded-full mt-2"
              style={{ backgroundColor: '#F5F0E8' }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}