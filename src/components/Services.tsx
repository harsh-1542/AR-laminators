import { useRef } from 'react';
import { motion } from 'motion/react';
import { Construction, Droplets, Shield, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Magnet from './Magnet';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Construction,
    title: 'Pipeline Protection Services',
    description: 'Professional wrapping and coating solutions for underground pipelines ensuring long-term corrosion resistance.'
  },
  {
    icon: Droplets,
    title: 'Waterproofing Services',
    description: 'Advanced membrane application for roofs, basements, tunnels, and bridges.'
  },
  {
    icon: Shield,
    title: 'Corrosion Engineering',
    description: 'Specialized systems including 3LPE sleeves, heat-shrink sleeves, and industrial coatings.'
  },
  {
    icon: MapPin,
    title: 'On-Site Application Services',
    description: 'Pan-India project execution with experienced teams and technical supervision.'
  }
];

export function Services() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!leftPanelRef.current || !rightPanelRef.current) return;
    
    // Check if we're on desktop, GSAP pin the left panel based on right panel height
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: leftPanelRef.current,
        start: "top 128px", // Approx top-32 equivalent
        end: () => `+=${Math.max(0, rightPanelRef.current!.offsetHeight - leftPanelRef.current!.offsetHeight)}`,
        pin: true,
        invalidateOnRefresh: true,
      });
    });
    
    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-[#fafafa] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-semibold mb-2 tracking-wider" style={{ color: '#7C1823' }}>OUR SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Complete Application & Technical Support
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 relative mt-16">
          
          {/* GSAP Pinned Left Image Panel */}
          <div className="lg:w-5/12 hidden lg:block relative">
            <div ref={leftPanelRef} className="h-[calc(100vh-16rem)] min-h-[400px] flex items-center justify-center w-full">

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="w-full h-full rounded-[2rem] bg-white p-8 shadow-2xl border border-gray-100 flex items-center justify-center"
               >
                 <img 
                   src="/images/factory.png" 
                   alt="Services Overview" 
                   className="w-[80%] h-[80%] object-contain"
                   onError={(e) => {
                     // Fallback image processing if factory.png is missing or broken
                     e.currentTarget.src = "https://images.unsplash.com/photo-1542361345-89ce1dd3383a?q=80&w=800&auto=format&fit=crop";
                     e.currentTarget.className = "w-full h-full object-cover rounded-xl";
                   }}
                 />
               </motion.div>
            </div>
          </div>

          {/* Scrolling Steps Timeline */}
          <div ref={rightPanelRef} className="lg:w-7/12 relative pl-4 md:pl-12">
            {/* Soft vertical Timeline Line */}
            <div 
              className="absolute left-[24px] md:left-[48px] top-6 bottom-6 w-[2px]" 
              style={{ backgroundColor: '#7C1823', opacity: 0.15 }}
            ></div>

            <div className="space-y-12 pb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="relative pl-12 md:pl-16 group">
                     
                     {/* Number Circle Timeline Indicator */}
                     <div 
                       className="absolute left-[-19px] md:left-[-27px] top-6 w-14 h-14 rounded-full border-2 bg-[#fafafa] flex items-center justify-center z-10 transition-colors duration-300 group-hover:bg-[#7C1823]"
                       style={{ borderColor: '#7C1823' }}
                     >
                       <span className="font-bold text-[#7C1823] group-hover:text-white transition-colors duration-300 text-lg">
                         0{index + 1}
                       </span>
                     </div>

                     {/* Step Service Card */}
                     <motion.div
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}
                       viewport={{ once: true, margin: "-100px" }}
                       className="p-8 md:p-10 rounded-[1.5rem] transition-all duration-300 shadow-sm hover:shadow-xl border"
                       style={{ backgroundColor: '#F5F0E8', borderColor: 'rgba(124, 24, 35, 0.08)' }} 
                     >
                       <div className="flex items-center gap-4 mb-4">
                         <div className="p-3 bg-white rounded-xl shadow-sm">
                           <Icon className="w-8 h-8" style={{ color: '#7C1823' }} />
                         </div>
                         <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                       </div>
                       
                       <p className="text-gray-700 text-lg leading-relaxed pt-2">
                         {service.description}
                       </p>

                       <button
                         onClick={() => navigate('/contact')}
                         className="flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300 text-md mt-6"
                         style={{ color: '#7C1823' }}
                       >
                         Learn More
                         <ArrowRight className="w-5 h-5" />
                       </button>
                     </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        <div className="text-center mt-8 pb-12 relative z-10">
          <Magnet padding={50} disabled={false} magnetStrength={2}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => navigate('/contact')}
              className="px-10 py-4 text-lg rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-white"
              style={{ backgroundColor: '#7C1823' }}
            >
              Schedule a Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </Magnet>
        </div>
      </div>
    </section>
  );
}