import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

// Service category data with bilingual content
const serviceCategories = [
  {
    id: 'injectable-face',
    boxTitle: {
      en: { bold: 'INJECTABLE', light: 'FACIAL TREATMENTS' },
      el: { bold: 'ΕΝΕΣΙΜΕΣ', light: 'ΘΕΡΑΠΕΙΕΣ ΠΡΟΣΩΠΟΥ' }
    },
    treatments: [
      { en: 'Hyaluronic Acid Fillers', el: 'Υαλουρονικό Οξύ – Fillers' },
      { en: 'Botox / Anti-Wrinkle', el: 'Botox – Αντιρυτιδική Αγωγή' },
      { en: 'Skin Boosters', el: 'Skin Boosters' },
      { en: 'Facial Mesotherapy', el: 'Μεσοθεραπείες Προσώπου' },
      { en: 'NanoSoft Eye Mesotherapy', el: 'Μεσοθεραπεία Ματιών NanoSoft' },
      { en: 'Filler Dissolving', el: 'Διάλυση Υαλουρονικού Οξέως' },
      { en: 'Facial Lipolysis', el: 'Λιποδιάλυση Προσώπου' },
      { en: 'Submental Fat Lipolysis', el: 'Λιποδιάλυση υπογενείδιου λίπους' },
      { en: 'Facial Tightening', el: 'Σύσφιξη Προσώπου' },
      { en: 'Lip Enhancement', el: 'Ενίσχυση Χειλιών' },
      { en: 'Jawline Contouring', el: 'Contouring Γνάθου' },
    ],
  },
  {
    id: 'skin-renewal',
    boxTitle: {
      en: { bold: 'SKIN REJUVENATION', light: '& HYDRATION THERAPIES' },
      el: { bold: 'ΘΕΡΑΠΕΙΕΣ ΑΝΑΝΕΩΣΗΣ', light: '& ΕΝΥΔΑΤΩΣΗΣ' }
    },
    treatments: [
      { en: 'SkinPen Microneedling', el: 'SkinPen – Μικροβελόνες' },
      { en: 'Fractional Laser', el: 'Fractional Laser' },
      { en: 'Microneedling Face', el: 'Micro-needling Προσώπου' },
      { en: 'Microneedling Scalp', el: 'Micro-needling Τριχωτού' },
      { en: 'PRP Skin Rejuvenation', el: 'PRP Αναζωογόνηση Δέρματος' },
      { en: 'Chemical Peels', el: 'Χημικά Peelings' },
      { en: 'Skin Resurfacing', el: 'Ανάπλαση Δέρματος' },
      { en: 'Hand Rejuvenation', el: 'Αναζωογόνηση Χεριών' },
    ],
  },
  {
    id: 'body-treatments',
    boxTitle: {
      en: { bold: 'BODY', light: 'TREATMENTS' },
      el: { bold: 'ΥΠΗΡΕΣΙΕΣ', light: 'ΣΩΜΑΤΟΣ' }
    },
    treatments: [
      { en: 'Laser Hair Removal', el: 'Laser Αποτρίχωση Σώματος' },
      { en: 'Body Lipolysis', el: 'Λιποδιάλυση Σώματος' },
      { en: 'Cellulite Treatments', el: 'Θεραπείες Κυτταρίτιδας' },
      { en: 'Body Contouring', el: 'Σμίλευση Σώματος' },
      { en: 'Stretch Mark Treatment', el: 'Θεραπεία Ραγάδων' },
      { en: 'Skin Tightening', el: 'Σύσφιξη Δέρματος' },
    ],
  },
];

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
    <div className="min-h-screen pt-20 bg-background">
      {/* Page Header - Light Background */}
      <section className="bg-secondary/30 py-12 sm:py-16 lg:py-20">
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

      {/* Service Categories */}
      <div className="bg-background py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-14 lg:space-y-20">
            {serviceCategories.map((category, index) => {
              const boxTitle = category.boxTitle[language as 'en' | 'el'];
              
              // Split treatments into two columns
              const midPoint = Math.ceil(category.treatments.length / 2);
              const leftColumn = category.treatments.slice(0, midPoint);
              const rightColumn = category.treatments.slice(midPoint);

              return (
                <section key={category.id} id={category.id} className="scroll-mt-24">
                  {/* Content Box - Light Card */}
                  <article 
                    className="bg-card rounded-2xl sm:rounded-3xl border border-border/40 shadow-soft overflow-hidden"
                    data-anim={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Text Content - Left Side */}
                      <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16 order-2 lg:order-1">
                        {/* Box Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-8 sm:mb-10 lg:mb-12">
                          <span className="font-bold">{boxTitle.bold}</span>
                          {' '}
                          <span className="font-normal text-muted-foreground">{boxTitle.light}</span>
                        </h2>

                        {/* Treatment Lists - Two Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-3 sm:gap-y-4">
                          {/* Left Column */}
                          <ul className="space-y-3 sm:space-y-4">
                            {leftColumn.map((treatment, idx) => (
                              <li 
                                key={idx} 
                                className="text-foreground/80 text-sm sm:text-base lg:text-lg hover:text-primary transition-colors duration-300 cursor-default"
                              >
                                {language === 'en' ? treatment.en : treatment.el}
                              </li>
                            ))}
                          </ul>
                          
                          {/* Right Column */}
                          <ul className="space-y-3 sm:space-y-4">
                            {rightColumn.map((treatment, idx) => (
                              <li 
                                key={idx} 
                                className="text-foreground/80 text-sm sm:text-base lg:text-lg hover:text-primary transition-colors duration-300 cursor-default"
                              >
                                {language === 'en' ? treatment.en : treatment.el}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Image Placeholder - Right Side */}
                      <div className="lg:w-2/5 xl:w-[45%] p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
                        <div 
                          className="w-full h-64 sm:h-80 lg:h-full min-h-[280px] lg:min-h-[380px] rounded-lg sm:rounded-xl bg-gradient-to-br from-muted via-secondary/30 to-accent/20 overflow-hidden"
                          role="img"
                          aria-label={`${boxTitle.bold} ${boxTitle.light} - ${language === 'en' ? 'Treatment image' : 'Εικόνα θεραπείας'}`}
                        >
                          {/* Placeholder content */}
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background/50">
                                <svg 
                                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary/40" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={1.5} 
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                  />
                                </svg>
                              </div>
                              <span className="text-xs sm:text-sm font-medium text-primary/50">
                                {language === 'en' ? 'Image Coming Soon' : 'Εικόνα Σύντομα'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </section>
              );
            })}
          </div>
        </div>
      </div>

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
