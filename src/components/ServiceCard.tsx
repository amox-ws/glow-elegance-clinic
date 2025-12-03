import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  titleKey: string;
  descKey: string;
  categoryId: string;
  serviceId: string;
  areas?: { en: string; el: string }[];
  types?: { en: string; el: string }[];
  variant?: 'preview' | 'full';
}

const ServiceCard = ({
  titleKey,
  descKey,
  categoryId,
  serviceId,
  areas,
  types,
  variant = 'full',
}: ServiceCardProps) => {
  const { t, language } = useLanguage();

  const items = areas || types;

  if (variant === 'preview') {
    return (
      <Link to={`/services#${categoryId}`}>
        <Card
          data-anim="auto"
          className="p-6 h-full border-border bg-card shadow-soft hover:shadow-elegant transition-all duration-500 group cursor-pointer hover:-translate-y-1"
        >
          <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
            {t(titleKey)}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {t(descKey)}
          </p>
          <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
            {t('services.learnMore')}
            <ChevronRight className="h-4 w-4 ml-1" />
          </span>
        </Card>
      </Link>
    );
  }

  return (
    <Card
      id={serviceId}
      data-anim="auto"
      className="p-6 border-border bg-card shadow-soft hover:shadow-elegant transition-all duration-500 group"
    >
      <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {t(titleKey)}
      </h3>
      <p className="text-muted-foreground mb-4">
        {t(descKey)}
      </p>
      {items && items.length > 0 && (
        <div className="space-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                {language === 'el' ? item.el : item.en}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ServiceCard;
