import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDetailCardProps {
  id: string;
  title: { en: string; el: string };
  shortIntro: { en: string; el: string };
  longContent: { en: string; el: string };
  image: string; // Added this prop
  index: number;
}

const ServiceDetailCard = ({ id, title, shortIntro, longContent, image, index }: ServiceDetailCardProps) => {
  const { language } = useLanguage();

  return (
    <article 
      id={id}
      className="bg-card rounded-2xl border border-border/40 shadow-soft overflow-hidden scroll-mt-32"
      data-anim={index % 2 === 0 ? 'left' : 'right'}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Top on mobile, Right on desktop */}
        <div className="lg:w-2/5 xl:w-[40%] p-4 sm:p-5 lg:p-6 order-1 lg:order-2">
          <div 
            className="w-full aspect-[4/3] lg:aspect-square lg:h-full rounded-xl bg-gradient-to-br from-muted via-secondary/30 to-accent/20 overflow-hidden relative"
            role="img"
            aria-label={`${language === 'en' ? title.en : title.el}`}
          >
            {/* Display the passed image */}
            <img 
              src={image} 
              alt={language === 'en' ? title.en : title.el}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content - Below on mobile, Left on desktop */}
        <div className="flex-1 p-5 sm:p-6 lg:p-8 xl:p-10 order-2 lg:order-1">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl lg:text-2xl font-heading font-semibold text-foreground mb-2 sm:mb-3">
            {language === 'en' ? title.en : title.el}
          </h3>
          
          {/* Short Intro */}
          <p className="text-primary font-medium text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
            {language === 'en' ? shortIntro.en : shortIntro.el}
          </p>
          
          {/* Long Content */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {language === 'en' ? longContent.en : longContent.el}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ServiceDetailCard;