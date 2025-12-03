import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { serviceCategories } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();
  useScrollReveal();

  // Handle scroll to category from hash
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-cream py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 ${catIndex % 2 === 0 ? 'bg-background' : 'gradient-cream'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="mb-10" data-anim="up">
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-3">
                  {t(category.titleKey)}
                </h2>
                <div className="w-20 h-1 gradient-warm rounded-full" />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
                {category.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    titleKey={service.titleKey}
                    descKey={service.descKey}
                    categoryId={category.id}
                    serviceId={service.id}
                    areas={service.areas}
                    types={service.types}
                    variant="full"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-6">
              {t('cta.ready')}
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              {t('cta.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
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
