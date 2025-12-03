import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-clinic.jpg';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ClinicCarousel from '@/components/ClinicCarousel';
import ClientShortsCarousel from '@/components/ClientShortsCarousel';

import before_lips from "@/assets/before_lips.png"
import after_lips from "@/assets/after_lips.png"
import before_botox from "@/assets/before_botox.png"
import after_botox from "@/assets/after_botox.png"
import before_darkeyes from "@/assets/before_darkeyes.png"
import after_darkeyes from "@/assets/after_darkeyes.png"

const Home = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const whyChooseFeatures = [
    {
      title: t('why.specialized.title'),
      description: t('why.specialized.desc'),
    },
    {
      title: t('why.honesty.title'),
      description: t('why.honesty.desc'),
    },
    {
      title: t('why.excellence.title'),
      description: t('why.excellence.desc'),
    },
    {
      title: t('why.innovation.title'),
      description: t('why.innovation.desc'),
    },
  ];

  // Service category cards for home page
  const serviceCategories = [
    {
      id: 'injectable',
      titleKey: 'services.category.injectable',
      descKey: 'services.category.injectable.desc',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'renewal',
      titleKey: 'services.category.renewal',
      descKey: 'services.category.renewal.desc',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 'body',
      titleKey: 'services.category.body',
      descKey: 'services.category.body.desc',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-cream opacity-80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="gradient-warm text-white border-0 hover:opacity-90 transition-all duration-300 shadow-elegant animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 gradient-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('services.subtitle')}
          </p>

          <div className="max-w-6xl mx-auto space-y-6">
            {/* Top Box - Full Width */}
            <Link
              to="/services#injectable"
              data-anim="up"
              className="group relative block overflow-hidden rounded-2xl h-[320px] md:h-[400px] cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-500"
              aria-label={t('services.category.injectable')}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${serviceCategories[0].image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-taupe/90 via-warm-tan/40 to-transparent transition-opacity duration-500" />
              
              {/* Content - Centered */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-center px-6 transition-transform duration-500 group-hover:scale-105"
                >
                  {t('services.category.injectable')}
                </h3>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Bottom Row - Two Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bottom Left Box */}
              <Link
                to="/services#renewal"
                data-anim="up"
                className="group relative block overflow-hidden rounded-2xl h-[280px] md:h-[320px] cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-500"
                aria-label={t('services.category.renewal')}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${serviceCategories[1].image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-taupe/90 via-warm-tan/40 to-transparent transition-opacity duration-500" />
                
                {/* Content - Centered */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-center px-6 transition-transform duration-500 group-hover:scale-105"
                  >
                    {t('services.category.renewal')}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Bottom Right Box */}
              <Link
                to="/services#body"
                data-anim="up"
                className="group relative block overflow-hidden rounded-2xl h-[280px] md:h-[320px] cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-500"
                aria-label={t('services.category.body')}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${serviceCategories[2].image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-taupe/90 via-warm-tan/40 to-transparent transition-opacity duration-500" />
                
                {/* Content - Centered */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-center px-6 transition-transform duration-500 group-hover:scale-105"
                  >
                    {t('services.category.body')}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                {t('services.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div data-anim="left">
              <img
                src={doctorPortrait}
                alt="Doctor Portrait"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>

            <div data-anim="right">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-6">
                {t('doctor.title')}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('doctor.bio')}
              </p>
              <Link to="/doctor">
                <Button className="gradient-warm text-white border-0 hover:opacity-90 transition-all duration-300">
                  {t('services.learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & Afters Section */}
{/* Before & Afters Section */}
<section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-anim="up">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4">
              {t('sections.beforeAfters')}
            </h2>
            <div className="w-20 h-1 gradient-warm mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal-stagger">
            {/* 1. Botox */}
            <div data-anim="up">
              <BeforeAfterSlider
                titleKey="services.botox.title"
                beforeImage={before_botox}
                afterImage={after_botox}
              />
            </div>

            {/* 2. Hyaluronic Acid */}
            <div data-anim="up">
              <BeforeAfterSlider
                titleKey="services.hyaluronic.title"
                beforeImage={before_lips}
                afterImage={after_lips}
              />
            </div>

            {/* 3. Body/Tummy Tuck */}
            <div data-anim="up">
              <BeforeAfterSlider
                titleKey="services.faciallipolysis.title" 
                beforeImage={before_darkeyes}
                afterImage={after_darkeyes}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div data-anim="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-6">
                <span className="italic">{t('why.title')}</span>{' '}
                <span className="font-semibold">{t('why.titleHighlight')}</span>
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('why.subtitle')}{' '}
                <span className="italic font-medium text-foreground">{t('why.subtitleBold')}</span>
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {whyChooseFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`py-4 ${index < 2 ? 'border-b border-border' : ''}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="gradient-warm text-white border-0 hover:opacity-90 transition-all duration-300 shadow-elegant px-8"
                  >
                    {t('why.cta')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div data-anim="right" className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=800&fit=crop&q=80"
                    alt="Aesthetic treatments"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clinic Section */}
      <ClinicCarousel />

      {/* Our Clients in Shorts Section */}
      <ClientShortsCarousel />

      {/* CTA Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto" data-anim="up">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-6">
              {t('cta.ready')}
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              {t('cta.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
