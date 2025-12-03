import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDetailCardProps {
  id: string;
  title: { en: string; el: string };
  shortIntro: { en: string; el: string };
  longContent: { en: string; el: string };
  index: number;
}

const ServiceDetailCard = ({ id, title, shortIntro, longContent, index }: ServiceDetailCardProps) => {
  const { language } = useLanguage();

  return (
    <article 
      id={id}
      className="bg-card rounded-2xl border border-border/40 shadow-soft overflow-hidden scroll-mt-32"
      data-anim={index % 2 === 0 ? 'left' : 'right'}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Placeholder - Top on mobile, Right on desktop */}
        <div className="lg:w-2/5 xl:w-[40%] p-4 sm:p-5 lg:p-6 order-1 lg:order-2">
          <div 
            className="w-full aspect-[4/3] lg:aspect-square lg:h-full rounded-xl bg-gradient-to-br from-muted via-secondary/30 to-accent/20 overflow-hidden"
            role="img"
            aria-label={`${language === 'en' ? title.en : title.el} - ${language === 'en' ? 'Treatment image' : 'Εικόνα θεραπείας'}`}
          >
            <div className="w-full h-full flex items-center justify-center min-h-[200px] lg:min-h-[280px]">
              <div className="text-center p-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background/50">
                  <svg 
                    className="w-7 h-7 sm:w-8 sm:h-8 text-primary/40" 
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
                <span className="text-xs font-medium text-primary/50">
                  {language === 'en' ? 'Image Coming Soon' : 'Εικόνα Σύντομα'}
                </span>
              </div>
            </div>
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
