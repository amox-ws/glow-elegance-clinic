import { useLanguage } from '@/contexts/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface VideoItem {
  id: number;
  thumbnail: string;
  avatarUrl: string;
  name: string;
  title: string;
}

const ClientShortsCarousel = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
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

  // Placeholder video items - to be replaced with real content later
  const videoItems: VideoItem[] = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&q=80',
      name: 'Maria K.',
      title: t('clients.testimonial.satisfied'),
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=600&fit=crop&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&q=80',
      name: 'Elena P.',
      title: t('clients.testimonial.treatment'),
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=600&fit=crop&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&h=80&fit=crop&q=80',
      name: 'Sofia M.',
      title: t('clients.testimonial.results'),
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&q=80',
      name: 'Anna D.',
      title: t('clients.testimonial.experience'),
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80',
      name: 'Christina L.',
      title: t('clients.testimonial.care'),
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80',
      name: 'Dimitra V.',
      title: t('clients.testimonial.recommend'),
    },
  ];

  return (
    <section className="py-20 bg-background" aria-labelledby="clients-shorts-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12" data-anim="up">
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

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 -translate-x-4 lg:-translate-x-6 ${
              canScrollPrev 
                ? 'opacity-100 hover:bg-background hover:scale-110' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label={t('clients.prev')}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 translate-x-4 lg:translate-x-6 ${
              canScrollNext 
                ? 'opacity-100 hover:bg-background hover:scale-110' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label={t('clients.next')}
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden px-2" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {videoItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] lg:w-[23%]"
                >
                  <article className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                    {/* Video Thumbnail Container */}
                    <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden">
                      {/* Thumbnail Image */}
                      <img
                        src={item.thumbnail}
                        alt={`${item.name} - ${t('clients.video.alt')}`}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                        loading="lazy"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white/80" />
                        </div>
                      </div>

                      {/* Gradient Overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Info Section */}
                    <div className="p-4 bg-card">
                      <div className="flex items-center gap-3 mb-4">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                          <img
                            src={item.avatarUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        {/* Name & Title */}
                        <div className="min-w-0">
                          <h3 className="font-semibold text-foreground text-sm truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {item.title}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link to="/contact" className="block">
                        <Button 
                          className="w-full gradient-warm text-white border-0 hover:opacity-90 transition-all duration-300 text-sm py-2"
                          size="sm"
                        >
                          {t('clients.cta')}
                        </Button>
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShortsCarousel;
