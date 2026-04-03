import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, Building2, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Mumbai-Nagpur Expressway',
    client: 'National Highways Authority of India (NHAI)',
    location: 'Maharashtra',
    year: '2023-2024',
    image: 'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Highways'
  },
  {
    id: 2,
    name: 'Delhi Metro Phase IV',
    client: 'Delhi Metro Rail Corporation (DMRC)',
    location: 'New Delhi',
    year: '2022-2024',
    image: 'https://images.unsplash.com/photo-1716090570927-7655d871d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWx3YXklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Metro'
  },
  {
    id: 3,
    name: 'Chenab Bridge Project',
    client: 'Indian Railways',
    location: 'Jammu & Kashmir',
    year: '2021-2023',
    image: 'https://images.unsplash.com/photo-1768224278470-2ff4ff9196cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMHByb2plY3R8ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Railways'
  },
  {
    id: 4,
    name: 'Bandra-Worli Sea Link Maintenance',
    client: 'Maharashtra State Road Development Corporation',
    location: 'Mumbai',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1709330181144-c7e6f518cb88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MDU1OTQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Highways'
  },
  {
    id: 5,
    name: 'NTPC Thermal Power Plant',
    client: 'National Thermal Power Corporation',
    location: 'Uttar Pradesh',
    year: '2022-2023',
    image: 'https://images.unsplash.com/photo-1712319163901-02dc72728c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHBsYW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzA1NDYwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Power Plants'
  },
  {
    id: 6,
    name: 'Bangalore Metro Expansion',
    client: 'Bangalore Metro Rail Corporation',
    location: 'Karnataka',
    year: '2023-2024',
    image: 'https://images.unsplash.com/photo-1716090570927-7655d871d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWx3YXklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Metro'
  }
];

export function ProjectsPage() {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our contribution to India's infrastructure development through successful partnerships with government agencies and PSUs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate('project-detail', { projectId: project.id })}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#7C1823] text-white px-3 py-1 rounded text-sm font-semibold">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <Building2 className="w-4 h-4 text-[#7C1823] flex-shrink-0 mt-0.5" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-[#7C1823] flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 text-[#7C1823] flex-shrink-0" />
                    <span>{project.year}</span>
                  </div>
                </div>
                
                <button className="text-[#7C1823] font-semibold hover:gap-2 transition-all flex items-center gap-1">
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}