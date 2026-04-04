import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Calendar, FileText } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'AR Laminators Secures Major Contract for Delhi-Mumbai Expressway',
    date: '2024-01-15',
    category: 'Press Release',
    image: 'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Leading infrastructure chemicals company to supply road surfacing solutions for India\'s longest expressway project...'
  },
  {
    id: 2,
    title: 'New R&D Center Inaugurated in Bangalore',
    date: '2023-11-20',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'State-of-the-art research facility to focus on sustainable construction materials and innovative protection solutions...'
  },
  {
    id: 3,
    title: 'AR Laminators Wins Excellence Award for Metro Rail Project',
    date: '2023-09-10',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1716090570927-7655d871d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWx3YXklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Recognized by DMRC for exceptional quality and timely delivery of waterproofing solutions for underground stations...'
  },
  {
    id: 4,
    title: 'Sustainable Solutions: New Eco-Friendly Product Line Launched',
    date: '2023-07-05',
    category: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1756742878998-9d8cd5360a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2R1Y3Rpb24lMjBwbGFudHxlbnwxfHx8fDE3NzA1NjIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'New range of environmentally friendly construction chemicals meets international sustainability standards...'
  },
  {
    id: 5,
    title: 'Partnership with Indian Railways for Bridge Protection',
    date: '2023-05-18',
    category: 'Press Release',
    image: 'https://images.unsplash.com/photo-1768224278470-2ff4ff9196cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMHByb2plY3R8ZW58MXx8fHwxNzcwNTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Multi-year agreement to provide corrosion protection systems for railway bridges across India...'
  },
  {
    id: 6,
    title: 'AR Laminators Celebrates 85 Years of Excellence',
    date: '2023-03-12',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc3MDU2MjEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Milestone celebration honoring legacy of engineering excellence and commitment to infrastructure development...'
  }
];

const events = [
  {
    title: 'Annual Safety Week',
    date: '2024-02-10',
    image: 'https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Technical Training Workshop for Engineers',
    date: '2023-12-05',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc3MDU2MjEyMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Infrastructure Summit 2023',
    date: '2023-10-20',
    image: 'https://images.unsplash.com/photo-1708358121090-55d0faf76d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjBJbmRpYXxlbnwxfHx8fDE3NzA1NTk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Product Demonstration Day',
    date: '2023-08-15',
    image: 'https://images.unsplash.com/photo-1756742878998-9d8cd5360a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHByb2R1Y3Rpb24lMjBwbGFudHxlbnwxfHx8fDE3NzA1NjIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function MediaPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section 
        className="py-32 relative bg-cover bg-center mb-12" 
        style={{ 
          backgroundImage: 'url(/images/mediapage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'Montserrat, sans-serif' 
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
              Media & News
            </h1>
            <p className="text-xl md:text-2xl" style={{ color: '#F5F0E8' }}>
              Latest updates, press releases, and news about AR Laminators
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">

        {/* News Articles */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">Social Media Post</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#7C1823] text-white px-3 py-1 rounded text-sm font-semibold">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <button className="text-[#7C1823] font-semibold hover:gap-2 transition-all flex items-center gap-1">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Events Gallery */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">Events Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <h3 className="font-bold">{event.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}