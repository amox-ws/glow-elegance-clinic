import { useLanguage } from '@/contexts/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation'; // Import animation hook

interface ClientShortsCarouselProps {
  images?: string[];
}

const ClientShortsCarousel = ({ images }: ClientShortsCarouselProps) => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: carouselRef, isVisible: isCarouselVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const defaultItems = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop&q=80' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=600&fit=crop&q=80' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=600&fit=crop&q=80' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&q=80' },
  ];

  const videoItems = images && images.length > 0
    ? images.map((img, index) => ({
        id: index,
        thumbnail: img
      }))
    : defaultItems;

  return (
    <section className="py-20 bg-background overflow-hidden" aria-labelledby="clients-shorts-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title: Fly in from RIGHT */}
        <div ref={titleRef}>
            <div 
                className="text-center mb-12"
                style={{
                    opacity: isTitleVisible ? 1 : 0,
                    transform: isTitleVisible ? "translateX(0)" : "translateX(100vw)", // From Right
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
                }}
            >
            <h2 
                id="clients-shorts-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-4 uppercase tracking-wider"
            >
                {t('clients.title.prefix')}{' '}
                <span className="italic font-normal">{t('clients.title.highlight')}</span>{' '}
                {t('clients.title.suffix')}
            </h2>
            <div className="w-20 h-1 gradient-warm mx-auto" />
            </div>
        </div>

        {/* Content: Slide Up from Bottom (No Fade) */}
        <div ref={carouselRef} className="overflow-hidden pb-8 -mb-8 px-2 -mx-2">
            <div 
                className="relative max-w-7xl mx-auto"
                style={{
                    transform: isCarouselVisible ? "translateY(0)" : "translateY(200px)", // Slide Up
                    transition: "transform 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
                }}
            >
            {/* Arrows */}
            <button
                onClick={scrollPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 -translate-x-4 lg:-translate-x-6 hover:bg-background hover:scale-110 opacity-100`}
                aria-label={t('clients.prev')}
            >
                <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
                onClick={scrollNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 translate-x-4 lg:translate-x-6 hover:bg-background hover:scale-110 opacity-100`}
                aria-label={t('clients.next')}
            >
                <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Embla Carousel Viewport */}
            <div className="overflow-hidden px-2" ref={emblaRef}>
                <div className="flex -ml-4 md:-ml-6">
                {videoItems.map((item, index) => (
                    <div
                    key={item.id}
                    className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] lg:w-[23%] pl-4 md:pl-6"
                    >
                    <article className="group relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                        <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden">
                        <img
                            src={item.thumbnail}
                            alt={`${t('clients.video.alt')} ${index + 1}`}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            loading="lazy"
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white fill-white/80" />
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    </article>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShortsCarousel;