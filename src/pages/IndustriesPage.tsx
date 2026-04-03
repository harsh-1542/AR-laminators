import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Train, Building, Zap, Landmark, Construction, Factory } from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Highways & Expressways',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Comprehensive protection solutions for highway construction and maintenance'
  },
  {
    id: 2,
    name: 'Railways & Metro',
    icon: Train,
    image: 'https://images.unsplash.com/photo-1716090570927-7655d871d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWx3YXklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Specialized products for rail infrastructure and metro systems'
  },
  {
    id: 3,
    name: 'Industrial Plants',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Heavy-duty flooring and protection systems for manufacturing facilities'
  },
  {
    id: 4,
    name: 'Power Plants',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1712319163901-02dc72728c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHBsYW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzA1NDYwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Corrosion protection and waterproofing for power generation facilities'
  },
  {
    id: 5,
    name: 'Urban Infrastructure',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1768224278470-2ff4ff9196cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMHByb2plY3R8ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Building protection solutions for government and commercial projects'
  },
  {
    id: 6,
    name: 'Bridges & Flyovers',
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1768224278470-2ff4ff9196cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMHByb2plY3R8ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Structural protection and repair solutions for bridge infrastructure'
  }
];

export function IndustriesPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized engineering protection solutions across diverse infrastructure sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate('industry-detail', { industryId: industry.id })}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative overflow-hidden h-56">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-10 h-10 text-white mb-2" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <button className="text-[#7C1823] font-semibold hover:gap-2 transition-all flex items-center gap-1">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}