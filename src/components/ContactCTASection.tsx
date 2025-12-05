import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Βεβαιώσου ότι έχεις βάλει το ball.png στον φάκελο assets!
import ballImage from '@/assets/ball.png'; 

const ContactCTASection = () => {
  const { t } = useLanguage();
  
  // Animation hook για το περιεχόμενο (Κείμενο & Κουμπί)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 gradient-warm relative overflow-hidden">
      
      {/* Decorative Ball Image - Positioned Absolute Right */}
      {/* Χρησιμοποιούμε mix-blend-overlay ή soft-light για να δέσει με το φόντο, 
          ή αφαιρούμε το mix-blend αν θέλουμε να φαίνεται solid */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 pointer-events-none select-none opacity-90 z-0"
        style={{
            transform: 'translate(20%, -50%)' // Το μετακινούμε λίγο δεξιά για να φαίνεται μισό
        }}
      >
        <img 
          src={ballImage} 
          alt="" 
          className="w-full h-full object-contain animate-float-slow"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className="text-center max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-6 drop-shadow-sm">
            {t('cta.ready')}
          </h2>
          <p className="text-white/90 mb-8 text-lg drop-shadow-sm">
            {t('cta.description')}
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-transform hover:scale-105 duration-300 border-none"
            >
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;