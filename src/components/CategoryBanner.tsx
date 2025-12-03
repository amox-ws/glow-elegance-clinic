import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryBannerProps {
  id: string;
  title: { en: string; el: string };
}

const CategoryBanner = ({ id, title }: CategoryBannerProps) => {
  const { language } = useLanguage();

  return (
    <div 
      id={id}
      className="w-full bg-foreground py-10 sm:py-14 lg:py-16 scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-background tracking-wide uppercase">
          {language === 'en' ? title.en : title.el}
        </h2>
      </div>
    </div>
  );
};

export default CategoryBanner;
