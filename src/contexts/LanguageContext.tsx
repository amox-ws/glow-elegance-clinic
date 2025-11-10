import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.doctor': 'The Doctor',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Expertise and Care in Gynecology & Aesthetic Surgery',
    'hero.subtitle': 'Professional excellence with a personal touch. Your health and beauty are our priority.',
    'hero.cta': 'Book an Appointment',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.care.title': 'Personalized Care',
    'why.care.desc': 'Every patient receives individualized attention tailored to their unique needs',
    'why.tech.title': 'Innovative Techniques',
    'why.tech.desc': 'Utilizing the latest advances in medical and aesthetic procedures',
    'why.safety.title': 'Safety & Results',
    'why.safety.desc': 'Beautiful aesthetic outcomes achieved with the highest safety standards',
    'why.excellence.title': 'Medical Excellence',
    'why.excellence.desc': 'Years of specialized training and experience in gynecology and aesthetic surgery',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive care in gynecology and aesthetic surgery',
    'services.gynecology': 'Gynecology',
    'services.gynecology.desc': 'Complete gynecological care including routine checkups, screenings, and specialized treatments',
    'services.aesthetic': 'Aesthetic Surgery',
    'services.aesthetic.desc': 'Advanced cosmetic procedures with natural-looking results',
    'services.intimate': 'Intimate Wellness',
    'services.intimate.desc': 'Specialized treatments for intimate health and aesthetic concerns',
    'services.consultation': 'Consultations',
    'services.consultation.desc': 'Comprehensive consultations to discuss your health and aesthetic goals',
    
    // Doctor
    'doctor.title': 'Meet the Doctor',
    'doctor.subtitle': 'Dedicated to Your Health and Beauty',
    'doctor.bio': 'With years of specialized training and a passion for patient care, our practice combines medical expertise with a genuine commitment to helping you achieve your health and aesthetic goals. Every treatment plan is personalized, and every patient is treated with respect, compassion, and professionalism.',
    'doctor.education': 'Education & Training',
    'doctor.experience': 'Experience',
    'doctor.philosophy': 'Philosophy of Care',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Schedule your appointment today',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.hours': 'Office Hours',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.doctor': 'Η Γιατρός',
    'nav.services': 'Υπηρεσίες',
    'nav.contact': 'Επικοινωνία',
    
    // Hero
    'hero.title': 'Εμπειρία και Φροντίδα στη Γυναικολογία & Αισθητική Χειρουργική',
    'hero.subtitle': 'Επαγγελματική αριστεία με προσωπική προσέγγιση. Η υγεία και η ομορφιά σας είναι η προτεραιότητά μας.',
    'hero.cta': 'Κλείστε Ραντεβού',
    
    // Why Choose Us
    'why.title': 'Γιατί να μας Επιλέξετε',
    'why.care.title': 'Εξατομικευμένη Φροντίδα',
    'why.care.desc': 'Κάθε ασθενής λαμβάνει εξατομικευμένη προσοχή προσαρμοσμένη στις μοναδικές του ανάγκες',
    'why.tech.title': 'Καινοτόμες Τεχνικές',
    'why.tech.desc': 'Χρησιμοποιώντας τις τελευταίες εξελίξεις στις ιατρικές και αισθητικές διαδικασίες',
    'why.safety.title': 'Ασφάλεια & Αποτελέσματα',
    'why.safety.desc': 'Όμορφα αισθητικά αποτελέσματα με τα υψηλότερα πρότυπα ασφαλείας',
    'why.excellence.title': 'Ιατρική Αριστεία',
    'why.excellence.desc': 'Χρόνια εξειδικευμένης εκπαίδευσης και εμπειρίας στη γυναικολογία και αισθητική χειρουργική',
    
    // Services
    'services.title': 'Οι Υπηρεσίες μας',
    'services.subtitle': 'Ολοκληρωμένη φροντίδα στη γυναικολογία και αισθητική χειρουργική',
    'services.gynecology': 'Γυναικολογία',
    'services.gynecology.desc': 'Πλήρης γυναικολογική φροντίδα συμπεριλαμβανομένων ρουτίνας ελέγχων και εξειδικευμένων θεραπειών',
    'services.aesthetic': 'Αισθητική Χειρουργική',
    'services.aesthetic.desc': 'Προηγμένες αισθητικές επεμβάσεις με φυσικά αποτελέσματα',
    'services.intimate': 'Ευεξία Ευαίσθητων Περιοχών',
    'services.intimate.desc': 'Εξειδικευμένες θεραπείες για την υγεία και αισθητική των ευαίσθητων περιοχών',
    'services.consultation': 'Συμβουλευτική',
    'services.consultation.desc': 'Ολοκληρωμένες συμβουλές για να συζητήσουμε τους στόχους υγείας και ομορφιάς σας',
    
    // Doctor
    'doctor.title': 'Γνωρίστε τη Γιατρό',
    'doctor.subtitle': 'Αφοσιωμένη στην Υγεία και Ομορφιά σας',
    'doctor.bio': 'Με χρόνια εξειδικευμένης εκπαίδευσης και πάθος για τη φροντίδα των ασθενών, η πρακτική μας συνδυάζει ιατρική εμπειρία με γνήσια δέσμευση να σας βοηθήσουμε να επιτύχετε τους στόχους υγείας και ομορφιάς σας. Κάθε θεραπευτικό πλάνο είναι εξατομικευμένο και κάθε ασθενής αντιμετωπίζεται με σεβασμό, συμπόνια και επαγγελματισμό.',
    'doctor.education': 'Εκπαίδευση & Κατάρτιση',
    'doctor.experience': 'Εμπειρία',
    'doctor.philosophy': 'Φιλοσοφία Φροντίδας',
    
    // Contact
    'contact.title': 'Επικοινωνήστε',
    'contact.subtitle': 'Κλείστε το ραντεβού σας σήμερα',
    'contact.name': 'Ονοματεπώνυμο',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.message': 'Μήνυμα',
    'contact.send': 'Αποστολή Μηνύματος',
    'contact.info': 'Στοιχεία Επικοινωνίας',
    'contact.address': 'Διεύθυνση',
    'contact.hours': 'Ώρες Λειτουργίας',
    
    // Footer
    'footer.rights': 'Όλα τα δικαιώματα διατηρούνται.',
    'footer.privacy': 'Πολιτική Απορρήτου',
    'footer.terms': 'Όροι Χρήσης',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
