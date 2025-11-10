import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Shield, Sparkles, Award } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

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

  const services = [
    {
      title: t('services.gynecology'),
      description: t('services.gynecology.desc'),
    },
    {
      title: t('services.aesthetic'),
      description: t('services.aesthetic.desc'),
    },
    {
      title: t('services.intimate'),
      description: t('services.intimate.desc'),
    },
    {
      title: t('services.consultation'),
      description: t('services.consultation.desc'),
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
          <div className="absolute inset-0 gradient-rose-to-white opacity-80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="gradient-rose text-white border-0 hover:opacity-90 transition-all duration-300 shadow-elegant animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-foreground mb-4">
            {t('why.title')}
          </h2>
          <div className="w-20 h-1 gradient-rose mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-500 border-border bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-rose mb-4">
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

      {/* Featured Services Section */}
      <section className="py-20 gradient-rose-to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('services.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-500 border-border bg-background/80 backdrop-blur-sm group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <img
                src={doctorPortrait}
                alt="Doctor Portrait"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-6">
                {t('doctor.title')}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('doctor.bio')}
              </p>
              <Link to="/doctor">
                <Button className="gradient-rose text-white border-0 hover:opacity-90 transition-all duration-300">
                  Learn More About the Doctor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
