import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('contact.name.required');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.email.required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.email.invalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.message.required');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('contact.success'),
        description: t('contact.success.desc'),
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.error.desc'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: 'Kountouriotou 127\nPiraeus, Greece 18532',
      link: null,
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+30 6951944489',
      link: 'tel:+306951944489',
    },
    {
      icon: Instagram,
      title: t('contact.instagram'),
      content: '@valvisbeautyclinic',
      link: 'https://www.instagram.com/valvisbeautyclinic/',
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-cream py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 border-border bg-card shadow-soft" data-anim="left">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                {t('contact.send')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    {t('contact.name')} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.name')}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {t('contact.email')} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.email')}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    {t('contact.phone')}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.phone')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {t('contact.message')} <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.message')}
                    rows={5}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-warm text-white border-0 hover:opacity-90 transition-all duration-300"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6" data-anim="right">
              <Card className="p-8 border-border bg-card shadow-soft">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  {t('contact.info')}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-warm flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Map Embed */}
              <Card className="p-0 overflow-hidden border-border shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1764959714524!2d23.64135!3d37.94274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bbe5bb8d2835%3A0x3e0dce8e8b5e3c0d!2sKountouriotou%20127%2C%20Pireas%20185%2032!5e0!3m2!1sen!2sgr!4v1645000000000!5m2!1sen!2sgr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Clinic Location - Kountouriotou 127, Piraeus"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
