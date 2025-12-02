import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Sparkles, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Services = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const services = [
    {
      icon: Activity,
      title: t('services.gynecology'),
      description: t('services.gynecology.desc'),
      treatments: [
        'Routine Gynecological Exams',
        'Cervical Cancer Screening',
        'Prenatal & Postnatal Care',
        'Menopause Management',
        'Fertility Consultations',
        'Treatment of Gynecological Conditions',
      ],
    },
    {
      icon: Sparkles,
      title: t('services.aesthetic'),
      description: t('services.aesthetic.desc'),
      treatments: [
        'Breast Augmentation & Lift',
        'Tummy Tuck (Abdominoplasty)',
        'Body Contouring',
        'Facial Rejuvenation',
        'Liposuction',
        'Non-Surgical Treatments',
      ],
    },
    {
      icon: Heart,
      title: t('services.intimate'),
      description: t('services.intimate.desc'),
      treatments: [
        'Vaginal Rejuvenation',
        'Labiaplasty',
        'Non-Surgical Intimate Wellness',
        'Pelvic Floor Therapy',
        'Intimate Area Aesthetics',
        'Post-Pregnancy Restoration',
      ],
    },
    {
      icon: MessageCircle,
      title: t('services.consultation'),
      description: t('services.consultation.desc'),
      treatments: [
        'Initial Assessment',
        'Treatment Planning',
        'Second Opinion Consultations',
        'Pre & Post-Operative Care',
        'Follow-Up Appointments',
        'Personalized Care Plans',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-cream py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto reveal-stagger">
            {services.map((service, index) => (
              <Card
                key={index}
                data-anim="auto"
                className="p-8 border-border bg-card shadow-soft hover:shadow-elegant transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-warm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{treatment}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Schedule a consultation to discuss your health and aesthetic goals in a
              comfortable, private setting.
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

export default Services;
