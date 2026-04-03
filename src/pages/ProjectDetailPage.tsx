import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, Building2, Calendar, CheckCircle, Package } from 'lucide-react';

const projectDetails: Record<number, any> = {
  1: {
    name: 'Mumbai-Nagpur Expressway',
    client: 'National Highways Authority of India (NHAI)',
    location: 'Maharashtra',
    year: '2023-2024',
    heroImage: 'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'The Mumbai-Nagpur Expressway, spanning over 700 km, required high-performance road surfacing solutions capable of withstanding extreme weather conditions and heavy traffic loads. The project demanded materials that could ensure long-term durability while meeting strict government specifications and timelines.',
    solution: 'AR Laminators provided comprehensive road protection solutions including polymer-modified bitumen, joint sealants, and protective coatings. Our technical team worked closely with NHAI engineers to customize formulations specific to regional climate conditions. We deployed specialized application equipment and trained on-site personnel to ensure consistent quality across the entire stretch.',
    productsUsed: [
      'ArlaRoad RS-3000 - Road Surfacing',
      'ArlaRoad Polymer - Modified Bitumen',
      'ArlaSeal PS-200 - Joint Sealant',
      'ArlaShield AC-100 - Protective Coating'
    ],
    execution: [
      'Phase 1: Site survey and material testing (2 months)',
      'Phase 2: Customized formulation development (1 month)',
      'Phase 3: Production and quality checks (Ongoing)',
      'Phase 4: On-site application with technical supervision',
      'Phase 5: Post-application monitoring and maintenance support'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1709330181144-c7e6f518cb88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MDU1OTQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768224278470-2ff4ff9196cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMHByb2plY3R8ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
};

export function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId || 1;
  const project = projectDetails[projectId] || projectDetails[1];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900 mb-12">
        <ImageWithFallback
          src={project.heroImage}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Challenge Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{project.challenge}</p>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{project.solution}</p>
        </motion.section>

        {/* Products Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Package className="w-8 h-8 text-[#7C1823]" />
            Products Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.productsUsed.map((product: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <CheckCircle className="w-5 h-5 text-[#7C1823] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{product}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Execution Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Execution Process</h2>
          <div className="space-y-4">
            {project.execution.map((step: string, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#7C1823] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}