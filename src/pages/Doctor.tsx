import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Briefcase, GraduationCap, Languages, Award, Users } from 'lucide-react';
import cvFoto from '@/assets/cvfoto.jpeg';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import ContactCTASection from '@/components/ContactCTASection';

const Doctor = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-cream py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Portrait - Sticky on Desktop */}
            <div className="lg:col-span-4" data-anim="left">
              <div className="lg:sticky lg:top-28">
                <img
                  src={cvFoto}
                  alt="Dr. Eirini Valvi"
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
              </div>
            </div>

            {/* Biography Content */}
            <div className="lg:col-span-8 space-y-8" data-anim="right">
              
              {/* Work Experience */}
              <Card className="p-8 border-border bg-card shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-warm mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    {t('doctor.workExperience')}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {t('doctor.job1.title')}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-1">
                      {t('doctor.job1.place')}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('doctor.job1.date')}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{t('doctor.job1.item1')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{t('doctor.job1.item2')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{t('doctor.job1.item3')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{t('doctor.job1.item4')}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {t('doctor.job2.title')}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-1">
                      {t('doctor.job2.place')}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('doctor.job2.date')}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{t('doctor.job2.item1')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Education */}
              <Card className="p-8 border-border bg-card shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-warm mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    {t('doctor.education')}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {t('doctor.edu1.title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('doctor.edu1.place')}
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {t('doctor.edu2.title')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('doctor.edu2.place')}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Personal Skills */}
              <Card className="p-8 border-border bg-card shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-warm mr-4">
                    <Languages className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    {t('doctor.personalSkills')}
                  </h2>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.skills.native')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.skills.foreign')}</span>
                  </li>
                </ul>
              </Card>

              {/* Seminars */}
              <Card className="p-8 border-border bg-card shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-warm mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    {t('doctor.seminars')}
                  </h2>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.seminar1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.seminar2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.seminar3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.seminar4')}</span>
                  </li>
                </ul>
              </Card>

              {/* Scientific Associations */}
              <Card className="p-8 border-border bg-card shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-warm mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    {t('doctor.associations')}
                  </h2>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.assoc1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.assoc2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.assoc3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('doctor.assoc4')}</span>
                  </li>
                </ul>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTASection />
    </div>
  );
};

export default Doctor;