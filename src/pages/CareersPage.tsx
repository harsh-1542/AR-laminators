import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, MapPin, Clock, Upload } from 'lucide-react';

const openings = [
  {
    id: 1,
    title: 'Senior Chemical Engineer',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Lead product development and quality assurance for construction chemicals'
  },
  {
    id: 2,
    title: 'Sales Manager - Government Projects',
    location: 'Delhi',
    type: 'Full-time',
    experience: '7-10 years',
    description: 'Manage relationships with government agencies and PSUs for infrastructure projects'
  },
  {
    id: 3,
    title: 'Quality Control Specialist',
    location: 'Pune',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Ensure product quality through testing and compliance verification'
  },
  {
    id: 4,
    title: 'Technical Service Engineer',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Provide on-site technical support and application guidance to clients'
  },
  {
    id: 5,
    title: 'R&D Scientist',
    location: 'Delhi',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Develop innovative solutions and conduct research for new product formulations'
  },
  {
    id: 6,
    title: 'Production Manager',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '8-12 years',
    description: 'Oversee manufacturing operations and ensure production efficiency'
  }
];

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 mb-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc3MDU2MjEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Careers at AR Laminators"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">Careers at AR Laminators</h1>
            <p className="text-xl text-gray-200">
              Join our team and build India's infrastructure future
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Life at AR Laminators */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Life at AR Laminators</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                At AR Laminators, we believe in fostering a culture of innovation, excellence, and collaboration. Our team of dedicated professionals works on projects that shape India's infrastructure landscape.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                We offer competitive compensation, comprehensive benefits, continuous learning opportunities, and a supportive work environment that values work-life balance.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Join us to be part of a legacy of engineering excellence spanning over 85 years, contributing to nation-building while growing your career.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764675902997-56502dddd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MDQ2MjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team at work"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc3MDU2MjEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation"
                className="w-full h-56 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </motion.section>

        {/* Current Openings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Current Openings</h2>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#7C1823] hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#7C1823]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7C1823]" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#7C1823]" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#7C1823] text-white px-6 py-3 rounded hover:bg-[#5C1119] transition-colors font-medium whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for a Position</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below to submit your application. We'll review your profile and get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7C1823]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7C1823]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7C1823]"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Position Applied For *
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7C1823]"
                >
                  <option value="">Select a position</option>
                  {openings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Resume *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#7C1823] transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#7C1823] text-white px-8 py-3 rounded hover:bg-[#5C1119] transition-colors font-medium"
            >
              Submit Application
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}