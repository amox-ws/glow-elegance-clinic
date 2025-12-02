import React, { createContext, useContext, useState } from "react";

type Language = "en" | "el";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.doctor": "The Doctor",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.subtitle": "PLASTIC SURGERY",

    // Hero
    "hero.title": "Experience the epitome of beauty and glow",
    "hero.subtitle": "Professional excellence with a personal touch. Your health and beauty are our priority.",
    "hero.cta": "Contact Us",

    // Sections
    "sections.beforeAfters": "Before & Afters",
    
    // Why Choose Us
    "why.title": "Why Choose Us",
    "why.care.title": "Personalized Care",
    "why.care.desc": "Every patient receives individualized attention tailored to their unique needs",
    "why.tech.title": "Innovative Techniques",
    "why.tech.desc": "Utilizing the latest advances in medical and aesthetic procedures",
    "why.safety.title": "Safety & Results",
    "why.safety.desc": "Beautiful aesthetic outcomes achieved with the highest safety standards",
    "why.excellence.title": "Medical Excellence",
    "why.excellence.desc": "Years of specialized training and experience in gynecology and aesthetic surgery",

    // Services - Main
    "services.title": "Services",
    "services.subtitle": "Comprehensive aesthetic treatments tailored to your needs",
    "services.learnMore": "Learn more",
    "services.viewAll": "View All Services",

    // Service Categories
    "services.category.injectable": "Injectable Face Treatments",
    "services.category.renewal": "Skin Renewal & Hydration",
    "services.category.body": "Body Treatments",

    // Injectable Face Treatments
    "services.hyaluronic.title": "Hyaluronic Acid – Fillers",
    "services.hyaluronic.desc": "Injectable treatment restoring volume, enhancing natural features, and improving tissue elasticity.",
    "services.botox.title": "Botox – Anti-Wrinkle Treatment",
    "services.botox.desc": "Softens dynamic wrinkles caused by facial expressions.",
    "services.skinboosters.title": "Skin Boosters",
    "services.skinboosters.desc": "Injectable formulas that deeply hydrate and stimulate collagen production.",
    "services.mesotherapy.title": "Facial Mesotherapy",
    "services.mesotherapy.desc": "Micro-injections with vitamins, peptides, amino acids & hyaluronic acid for glow and regeneration.",
    "services.nanosoft.title": "NanoSoft Eye Mesotherapy",
    "services.nanosoft.desc": "Reduces dark circles & fine lines with specialized micro-needle delivery.",
    "services.dissolving.title": "Hyaluronic Acid Dissolving",
    "services.dissolving.desc": "Dissolving unwanted fillers using hyaluronidase for correction or refinement.",
    "services.faciallipolysis.title": "Facial Lipolysis",
    "services.faciallipolysis.desc": "Injectable fat-dissolving treatment improving contour definition.",
    "services.tightening.title": "Facial Tightening",
    "services.tightening.desc": "Biostimulators enhancing collagen & elastin for firmer skin.",

    // Skin Renewal
    "services.skinpen.title": "SkinPen – Microneedling",
    "services.skinpen.desc": "Controlled micro-injuries stimulate healing & collagen. Ideal for scars, pores, discoloration.",
    "services.laser.title": "Fractional Laser",
    "services.laser.desc": "Treats wrinkles, scars, pigmentation with fractional micro-columns for fast healing.",
    "services.microneedlingface.title": "Microneedling Face",
    "services.microneedlingface.desc": "Improves density, texture, and fine lines with medical-grade microneedling.",
    "services.microneedlingscalp.title": "Microneedling Scalp",
    "services.microneedlingscalp.desc": "Stimulates microcirculation and boosts hair growth.",

    // Body Treatments
    "services.laserhair.title": "Laser Hair Removal",
    "services.laserhair.desc": "Medical Alexandrite laser providing long-term hair reduction.",
    "services.bodylipolysis.title": "Body Lipolysis",
    "services.bodylipolysis.desc": "Injectable fat-dissolving for stubborn local fat.",
    "services.cellulite.title": "Cellulite Treatments",
    "services.cellulite.desc": "Injectable therapies improving microcirculation & smoothing cellulite texture.",

    // Old services (kept for compatibility)
    "services.gynecology": "Gynecology",
    "services.gynecology.desc": "Complete gynecological care including routine checkups, screenings, and specialized treatments",
    "services.aesthetic": "Aesthetic Surgery",
    "services.aesthetic.desc": "Advanced cosmetic procedures with natural-looking results",
    "services.intimate": "Intimate Wellness",
    "services.intimate.desc": "Specialized treatments for intimate health and aesthetic concerns",
    "services.consultation": "Consultations",
    "services.consultation.desc": "Comprehensive consultations to discuss your health and aesthetic goals",

    // Doctor
    "doctor.title": "Meet the Doctor",
    "doctor.subtitle": "Dedicated to Your Health and Beauty",
    "doctor.bio": "With years of specialized training and a passion for patient care, our practice combines medical expertise with a genuine commitment to helping you achieve your health and aesthetic goals. Every treatment plan is personalized, and every patient is treated with respect, compassion, and professionalism.",
    "doctor.education": "Education & Training",
    "doctor.experience": "Experience",
    "doctor.philosophy": "Philosophy of Care",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Schedule your appointment today",
    "contact.name": "Full Name",
    "contact.name.required": "Name is required",
    "contact.email": "Email",
    "contact.email.required": "Email is required",
    "contact.email.invalid": "Please enter a valid email address",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.message.required": "Message is required",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message Sent!",
    "contact.success.desc": "Thank you for contacting us. We will respond shortly.",
    "contact.error": "Error",
    "contact.error.desc": "Failed to send message. Please try again.",
    "contact.info": "Contact Information",
    "contact.address": "Address",
    "contact.hours": "Office Hours",
    "contact.instagram": "Instagram",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // CTA
    "cta.ready": "Ready to Begin Your Journey?",
    "cta.description": "Schedule a consultation to discuss your aesthetic goals in a comfortable, private setting.",
  },
  el: {
    // Navigation
    "nav.home": "Αρχική",
    "nav.doctor": "Η Γιατρός",
    "nav.services": "Υπηρεσίες",
    "nav.contact": "Επικοινωνία",
    "nav.subtitle": "ΠΛΑΣΤΙΚΗ ΧΕΙΡΟΥΡΓΙΚΗ",

    // Sections
    "sections.beforeAfters": "Πριν & Μετά",

    // Hero
    "hero.title": "Experience the epitome of beauty and glow",
    "hero.subtitle": "Επαγγελματική αριστεία με προσωπική προσέγγιση. Η υγεία και η ομορφιά σας είναι η προτεραιότητά μας.",
    "hero.cta": "Επικοινωνήστε",

    // Why Choose Us
    "why.title": "Γιατί να μας Επιλέξετε",
    "why.care.title": "Εξατομικευμένη Φροντίδα",
    "why.care.desc": "Κάθε ασθενής λαμβάνει εξατομικευμένη προσοχή προσαρμοσμένη στις μοναδικές του ανάγκες",
    "why.tech.title": "Καινοτόμες Τεχνικές",
    "why.tech.desc": "Χρησιμοποιώντας τις τελευταίες εξελίξεις στις ιατρικές και αισθητικές διαδικασίες",
    "why.safety.title": "Ασφάλεια & Αποτελέσματα",
    "why.safety.desc": "Όμορφα αισθητικά αποτελέσματα με τα υψηλότερα πρότυπα ασφαλείας",
    "why.excellence.title": "Ιατρική Αριστεία",
    "why.excellence.desc": "Χρόνια εξειδικευμένης εκπαίδευσης και εμπειρίας στη γυναικολογία και αισθητική χειρουργική",

    // Services - Main
    "services.title": "Υπηρεσίες",
    "services.subtitle": "Ολοκληρωμένες αισθητικές θεραπείες προσαρμοσμένες στις ανάγκες σας",
    "services.learnMore": "Μάθετε περισσότερα",
    "services.viewAll": "Δείτε Όλες τις Υπηρεσίες",

    // Service Categories
    "services.category.injectable": "Ενέσιμες Θεραπείες Προσώπου",
    "services.category.renewal": "Ανανέωση & Ενυδάτωση Δέρματος",
    "services.category.body": "Θεραπείες Σώματος",

    // Injectable Face Treatments
    "services.hyaluronic.title": "Υαλουρονικό Οξύ – Fillers",
    "services.hyaluronic.desc": "Ενέσιμη θεραπεία για αποκατάσταση όγκου, ενίσχυση χαρακτηριστικών και βελτίωση ελαστικότητας.",
    "services.botox.title": "Botox – Αντιρυτιδική Θεραπεία",
    "services.botox.desc": "Μειώνει τις δυναμικές ρυτίδες που προκαλούνται από τις εκφράσεις.",
    "services.skinboosters.title": "Skin Boosters",
    "services.skinboosters.desc": "Ενέσιμα διαλύματα που ενυδατώνουν βαθιά και ενεργοποιούν την παραγωγή κολλαγόνου.",
    "services.mesotherapy.title": "Μεσοθεραπεία Προσώπου",
    "services.mesotherapy.desc": "Μικροενέσεις με βιταμίνες, πεπτίδια, αμινοξέα & υαλουρονικό για ανανέωση και λάμψη.",
    "services.nanosoft.title": "NanoSoft Μεσοθεραπεία Ματιών",
    "services.nanosoft.desc": "Μειώνει μαύρους κύκλους & λεπτές γραμμές με μικροβελόνες ειδικής τεχνολογίας.",
    "services.dissolving.title": "Διάλυση Υαλουρονικού",
    "services.dissolving.desc": "Διάλυση fillers με υαλουρονιδάση σε περιπτώσεις κακής εφαρμογής ή υπερβολικού όγκου.",
    "services.faciallipolysis.title": "Λιπόλυση Προσώπου",
    "services.faciallipolysis.desc": "Ενέσιμη μέθοδος που μειώνει τοπικό λίπος και βελτιώνει το περίγραμμα.",
    "services.tightening.title": "Σύσφιξη Προσώπου",
    "services.tightening.desc": "Βιοδιεγερτικά που ενεργοποιούν κολλαγόνο & ελαστίνη, βελτιώνοντας τη χαλάρωση.",

    // Skin Renewal
    "services.skinpen.title": "SkinPen – Microneedling",
    "services.skinpen.desc": "Δημιουργεί μικροτραυματισμούς ενεργοποιώντας επούλωση & παραγωγή κολλαγόνου. Ιδανικό για ουλές, πόρους, δυσχρωμίες.",
    "services.laser.title": "Fractional Laser",
    "services.laser.desc": "Βελτιώνει ρυτίδες, ουλές, δυσχρωμίες με μικρο-στήλες δέρματος και γρήγορη επούλωση.",
    "services.microneedlingface.title": "Microneedling Προσώπου",
    "services.microneedlingface.desc": "Αυξάνει την πυκνότητα του δέρματος, βελτιώνει υφή και λεπτές γραμμές.",
    "services.microneedlingscalp.title": "Microneedling Τριχωτού",
    "services.microneedlingscalp.desc": "Τονώνει τη μικροκυκλοφορία και ενισχύει την ανάπτυξη μαλλιών.",

    // Body Treatments
    "services.laserhair.title": "Αποτρίχωση Laser",
    "services.laserhair.desc": "Ιατρικό laser Αλεξανδρίτη για μόνιμη μείωση της τριχοφυΐας.",
    "services.bodylipolysis.title": "Λιπόλυση Σώματος",
    "services.bodylipolysis.desc": "Ενέσιμη διάλυση τοπικού λίπους σε δύσκολες περιοχές.",
    "services.cellulite.title": "Θεραπείες Κυτταρίτιδας",
    "services.cellulite.desc": "Ενέσιμες θεραπείες που βελτιώνουν μικροκυκλοφορία & λειαίνουν την όψη φλοιού πορτοκαλιού.",

    // Old services (kept for compatibility)
    "services.gynecology": "Γυναικολογία",
    "services.gynecology.desc": "Πλήρης γυναικολογική φροντίδα συμπεριλαμβανομένων ρουτίνας ελέγχων και εξειδικευμένων θεραπειών",
    "services.aesthetic": "Αισθητική Χειρουργική",
    "services.aesthetic.desc": "Προηγμένες αισθητικές επεμβάσεις με φυσικά αποτελέσματα",
    "services.intimate": "Ευεξία Ευαίσθητων Περιοχών",
    "services.intimate.desc": "Εξειδικευμένες θεραπείες για την υγεία και αισθητική των ευαίσθητων περιοχών",
    "services.consultation": "Συμβουλευτική",
    "services.consultation.desc": "Ολοκληρωμένες συμβουλές για να συζητήσουμε τους στόχους υγείας και ομορφιάς σας",

    // Doctor
    "doctor.title": "Γνωρίστε τη Γιατρό",
    "doctor.subtitle": "Αφοσιωμένη στην Υγεία και Ομορφιά σας",
    "doctor.bio": "Με χρόνια εξειδικευμένης εκπαίδευσης και πάθος για τη φροντίδα των ασθενών, η πρακτική μας συνδυάζει ιατρική εμπειρία με γνήσια δέσμευση να σας βοηθήσουμε να επιτύχετε τους στόχους υγείας και ομορφιάς σας. Κάθε θεραπευτικό πλάνο είναι εξατομικευμένο και κάθε ασθενής αντιμετωπίζεται με σεβασμό, συμπόνια και επαγγελματισμό.",
    "doctor.education": "Εκπαίδευση & Κατάρτιση",
    "doctor.experience": "Εμπειρία",
    "doctor.philosophy": "Φιλοσοφία Φροντίδας",

    // Contact
    "contact.title": "Επικοινωνήστε",
    "contact.subtitle": "Κλείστε το ραντεβού σας σήμερα",
    "contact.name": "Ονοματεπώνυμο",
    "contact.name.required": "Το όνομα είναι υποχρεωτικό",
    "contact.email": "Email",
    "contact.email.required": "Το email είναι υποχρεωτικό",
    "contact.email.invalid": "Παρακαλώ εισάγετε έγκυρη διεύθυνση email",
    "contact.phone": "Τηλέφωνο",
    "contact.message": "Μήνυμα",
    "contact.message.required": "Το μήνυμα είναι υποχρεωτικό",
    "contact.send": "Αποστολή Μηνύματος",
    "contact.sending": "Αποστολή...",
    "contact.success": "Το μήνυμα στάλθηκε!",
    "contact.success.desc": "Ευχαριστούμε που επικοινωνήσατε μαζί μας. Θα απαντήσουμε σύντομα.",
    "contact.error": "Σφάλμα",
    "contact.error.desc": "Αποτυχία αποστολής μηνύματος. Παρακαλώ δοκιμάστε ξανά.",
    "contact.info": "Στοιχεία Επικοινωνίας",
    "contact.address": "Διεύθυνση",
    "contact.hours": "Ώρες Λειτουργίας",
    "contact.instagram": "Instagram",

    // Footer
    "footer.rights": "Όλα τα δικαιώματα διατηρούνται.",
    "footer.privacy": "Πολιτική Απορρήτου",
    "footer.terms": "Όροι Χρήσης",

    // CTA
    "cta.ready": "Έτοιμοι να Ξεκινήσετε;",
    "cta.description": "Κλείστε μια συμβουλευτική για να συζητήσουμε τους αισθητικούς σας στόχους σε ένα άνετο, ιδιωτικό περιβάλλον.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("el");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
