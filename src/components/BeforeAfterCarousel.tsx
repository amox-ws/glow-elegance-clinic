import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

// Placeholder images - will be replaced later
const beforeAfterImages = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160391-2b7f0c0c0a1f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160398-4a7d1b1b5c4c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160401-7c4b6e8e6f6f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160402-9c9c9c9c9c9c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160403-1a1a1a1a1a1a?w=800&h=600&fit=crop',
];

const BeforeAfterCarousel = () => {
  const { t } = useLanguage();
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-cream-lightest/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-foreground mb-4">
          {t('sections.beforeAfters')}
        </h2>
        <div className="w-20 h-1 gradient-warm mx-auto mb-12" />

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {beforeAfterImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-soft transition-all duration-500 hover:shadow-elegant hover:-translate-y-2">
                    <div className="aspect-[4/3] bg-muted">
                      <img
                        src={image}
                        alt={`${t('sections.beforeAfters')} ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-0 -translate-x-12 bg-background/90 hover:bg-background border-border"
            aria-label="Previous slide"
          />
          <CarouselNext
            className="right-0 translate-x-12 bg-background/90 hover:bg-background border-border"
            aria-label="Next slide"
          />
        </Carousel>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Carousel navigation">
          {beforeAfterImages.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-selected={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
