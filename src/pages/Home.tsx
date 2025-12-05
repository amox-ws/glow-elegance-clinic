import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/homepagefirst.jpeg';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ClinicCarousel from '@/components/ClinicCarousel';
import ClientShortsCarousel from '@/components/ClientShortsCarousel';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation'; // Import the custom hook

import before_lips from "@/assets/before_lips.png";
import after_lips from "@/assets/after_lips.png";
import before_botox from "@/assets/before_botox.png";
import after_botox from "@/assets/after_botox.png";
import before_darkeyes from "@/assets/before_darkeyes.png";
import after_darkeyes from "@/assets/after_darkeyes.png";
import meetthedoctor from "@/assets/meetthedoctor.jpeg";
import whychooseus from "@/assets/whychooseus.png";

import clinic1 from "@/assets/cllinic1.jpeg";
import clinic2 from "@/assets/clinic2.jpeg";
import clinic3 from "@/assets/clinic3.jpeg";
import clinic4 from "@/assets/clinic4.jpeg";

import shorts1 from "@/assets/shorts/shorts1.png";
import shorts2 from "@/assets/shorts/shorts2.png";
import shorts3 from "@/assets/shorts/shorts3.png";
import shorts4 from "@/assets/shorts/shorts4.png";
import shorts5 from "@/assets/shorts/shorts5.png";
import shorts6 from "@/assets/shorts/shorts6.png";

// New service imports
import service_up from "@/assets/service_up.jpeg";
import service_l from "@/assets/service_l.jpeg";
import service_r from "@/assets/service_r.png";

const Home = () => {
  const { t } = useLanguage();
  useScrollReveal(); // Handles the 'data-anim' animations (Top Box)

  // 1. Animation hooks for the Wrappers of the Left/Right boxes
  const { ref: leftWrapperRef, isVisible: isLeftVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: rightWrapperRef, isVisible: isRightVisible } = useScrollAnimation({ threshold: 0.1 });

  const whyChooseFeatures = [
    {
      title: t('why.specialized.title'),
      description: t('why.specialized.desc')
    },
    {
      title: t('why.honesty.title'),
      description: t('why.honesty.desc')
    },
    {
      title: t('why.excellence.title'),
      description: t('why.excellence.desc')
    },
    {
      title: t('why.innovation.title'),
      description: t('why.innovation.desc')
    }
  ];

  // Updated service category cards with your new images
  const serviceCategories = [
    {
      id: 'injectable',
      titleKey: 'services.category.injectable',
      descKey: 'services.category.injectable.desc',
      image: service_up, // Top/Full width image
    },
    {
      id: 'renewal',
      titleKey: 'services.category.renewal',
      descKey: 'services.category.renewal.desc',
      image: service_l, // Bottom Left image
    },
    {
      id: 'body',
      titleKey: 'services.category.body',
      descKey: 'services.category.body.desc',
      image: service_r, // Bottom Right image
    }
  ];

  // Array of your imported clinic images
  const clinicImages = [clinic1, clinic2, clinic3, clinic4];

  // Array of your imported shorts images
  const shortsImages = [shorts1, shorts2, shorts3, shorts4, shorts5, shorts6];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-cream opacity-55" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 animate-hero-title font-hero-serif font-medium tracking-wide leading-tight">
            {t('hero.title')}
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-4 uppercase tracking-wider text-center">
            {t('services.title.prefix')} <span className="italic font-normal">{t('services.title.highlight')}</span> {t('services.title.suffix')}
          </h2>
          <div className="w-20 h-1 gradient-warm mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12">
            {t('services.subtitle')}
          </p>

          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Top Box - Full Width */}
            {/* Has data-anim="up" for simple fade in */}
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
              
              
              {/* Content - Centered */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-center px-6 transition-transform duration-500 group-hover:scale-105">
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
            {/* Kept your exact grid classes */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              
              {/* Bottom Left Box */}
              <div ref={leftWrapperRef} className="overflow-visible">
                <Link
                  to="/services#renewal"
                  className="group relative block overflow-hidden rounded-2xl h-[180px] sm:h-[240px] md:h-[320px] cursor-pointer shadow-elegant hover:shadow-glow"
                  aria-label={t('services.category.renewal')}
                  style={{
                    opacity: isLeftVisible ? 1 : 0,
                    transform: isLeftVisible ? "translateX(0)" : "translateX(-120%)", // Fly in from Left
                    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${serviceCategories[1].image})` }}
                  />
                  
                  
                  {/* Content - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h3 className="text-base sm:text-xl md:text-3xl font-heading font-semibold text-center px-3 sm:px-6 transition-transform duration-500 group-hover:scale-105">
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
              </div>

              {/* Bottom Right Box */}
              <div ref={rightWrapperRef} className="overflow-visible">
                <Link
                  to="/services#body"
                  className="group relative block overflow-hidden rounded-2xl h-[180px] sm:h-[240px] md:h-[320px] cursor-pointer shadow-elegant hover:shadow-glow"
                  aria-label={t('services.category.body')}
                  style={{
                    opacity: isRightVisible ? 1 : 0,
                    transform: isRightVisible ? "translateX(0)" : "translateX(120%)", // Fly in from Right
                    transition: "all 1.8s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${serviceCategories[2].image})` }}
                  />
                  

                  {/* Content - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h3 className="text-base sm:text-xl md:text-3xl font-heading font-semibold text-center px-3 sm:px-6 transition-transform duration-500 group-hover:scale-105">
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
                src={meetthedoctor}
                alt="Doctor Portrait"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>

            <div data-anim="right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-6 uppercase tracking-wider">
                {t('doctor.title.prefix')} <span className="italic font-normal">{t('doctor.title.highlight')}</span>
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
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-anim="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-4 uppercase tracking-wider">
              {t('sections.beforeAfters.prefix')}{' '}
              <span className="italic font-normal">{t('sections.beforeAfters.highlight')}</span>{' '}
              {t('sections.beforeAfters.suffix')}
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
                    src={whychooseus}
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

      {/* Our Clinic Section with Custom Images */}
      <ClinicCarousel images={clinicImages} />

      {/* Map & Location Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-anim="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mb-4 uppercase tracking-wider">
              {t('map.title.prefix')} <span className="italic font-normal">{t('map.title.highlight')}</span> {t('map.title.suffix')}
            </h2>
            <div className="w-20 h-1 gradient-warm mx-auto" />
          </div>
          
          <div 
            className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-elegant"
            data-anim="up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.1234567890!2d23.6431!3d37.9445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc0ef1f0c4b1%3A0x9f8e7d6c5b4a3210!2sKountouriotou%20127%2C%20Piraeus%20185%2032%2C%20Greece!5e0!3m2!1sen!2sgr!4v1701600000000!5m2!1sen!2sgr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Valvis Clinic Location - Kountouriotou 127, Piraeus, Greece 18532"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Our Clients in Shorts Section with Custom Images */}
      <ClientShortsCarousel images={shortsImages} />

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

      <ScrollToTopButton />
    </div>
  );
};

export default Home;