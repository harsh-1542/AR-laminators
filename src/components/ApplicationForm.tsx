import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ApplicationFormProps {
  productName?: string;
  onClose: () => void;
}

export function ApplicationForm({ productName, onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productInterested: productName || '',
    applicationArea: '',
    projectSize: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
          style={{ backgroundColor: '#F5F0E8' }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
            style={{ color: '#7C1823' }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Form Content */}
          <div className="p-8">
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-black mb-2">Submit Application</h2>
                  <p className="text-black">Fill out the form below and our team will contact you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-black text-lg">Personal Details</h3>
                    
                    <div>
                      <label htmlFor="fullName" className="block text-black font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-black font-semibold mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-black font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-black font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-black text-lg">Project Details</h3>
                    
                    <div>
                      <label htmlFor="productInterested" className="block text-black font-semibold mb-2">
                        Product Interested *
                      </label>
                      <input
                        type="text"
                        id="productInterested"
                        name="productInterested"
                        required
                        value={formData.productInterested}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                        placeholder="Enter product name"
                      />
                    </div>

                    <div>
                      <label htmlFor="applicationArea" className="block text-black font-semibold mb-2">
                        Application Area *
                      </label>
                      <select
                        id="applicationArea"
                        name="applicationArea"
                        required
                        value={formData.applicationArea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                      >
                        <option value="">Select application area</option>
                        <option value="Roof">Roof</option>
                        <option value="Basement">Basement</option>
                        <option value="Pipeline">Pipeline</option>
                        <option value="Road">Road</option>
                        <option value="Tank">Tank</option>
                        <option value="Bridge">Bridge</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="projectSize" className="block text-black font-semibold mb-2">
                          Project Size *
                        </label>
                        <input
                          type="text"
                          id="projectSize"
                          name="projectSize"
                          required
                          value={formData.projectSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                          placeholder="e.g., 1000 Sq.M or 500 M"
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-black font-semibold mb-2">
                          Location *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-black font-semibold mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{ borderColor: '#C8CBCE', backgroundColor: 'white' }}
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
                    style={{ backgroundColor: '#7C1823' }}
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <CheckCircle className="w-24 h-24 mx-auto mb-6" style={{ color: '#7C1823' }} />
                </motion.div>
                <h3 className="text-3xl font-bold text-black mb-4">Application Submitted!</h3>
                <p className="text-black text-lg">
                  Thank you for your interest. Our team will contact you shortly.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
