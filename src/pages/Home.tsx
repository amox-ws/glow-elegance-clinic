import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Shield, Sparkles, Award } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import { Link } from 'react-router-dom';
import BeforeAfterCarousel from '@/components/BeforeAfterCarousel';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { serviceCategories, homePreviewServices } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const Home = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const whyChooseUs = [
    {
      icon: Heart,
      title: t('why.care.title'),
      description: t('why.care.desc'),
    },
    {
      icon: Sparkles,
      title: t('why.tech.title'),
      description: t('why.tech.desc'),
    },
    {
      icon: Shield,
      title: t('why.safety.title'),
      description: t('why.safety.desc'),
    },
    {
      icon: Award,
      title: t('why.excellence.title'),
      description: t('why.excellence.desc'),
    },
  ];

  // Get preview services from all categories
  const previewServices = serviceCategories
    .flatMap((cat) =>
      cat.services
        .filter((s) => homePreviewServices.includes(s.id))
        .map((s) => ({ ...s, categoryId: cat.id }))
    )
    .slice(0, 6);

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
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
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('services.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto reveal-stagger">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.id}
                titleKey={service.titleKey}
                descKey={service.descKey}
                categoryId={service.categoryId}
                serviceId={service.id}
                variant="preview"
              />
            ))}
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
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-6">
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
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
              {t('sections.beforeAfters')}
            </h2>
            <div className="w-20 h-1 gradient-warm mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal-stagger">
            {/* 1. Botox */}
            <div data-anim="up">
              <BeforeAfterSlider
                titleKey="services.botox.title"
                beforeImage="https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=500&fit=crop&q=80" 
                afterImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=500&fit=crop&q=80"
              />
            </div>

            {/* 2. Hyaluronic Acid */}
            <div data-anim="up">
              <BeforeAfterSlider
                titleKey="services.hyaluronic.title"
                beforeImage="https://images.unsplash.com/photo-1588510885239-2a9a7dd6d6c2?w=600&h=500&fit=crop&q=80"
                afterImage="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=500&fit=crop&q=80"
              />
            </div>

            {/* 3. Body/Tummy Tuck */}
            <div data-anim="up">
              <BeforeAfterSlider
                titleKey="services.faciallipolysis.title" 
                beforeImage="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&h=500&fit=crop&q=80"
                afterImage="https://images.unsplash.com/photo-1584447477134-8c439178be47?w=600&h=500&fit=crop&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-foreground mb-4">
            {t('why.title')}
          </h2>
          <div className="w-20 h-1 gradient-warm mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                data-anim="up"
                className="p-6 text-center hover:shadow-elegant transition-all duration-500 border-border bg-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-warm mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
