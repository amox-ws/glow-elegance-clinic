import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { serviceCategories } from '@/data/servicesData';
import CategoryBanner from '@/components/CategoryBanner';
import ServiceDetailCard from '@/components/ServiceDetailCard';

const Services = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  useScrollReveal();

  // Handle scroll to category or service from hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Page Header - Light Background */}
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

      {/* Service Categories with Individual Cards */}
      {serviceCategories.map((category, categoryIndex) => (
        <div key={category.id}>
          {/* Dark Category Banner */}
          <CategoryBanner id={category.id} title={category.title} />
          
          {/* Service Cards for this Category */}
          <div className="bg-background py-8 sm:py-10 lg:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:space-y-8">
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
