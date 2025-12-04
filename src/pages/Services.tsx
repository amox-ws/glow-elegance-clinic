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

const Services = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  useScrollReveal();

  // 1. Flatten the categories to get a single list of ALL 16 services
  const allServices = serviceCategories.flatMap(category => category.services);

  // 2. Harmonious Shape Pattern (Sequence of 8)
  // This creates a balanced rhythm: Circle -> Box -> Arch -> Leaf -> Box -> U-Shape -> Circle -> Leaf
  const shapes = [
    "rounded-full",                                                      // 1. Circle
    "rounded-[2.5rem]",                                                  // 2. Soft Squircle
    "rounded-t-[3.5rem] rounded-b-[1rem]",                               // 3. Arch
    "rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[1rem] rounded-br-[1rem]", // 4. Leaf (Right-Up)
    "rounded-[2.5rem]",                                                  // 5. Soft Squircle
    "rounded-b-[3.5rem] rounded-t-[1rem]",                               // 6. U-Shape (Inverted Arch)
    "rounded-full",                                                      // 7. Circle
    "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-[1rem] rounded-bl-[1rem]", // 8. Leaf (Left-Up)
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

          {/* Grid Update:
             - lg:grid-cols-8 -> Ensures exactly 8 items per row on large screens (2 rows total for 16 items).
             - gap-4 -> "Closer together" (reduced from gap-8).
          */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-2 gap-y-8 sm:gap-4 justify-items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {allServices.map((service, index) => {
              // Apply the shape pattern (cycling through the 8 harmonious shapes)
              const currentShapeClass = shapes[index % shapes.length];

              return (
                <div 
                  key={service.id}
                  onClick={() => scrollToItem(service.id)}
                  className="group flex flex-col items-center cursor-pointer w-full"
                >
                  {/* Shape Container 
                     - Increased size to w-28 h-28 sm:w-32 sm:h-32 (approx 128px) for "Bigger buttons"
                     - Applies the harmonious shape class
                  */}
                  <div className={cn(
                    "w-24 h-24 sm:w-28 sm:h-28 bg-white border border-border/60 shadow-soft flex items-center justify-center mb-3 transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-elegant group-hover:border-primary/40 relative overflow-hidden",
                    currentShapeClass
                  )}>
                     
                     {/* Gradient Hover Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     {/* Placeholder Icon (Sparkles) 
                         NOTE: Ideally, replace <Sparkles> with <img src={service.image} /> when you have icons for each service.
                     */}
                     <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary/40 group-hover:text-primary transition-colors duration-500" />
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
                {category.services.map((service, serviceIndex) => (
                  <ServiceDetailCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    shortIntro={service.shortIntro}
                    longContent={service.longContent}
                    index={categoryIndex * 10 + serviceIndex}
                  />
                ))}
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
    </div>
  );
};

export default Services;