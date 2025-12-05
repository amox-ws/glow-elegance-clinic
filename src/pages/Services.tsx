import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/use-scroll-reveal'; // Keeping this for header fade-in
import { useScrollAnimation } from '@/hooks/useScrollAnimation'; // Import custom hook for slide-up
import { serviceCategories } from '@/data/servicesData';
import CategoryBanner from '@/components/CategoryBanner';
import ServiceDetailCard from '@/components/ServiceDetailCard';
import { ArrowDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import ContactCTASection from '@/components/ContactCTASection';

// --- SERVICE IMAGE IMPORTS ---
// 1. Injectable Facial Treatments
import hyaluronicFillers from '@/assets/services/Hyaluronic_Acid_Fillers.jpeg';
import botox from '@/assets/services/Botox_Anti_wrinkle_Treatment.jpeg';
import skinBoosters from '@/assets/services/Skin_Boosters.jpeg';
import facialMesotherapy from '@/assets/services/Facial_Mesotherapy.jpeg';
import nanosoftEye from '@/assets/services/NanoSoft_Eye_Mesotherapy.jpeg';
import fillerDissolving from '@/assets/services/Hyaluronic_Acid_Dissolving.jpeg';
import facialLipolysis from '@/assets/services/Facial_Lipolysis.jpeg';
import submentalLipolysis from '@/assets/services/Submental_Lipolysis.jpeg';
import facialTightening from '@/assets/services/Facial_Tightening.jpeg';

// 2. Skin Renewal
import skinpen from '@/assets/services/SkinPen.jpeg';
import fractionalLaser from '@/assets/services/Fractional_Laser.jpeg';
import microneedlingFace from '@/assets/services/Micro_needling.jpeg';
import microneedlingScalp from '@/assets/services/Scalp_Microneedling.jpeg';

// 3. Body Services
import laserHairRemoval from '@/assets/services/Body_Laser_Hair_Removal.jpeg';
import bodyLipolysis from '@/assets/services/Body_Lipolysis.jpeg';
import celluliteTreatments from '@/assets/services/Cellulite_Treatments.jpeg';

// --- HELPER COMPONENT FOR ANIMATION ---
// This handles the "Appear from bottom without fade" effect
const SlideUpReveal = ({ 
  children, 
  className, 
  id,
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      id={id}
      className={cn("overflow-hidden", className)} // Masking the content
    >
      <div
        style={{
          // Slide from 150px down to 0. No opacity change (always 1).
          transform: isVisible ? "translateY(0)" : "translateY(150px)",
          transition: `transform 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  useScrollReveal(); // Keeps the header title fade-in

  // 1. Flatten the categories to get a single list of ALL 16 services
  const allServices = serviceCategories.flatMap(category => category.services);

  // 2. Map images strictly to the order of services in 'serviceCategories'
  const serviceImages = [
    // --- Injectables ---
    hyaluronicFillers,    // 1. Hyaluronic
    botox,                // 2. Botox
    skinBoosters,         // 3. Skin Boosters
    facialMesotherapy,    // 4. Mesotherapy
    nanosoftEye,          // 5. NanoSoft
    fillerDissolving,     // 6. Dissolving
    facialLipolysis,      // 7. Facial Lipolysis
    submentalLipolysis,   // 8. Submental Lipolysis
    facialTightening,     // 9. Tightening
    // --- Renewal ---
    skinpen,              // 10. SkinPen
    fractionalLaser,      // 11. Fractional Laser
    microneedlingFace,    // 12. Microneedling Face
    microneedlingScalp,   // 13. Microneedling Scalp
    // --- Body ---
    laserHairRemoval,     // 14. Laser Hair
    bodyLipolysis,        // 15. Body Lipolysis
    celluliteTreatments,  // 16. Cellulite
  ];

  // 3. Harmonious Shape Pattern (Sequence of 8)
  const shapes = [
    "rounded-full",                                                             
    "rounded-[2.5rem]",                                                         
    "rounded-t-[3.5rem] rounded-b-[1rem]",                                        
    "rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[1rem] rounded-br-[1rem]", 
    "rounded-[2.5rem]",                                                         
    "rounded-b-[3.5rem] rounded-t-[1rem]",                                        
    "rounded-full",                                                             
    "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-[1rem] rounded-bl-[1rem]", 
  ];

  // Helper function for smooth scrolling
  const scrollToItem = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handle scroll from external links (hash)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToItem(id);
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Page Header */}
      <section className="bg-secondary/30 py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-wide">
              <span className="font-bold">{language === 'en' ? 'SERVICES' : 'ΥΠΗΡΕΣΙΕΣ'}</span>
              <span className="mx-3 text-primary/40">/</span>
              <span className="font-light text-muted-foreground">{language === 'en' ? 'TREATMENTS' : 'ΘΕΡΑΠΕΙΕΣ'}</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty.'
                : 'Ανακαλύψτε την ολοκληρωμένη γκάμα αισθητικών θεραπειών μας, σχεδιασμένες να αναδείξουν τη φυσική σας ομορφιά.'}
            </p>
          </div>
        </div>
      </section>

      {/* --- QUICK NAVIGATION GRID (Harmonious Layout) --- */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
          <div className="text-center mb-10">
             <h3 className="text-xl font-heading font-medium text-foreground">
                {language === 'en' ? 'Select a Treatment' : 'Επιλέξτε Θεραπεία'}
             </h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-2 gap-y-8 sm:gap-4 justify-items-center">
            {allServices.map((service, index) => {
              const currentShapeClass = shapes[index % shapes.length];
              const currentImage = serviceImages[index] || hyaluronicFillers;

              return (
                <SlideUpReveal 
                  key={service.id} 
                  className="w-full flex justify-center"
                  delay={index * 50} // Stagger effect for the grid items
                >
                  <div 
                    onClick={() => scrollToItem(service.id)}
                    className="group flex flex-col items-center cursor-pointer w-full"
                  >
                    {/* Shape Container */}
                    <div className={cn(
                      "w-24 h-24 sm:w-28 sm:h-28 bg-white border border-border/60 shadow-soft flex items-center justify-center mb-3 transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-elegant group-hover:border-primary/40 relative overflow-hidden",
                      currentShapeClass
                    )}>
                        
                        {/* The Actual Image */}
                        <img 
                          src={currentImage} 
                          alt={language === 'en' ? service.title.en : service.title.el}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>

                    {/* Service Label */}
                    <span className="text-[10px] sm:text-xs font-bold text-center text-muted-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-wide leading-tight px-1 max-w-[120px] line-clamp-2">
                      {language === 'en' ? service.title.en : service.title.el}
                    </span>
                  </div>
                </SlideUpReveal>
              );
            })}
          </div>
          
          <div className="flex justify-center mt-12 opacity-20 hover:opacity-50 transition-opacity">
             <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Service Detail Cards List */}
      {serviceCategories.map((category, categoryIndex) => (
        <div key={category.id}>
          {/* Category Header - Slide Up Animation */}
          <SlideUpReveal id={category.id} className="scroll-mt-24">
            <CategoryBanner id={`${category.id}-banner`} title={category.title} />
          </SlideUpReveal>
          
          <div className="bg-background py-8 sm:py-10 lg:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
                {/* Render each service in this category */}
                {category.services.map((service, serviceIndex) => {
                  // Find the global index to get the correct image
                  const globalIndex = allServices.findIndex(s => s.id === service.id);
                  const image = serviceImages[globalIndex] || hyaluronicFillers;

                  return (
                    <SlideUpReveal key={service.id} id={service.id} className="scroll-mt-32">
                      <ServiceDetailCard
                        id={`${service.id}-content`} // Avoid duplicate IDs, wrapper handles navigation
                        title={service.title}
                        shortIntro={service.shortIntro}
                        longContent={service.longContent}
                        image={image}
                        index={categoryIndex * 10 + serviceIndex}
                      />
                    </SlideUpReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <ContactCTASection />

      <ScrollToTopButton />
    </div>
  );
};

export default Services;