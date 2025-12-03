import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { serviceCategories } from '@/data/services';

// Define the treatments for each category with bilingual support
const categoryTreatments = {
  'injectable-face': {
    treatments: [
      { en: 'Hyaluronic Acid Fillers', el: 'Fillers Υαλουρονικού Οξέος' },
      { en: 'Botox / Anti-Wrinkle', el: 'Botox / Αντιρυτιδική' },
      { en: 'Skin Boosters', el: 'Skin Boosters' },
      { en: 'Facial Mesotherapy', el: 'Μεσοθεραπεία Προσώπου' },
      { en: 'NanoSoft Eye Mesotherapy', el: 'NanoSoft Μεσοθεραπεία Ματιών' },
      { en: 'Filler Dissolving', el: 'Διάλυση Fillers' },
      { en: 'Facial Lipolysis', el: 'Λιπόλυση Προσώπου' },
      { en: 'Facial Tightening', el: 'Σύσφιξη Προσώπου' },
      { en: 'Lip Enhancement', el: 'Ενίσχυση Χειλιών' },
      { en: 'Jawline Contouring', el: 'Contouring Γνάθου' },
    ],
  },
  'skin-renewal': {
    treatments: [
      { en: 'SkinPen Microneedling', el: 'SkinPen Microneedling' },
      { en: 'Fractional Laser', el: 'Fractional Laser' },
      { en: 'Microneedling Face', el: 'Microneedling Προσώπου' },
      { en: 'Microneedling Scalp', el: 'Microneedling Τριχωτού' },
      { en: 'PRP Skin Rejuvenation', el: 'PRP Αναζωογόνηση Δέρματος' },
      { en: 'Chemical Peels', el: 'Χημικά Peelings' },
      { en: 'Skin Resurfacing', el: 'Ανάπλαση Δέρματος' },
      { en: 'Hand Rejuvenation', el: 'Αναζωογόνηση Χεριών' },
    ],
  },
  'body-treatments': {
    treatments: [
      { en: 'Laser Hair Removal', el: 'Αποτρίχωση Laser' },
      { en: 'Body Lipolysis', el: 'Λιπόλυση Σώματος' },
      { en: 'Cellulite Treatments', el: 'Θεραπείες Κυτταρίτιδας' },
      { en: 'Body Contouring', el: 'Σμίλευση Σώματος' },
      { en: 'Stretch Mark Treatment', el: 'Θεραπεία Ραγάδων' },
      { en: 'Skin Tightening', el: 'Σύσφιξη Δέρματος' },
    ],
  },
};

const Services = () => {
  const { t, language } = useLanguage();
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
      {/* Hero Header - Dark Banner */}
      <section className="bg-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-background tracking-wide">
              <span className="font-bold">{language === 'en' ? 'SERVICES' : 'ΥΠΗΡΕΣΙΕΣ'}</span>
              <span className="mx-3 text-secondary">/</span>
              <span className="font-light text-muted">{language === 'en' ? 'TREATMENTS' : 'ΘΕΡΑΠΕΙΕΣ'}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Service Category Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
            {serviceCategories.map((category, catIndex) => {
              const categoryData = categoryTreatments[category.id as keyof typeof categoryTreatments];
              const treatments = categoryData?.treatments || [];
              
              // Split treatments into two columns
              const midPoint = Math.ceil(treatments.length / 2);
              const leftColumn = treatments.slice(0, midPoint);
              const rightColumn = treatments.slice(midPoint);

              return (
                <article
                  key={category.id}
                  id={category.id}
                  className="bg-card rounded-2xl sm:rounded-3xl shadow-lg border border-border/30 overflow-hidden"
                  data-anim={catIndex % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Content Side */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16">
                      {/* Category Subtitle */}
                      <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">
                        {t(category.titleKey).split(' ').slice(-1)[0]}
                      </p>
                      
                      {/* Main Title */}
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
                        <span className="font-bold">{t(category.titleKey).split(' ').slice(0, -1).join(' ').toUpperCase()}</span>
                        {' '}
                        <span className="font-normal text-muted-foreground">
                          {t(category.titleKey).split(' ').slice(-1)[0].toUpperCase()}
                        </span>
                      </h2>

                      {/* Treatment Lists - Two Columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-3 sm:gap-y-4">
                        {/* Left Column */}
                        <ul className="space-y-2 sm:space-y-3">
                          {leftColumn.map((treatment, idx) => (
                            <li 
                              key={idx} 
                              className="text-foreground/80 text-sm sm:text-base lg:text-lg hover:text-primary transition-colors cursor-default"
                            >
                              {language === 'en' ? treatment.en : treatment.el}
                            </li>
                          ))}
                        </ul>
                        
                        {/* Right Column */}
                        <ul className="space-y-2 sm:space-y-3">
                          {rightColumn.map((treatment, idx) => (
                            <li 
                              key={idx} 
                              className="text-foreground/80 text-sm sm:text-base lg:text-lg hover:text-primary transition-colors cursor-default"
                            >
                              {language === 'en' ? treatment.en : treatment.el}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-2/5 xl:w-1/3 p-4 sm:p-6 lg:p-8">
                      <div 
                        className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[400px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary via-accent to-muted overflow-hidden"
                        aria-label={`${t(category.titleKey)} - ${language === 'en' ? 'Treatment image placeholder' : 'Εικόνα θεραπείας'}`}
                      >
                        {/* Placeholder with subtle pattern */}
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-primary/30 text-center p-4">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full border-2 border-primary/20 flex items-center justify-center">
                              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-primary/40">
                              {language === 'en' ? 'Image Coming Soon' : 'Εικόνα Σύντομα'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 gradient-warm">
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
