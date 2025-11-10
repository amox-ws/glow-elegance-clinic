import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Doctor = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      icon: GraduationCap,
      title: t('doctor.education'),
      content: [
        'Medical Degree - University of Athens Medical School',
        'Residency in Gynecology - Metropolitan Hospital',
        'Fellowship in Aesthetic Surgery - International Institute',
        'Board Certified Gynecologist & Plastic Surgeon',
      ],
    },
    {
      icon: Briefcase,
      title: t('doctor.experience'),
      content: [
        '15+ years of specialized practice',
        'Over 5,000 successful procedures performed',
        'Regular speaker at international medical conferences',
        'Published research in leading medical journals',
      ],
    },
    {
      icon: Heart,
      title: t('doctor.philosophy'),
      content: [
        'Patient-centered approach with compassionate care',
        'Focus on natural, beautiful results',
        'Commitment to the highest safety standards',
        'Continuous learning and adaptation of latest techniques',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-rose-to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              {t('doctor.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('doctor.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Portrait */}
            <div className="lg:col-span-2 reveal-left">
              <img
                src={doctorPortrait}
                alt="Doctor Portrait"
                className="rounded-2xl shadow-elegant w-full h-auto sticky top-28"
              />
            </div>

            {/* Bio & Credentials */}
            <div className="lg:col-span-3 space-y-8 reveal-right">
              <Card className="p-8 border-border bg-card shadow-soft">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  About
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('doctor.bio')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a deep commitment to medical excellence and patient satisfaction,
                  every consultation begins with listening. Understanding your unique needs
                  and goals is the foundation of creating a personalized treatment plan
                  that respects your individuality and enhances your natural beauty.
                </p>
              </Card>

              {/* Credentials Sections */}
              {sections.map((section, index) => (
                <Card
                  key={index}
                  className="p-8 border-border bg-card shadow-soft hover:shadow-elegant transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-rose mr-4">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}

              {/* Quote */}
              <Card className="p-8 gradient-rose border-0">
                <blockquote className="text-white text-lg italic text-center">
                  "My goal is not just to meet expectations, but to exceed them — with results
                  that look natural, feel right, and make you confident in your own skin."
                </blockquote>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
