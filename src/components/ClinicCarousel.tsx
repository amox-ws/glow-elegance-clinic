import { useLanguage } from '@/contexts/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Define the Interface
interface ClinicCarouselProps {
  images?: string[]; // Define the optional images prop
}

// 2. Accept the prop in the component function
const ClinicCarousel = ({ images }: ClinicCarouselProps) => {
  const { t } = useLanguage();
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Fallback images if none are provided
  const defaultImages = [
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80',
      alt: t('clinic.image.alt') + ' 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop&q=80',
      alt: t('clinic.image.alt') + ' 2',
    },
  ];

  // 3. Use the passed images array if it exists, otherwise use default
  const displayImages = images && images.length > 0 
    ? images.map((src, index) => ({
        src,
        alt: `${t('clinic.image.alt')} ${index + 1}`
      }))
    : defaultImages;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-anim="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-4 uppercase tracking-wider">
            {t('clinic.title.prefix')} <span className="italic font-normal">{t('clinic.title.highlight')}</span> {t('clinic.title.suffix')}
          </h2>
          <div className="w-20 h-1 gradient-warm mx-auto" />
        </div>

        <div className="relative max-w-6xl mx-auto" data-anim="up">
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-elegant">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-foreground hover:bg-white transition-all duration-300 z-10"
            aria-label={t('clinic.prev')}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-foreground hover:bg-white transition-all duration-300 z-10"
            aria-label={t('clinic.next')}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClinicCarousel;