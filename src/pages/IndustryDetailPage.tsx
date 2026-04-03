import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';

const industryData: Record<number, any> = {
  1: {
    name: 'Highways & Expressways',
    heroImage: 'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'India\'s highway network is expanding rapidly, requiring durable and high-performance materials that can withstand heavy traffic loads, extreme weather conditions, and varying terrain. AR Laminators has been a trusted partner in this sector for over 85 years, providing innovative solutions for road construction and maintenance.',
    challenges: [
      'Extreme temperature variations affecting material performance',
      'Heavy traffic loads requiring high-strength materials',
      'Rapid construction timelines with strict quality requirements',
      'Need for long-lasting solutions to reduce maintenance costs',
      'Environmental compliance and sustainability requirements'
    ],
    solutions: [
      'Polymer-modified bitumen for enhanced durability',
      'High-performance joint sealants for expansion joints',
      'Protective coatings for concrete structures',
      'Crack repair and prevention systems',
      'Waterproofing solutions for bridges and tunnels'
    ],
    relatedProjects: [
      'Mumbai-Nagpur Expressway',
      'Delhi-Mumbai Expressway',
      'Bandra-Worli Sea Link Maintenance'
    ]
  }
};

export function IndustryDetailPage() {
  const params = useParams();
  const industryId = params.industryId || 1;
  const industry = industryData[industryId] || industryData[1];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 mb-12">
        <ImageWithFallback
          src={industry.heroImage}
          alt={industry.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">{industry.name}</h1>
            <p className="text-xl text-gray-200">
              Specialized engineering protection solutions
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{industry.overview}</p>
        </motion.section>

        {/* Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertCircle className="w-8 h-8 text-[#7C1823]" />
            Key Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.challenges.map((challenge: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{challenge}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-[#7C1823]" />
            AR Laminators Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.solutions.map((solution: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#F5F0E8] p-4 rounded-lg border border-[#C8CBCE]"
              >
                <CheckCircle className="w-5 h-5 text-[#7C1823] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{solution}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Projects</h2>
          <div className="space-y-3">
            {industry.relatedProjects.map((project: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-[#7C1823] transition-colors cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 text-[#7C1823]" />
                <span className="text-gray-800 font-medium">{project}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}