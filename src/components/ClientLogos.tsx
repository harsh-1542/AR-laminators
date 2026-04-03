import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const companies = [
  { name: 'Adani Power', logo: '/images/adani_power.jpg' },
  { name: 'Siemens', logo: '/images/siemens.png' },
  { name: 'Megha Engineering', logo: '/images/Megha.png' },
  { name: 'NTPC', logo: '/images/ntpc.png' },
  { name: 'Tata Projects', logo: '/images/tata.png' }
];

export function ClientLogos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const getVisibleCompanies = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(companies[(currentIndex + i) % companies.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-normal text-black tracking-tight font-['Montserrat']">
            Trusted by Leading Infrastructure & Industrial Companies
          </h2>
        </div>

        <div className="relative w-full flex flex-col items-center">
          <div className="flex justify-center items-center gap-8 md:gap-16 w-full min-h-[140px] overflow-hidden px-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleCompanies().map((company, index) => (
                <motion.div
                  key={`${company.name}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center w-[120px] md:w-[150px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-24 max-w-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-xl font-bold text-black hidden text-center font-['Montserrat'] leading-tight">{company.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-black hover:bg-gray-100 transition-colors bg-white flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-black hover:bg-gray-100 transition-colors bg-white flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}