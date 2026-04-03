import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface FeaturedProjectsProps {
  projectImages: string[];
}

const projects = [
  {
    name: 'Mumbai-Nagpur Expressway',
    client: 'National Highways Authority of India',
    location: 'Maharashtra'
  },
  {
    name: 'Delhi Metro Phase IV',
    client: 'Delhi Metro Rail Corporation',
    location: 'New Delhi'
  },
  {
    name: 'Chenab Bridge Project',
    client: 'Indian Railways',
    location: 'Jammu & Kashmir'
  },
  {
    name: 'Bandra-Worli Sea Link',
    client: 'Maharashtra State Road Development Corporation',
    location: 'Mumbai'
  }
];

export function FeaturedProjects({ projectImages }: FeaturedProjectsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-semibold mb-2" style={{ color: '#7C1823' }}>FEATURED PROJECTS</div>
          <h2 className="text-4xl font-bold text-black">
            Building India's Future
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="relative group">
              <ImageWithFallback
                src={projectImages[currentSlide] || projectImages[0]}
                alt={projects[currentSlide].name}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{projects[currentSlide].name}</h3>
                <p className="text-lg mb-1">Client: {projects[currentSlide].client}</p>
                <p className="text-lg mb-4">Location: {projects[currentSlide].location}</p>
                <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  View Case Study
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
            style={{ color: '#7C1823' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
            style={{ color: '#7C1823' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125`}
                style={{ backgroundColor: index === currentSlide ? '#7C1823' : '#C8CBCE' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}