import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { serviceCategories } from '@/data/servicesData';
import CategoryBanner from '@/components/CategoryBanner';
import ServiceDetailCard from '@/components/ServiceDetailCard';
import { ArrowDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

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

const Services = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  useScrollReveal();

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

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-2 gap-y-8 sm:gap-4 justify-items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {allServices.map((service, index) => {
              const currentShapeClass = shapes[index % shapes.length];
              const currentImage = serviceImages[index] || hyaluronicFillers;

              return (
                <div 
                  key={service.id}
                  onClick={() => scrollToItem(service.id)}
                  className="group flex flex-col items-center cursor-pointer w-full"
                >
                  {/* Shape Container */}
                  <div className={cn(
                    "w-24 h-24 sm:w-28 sm:h-28 bg-white border border-border/60 shadow-soft flex items-center justify-center mb-3 transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-elegant group-hover:border-primary/40 relative overflow-hidden",
                    currentShapeClass
                  )}>
                     
                     {/* The Actual Image (Same as detail card) */}
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
        <div key={category.id} id={category.id}>
          {/* Category Header */}
          <CategoryBanner id={category.id} title={category.title} />
          
          <div className="bg-background py-8 sm:py-10 lg:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
                {/* Render each service in this category */}
                {category.services.map((service, serviceIndex) => {
                  // Find the global index to get the correct image
                  const globalIndex = allServices.findIndex(s => s.id === service.id);
                  const image = serviceImages[globalIndex] || hyaluronicFillers;

                  return (
                    <ServiceDetailCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      shortIntro={service.shortIntro}
                      longContent={service.longContent}
                      image={image}
                      index={categoryIndex * 10 + serviceIndex}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <section className="py-14 sm:py-18 lg:py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white mb-4 sm:mb-6">
              {t('cta.ready')}
            </h2>
            <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg">
              {t('cta.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
};

export default Services;