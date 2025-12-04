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
    "nav.subtitle": "HAIR & BEAUTY CLINIC",

    // Hero
    "hero.title": "Experience the epitome of beauty and glow",
    "hero.subtitle": "Your health and beauty are our priority.",
    "hero.cta": "Contact Us",

    // Sections
    "sections.beforeAfters": "Before & Afters",

    // Why Choose Us
    "why.title": "Why Choose",
    "why.titleHighlight": "Dr. Valvis?",
    "why.subtitle": "Trusted by thousands, Dr. Valvis delivers evidence-based care through",
    "why.subtitleBold": "multidisciplinary expertise, advanced technology, and patient-centered outcomes.",
    "why.specialized.title": "Specialized Medical Care",
    "why.specialized.desc": "Advanced aesthetic care led by top experts.",
    "why.honesty.title": "Honesty Policy",
    "why.honesty.desc": "Clear, honest, evidence-based guidance.",
    "why.excellence.title": "Center of Excellence",
    "why.excellence.desc": "Focused, high-quality care in every specialty.",
    "why.innovation.title": "Innovation With Impact",
    "why.innovation.desc": "Technology that transforms patient outcomes.",
    "why.cta": "Book an Appointment",

    // Clinic Section
    "clinic.title": "Our Clinic",
    "clinic.image.alt": "Clinic interior",
    "clinic.prev": "Previous image",
    "clinic.next": "Next image",

    // Client Shorts Section
    "clients.title.prefix": "OUR",
    "clients.title.highlight": "CLIENTS",
    "clients.title.suffix": "IN SHORTS",
    "clients.prev": "Previous video",
    "clients.next": "Next video",
    "clients.video.alt": "Client testimonial video",
    "clients.cta": "Book Your Appointment",
    "clients.testimonial.satisfied": "Satisfied Client",
    "clients.testimonial.treatment": "Botox Treatment",
    "clients.testimonial.results": "Amazing Results",
    "clients.testimonial.experience": "Great Experience",
    "clients.testimonial.care": "Professional Care",
    "clients.testimonial.recommend": "Highly Recommend",

    // Services - Main
    "services.title": "Services",
    "services.subtitle": "Comprehensive aesthetic treatments tailored to your needs",
    "services.learnMore": "Learn more",
    "services.viewAll": "View All Services",

    // Service Categories
    "services.category.injectable": "Facial Injectable Treatments",
    "services.category.injectable.desc":
      "Advanced injectable solutions for volume restoration, wrinkle reduction, and facial contouring.",
    "services.category.renewal": "Skin Rejuvenation & Hydration",
    "services.category.renewal.desc": "Medical-grade treatments for radiant, youthful, and deeply hydrated skin.",
    "services.category.body": "Body Treatments",
    "services.category.body.desc": "Targeted therapies for body contouring, hair removal, and skin smoothing.",

    // Injectable Face Treatments
    "services.hyaluronic.title": "Hyaluronic Acid – Fillers",
    "services.hyaluronic.desc":
      "Injectable treatment restoring volume, enhancing natural features, and improving tissue elasticity.",
    "services.botox.title": "Botox – Anti-Wrinkle Treatment",
    "services.botox.desc": "Softens dynamic wrinkles caused by facial expressions.",
    "services.skinboosters.title": "Skin Boosters",
    "services.skinboosters.desc": "Injectable formulas that deeply hydrate and stimulate collagen production.",
    "services.mesotherapy.title": "Facial Mesotherapy",
    "services.mesotherapy.desc":
      "Micro-injections with vitamins, peptides, amino acids & hyaluronic acid for glow and regeneration.",
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
    "services.skinpen.desc":
      "Controlled micro-injuries stimulate healing & collagen. Ideal for scars, pores, discoloration.",
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
    "services.gynecology.desc":
      "Complete gynecological care including routine checkups, screenings, and specialized treatments",
    "services.aesthetic": "Aesthetic Surgery",
    "services.aesthetic.desc": "Advanced cosmetic procedures with natural-looking results",
    "services.intimate": "Intimate Wellness",
    "services.intimate.desc": "Specialized treatments for intimate health and aesthetic concerns",
    "services.consultation": "Consultations",
    "services.consultation.desc": "Comprehensive consultations to discuss your health and aesthetic goals",

    // Doctor
    "doctor.title": "Meet the Doctor",
    "doctor.subtitle": "Dedicated to Your Health and Beauty",
    "doctor.bio":
      "The doctor possesses a strong academic and professional foundation, having graduated with a Doctor of Medicine from the Medical University of Plovdiv (2018). With extensive experience in General Surgical Oncology at Metaxa Cancer Hospital (participating in 250+ major/minor operations), she has developed precise surgical skills and sharp clinical judgment. She also holds specialized expertise in Hair Transplantation (participating in 600+ FUT-STRIP procedures), significantly strengthening her profile in Aesthetic Medicine. She is an active member of leading scientific associations (including the Hellenic Society of Plastic Reconstructive & Aesthetic Surgery) and consistently attends international and national congresses, demonstrating her commitment to continuous education and the adoption of the latest techniques.",
    "doctor.workExperience": "Work Experience",
    "doctor.education": "Education & Training",
    "doctor.personalSkills": "Personal Skills",
    "doctor.seminars": "Postgraduate Seminars & Programs",
    "doctor.associations": "Scientific Associations",
    "doctor.job1.title": "General Surgery Resident",
    "doctor.job1.place": "Department of Surgical Oncology, Metaxa Cancer Hospital, Piraeus, Greece",
    "doctor.job1.date": "02/12/2019 – Present",
    "doctor.job1.item1": "Participation in 250+ major and minor operations",
    "doctor.job1.item2": "Daily ward rounds and patient monitoring",
    "doctor.job1.item3": "Patient examination at outpatient clinic",
    "doctor.job1.item4": "Night shifts in Surgery, Urology & Covid-19 departments",
    "doctor.job2.title": "Internship in Hair Transplantation",
    "doctor.job2.place": "Metropolitan Hospital, Piraeus, Greece",
    "doctor.job2.date": "10/01/2018 – 01/12/2019",
    "doctor.job2.item1": "Participation in 600+ FUT-STRIP hair transplantation procedures",
    "doctor.edu1.title": "Doctor of Medicine (MD)",
    "doctor.edu1.place": "Medical University of Plovdiv, 2018, Plovdiv, Bulgaria",
    "doctor.edu2.title": "High School Diploma",
    "doctor.edu2.place": "École Jeanne D'Arc, 2007–2010, Piraeus, Greece",
    "doctor.skills.native": "Native Language: Greek",
    "doctor.skills.foreign": "Foreign Languages: English (B2), French (Sorbonne)",
    "doctor.seminar1": "10th Congress of Oncology – Municipality of Piraeus (2019)",
    "doctor.seminar2": "2nd Hellenic Annual Symposium in Marketing of Aesthetics (2019)",
    "doctor.seminar3": "4th Panhellenic Congress for Breast Cancer (2019)",
    "doctor.seminar4": "25th World Congress – International Society of Hair Restoration Surgery, Prague (2017)",
    "doctor.assoc1": "Medical Association of Piraeus (2019–Present)",
    "doctor.assoc2": "Hellenic Surgical Society (2019–Present)",
    "doctor.assoc3": "Hellenic Society of Plastic Reconstructive & Aesthetic Surgery (2019–Present)",
    "doctor.assoc4": "Hellenic Breast Surgery Society (2020–Present)",

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
    "footer.quickLinks": "Quick Links",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Map Section
    "map.title": "Map & Location",

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
    "nav.subtitle": "HAIR & BEAUTY CLINIC",

    // Sections
    "sections.beforeAfters": "Πριν & Μετά",

    // Hero
    "hero.title": "Experience the epitome of beauty and glow",
    "hero.subtitle": "Η υγεία και η ομορφιά σας είναι η προτεραιότητά μας.",
    "hero.cta": "Επικοινωνήστε",

    // Why Choose Us
    "why.title": "Γιατί να Επιλέξετε",
    "why.titleHighlight": "τη Dr. Valvis;",
    "why.subtitle": "Εμπιστευτείτε χιλιάδες ασθενείς, η Dr. Valvis παρέχει τεκμηριωμένη φροντίδα μέσω",
    "why.subtitleBold":
      "πολυεπιστημονικής εμπειρογνωμοσύνης, προηγμένης τεχνολογίας και ασθενοκεντρικών αποτελεσμάτων.",
    "why.specialized.title": "Εξειδικευμένη Ιατρική Φροντίδα",
    "why.specialized.desc": "Προηγμένη αισθητική φροντίδα από κορυφαίους ειδικούς.",
    "why.honesty.title": "Πολιτική Ειλικρίνειας",
    "why.honesty.desc": "Σαφής, ειλικρινής, τεκμηριωμένη καθοδήγηση.",
    "why.excellence.title": "Κέντρο Αριστείας",
    "why.excellence.desc": "Εστιασμένη, υψηλής ποιότητας φροντίδα σε κάθε ειδικότητα.",
    "why.innovation.title": "Καινοτομία με Αντίκτυπο",
    "why.innovation.desc": "Τεχνολογία που μεταμορφώνει τα αποτελέσματα των ασθενών.",
    "why.cta": "Κλείστε Ραντεβού",

    // Clinic Section
    "clinic.title": "Η Κλινική μας",
    "clinic.image.alt": "Εσωτερικό κλινικής",
    "clinic.prev": "Προηγούμενη εικόνα",
    "clinic.next": "Επόμενη εικόνα",

    // Client Shorts Section
    "clients.title.prefix": "ΟΙ",
    "clients.title.highlight": "ΠΕΛΑΤΕΣ",
    "clients.title.suffix": "ΜΑΣ",
    "clients.prev": "Προηγούμενο βίντεο",
    "clients.next": "Επόμενο βίντεο",
    "clients.video.alt": "Βίντεο μαρτυρίας πελάτη",
    "clients.cta": "Κλείστε Ραντεβού",
    "clients.testimonial.satisfied": "Ικανοποιημένη Πελάτισσα",
    "clients.testimonial.treatment": "Θεραπεία Botox",
    "clients.testimonial.results": "Εκπληκτικά Αποτελέσματα",
    "clients.testimonial.experience": "Υπέροχη Εμπειρία",
    "clients.testimonial.care": "Επαγγελματική Φροντίδα",
    "clients.testimonial.recommend": "Συστήνω Ανεπιφύλακτα",

    // Services - Main
    "services.title": "Υπηρεσίες",
    "services.subtitle": "Ολοκληρωμένες αισθητικές θεραπείες προσαρμοσμένες στις ανάγκες σας",
    "services.learnMore": "Μάθετε περισσότερα",
    "services.viewAll": "Δείτε Όλες τις Υπηρεσίες",

    // Service Categories
    "services.category.injectable": "Ενέσιμες Θεραπείες Προσώπου",
    "services.category.injectable.desc":
      "Προηγμένες ενέσιμες λύσεις για αποκατάσταση όγκου, μείωση ρυτίδων και ανάπλαση προσώπου.",
    "services.category.renewal": "Ανανέωση & Ενυδάτωση Δέρματος",
    "services.category.renewal.desc": "Ιατρικές θεραπείες για λαμπερό, νεανικό και βαθιά ενυδατωμένο δέρμα.",
    "services.category.body": "Θεραπείες Σώματος",
    "services.category.body.desc": "Στοχευμένες θεραπείες για σμίλευση σώματος, αποτρίχωση και λείανση δέρματος.",

    // Injectable Face Treatments
    "services.hyaluronic.title": "Υαλουρονικό Οξύ – Fillers",
    "services.hyaluronic.desc":
      "Ενέσιμη θεραπεία για αποκατάσταση όγκου, ενίσχυση χαρακτηριστικών και βελτίωση ελαστικότητας.",
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
    "services.skinpen.desc":
      "Δημιουργεί μικροτραυματισμούς ενεργοποιώντας επούλωση & παραγωγή κολλαγόνου. Ιδανικό για ουλές, πόρους, δυσχρωμίες.",
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
    "services.cellulite.desc":
      "Ενέσιμες θεραπείες που βελτιώνουν μικροκυκλοφορία & λειαίνουν την όψη φλοιού πορτοκαλιού.",

    // Old services (kept for compatibility)
    "services.gynecology": "Γυναικολογία",
    "services.gynecology.desc":
      "Πλήρης γυναικολογική φροντίδα συμπεριλαμβανομένων ρουτίνας ελέγχων και εξειδικευμένων θεραπειών",
    "services.aesthetic": "Αισθητική Χειρουργική",
    "services.aesthetic.desc": "Προηγμένες αισθητικές επεμβάσεις με φυσικά αποτελέσματα",
    "services.intimate": "Ευεξία Ευαίσθητων Περιοχών",
    "services.intimate.desc": "Εξειδικευμένες θεραπείες για την υγεία και αισθητική των ευαίσθητων περιοχών",
    "services.consultation": "Συμβουλευτική",
    "services.consultation.desc": "Ολοκληρωμένες συμβουλές για να συζητήσουμε τους στόχους υγείας και ομορφιάς σας",

    // Doctor
    "doctor.title": "Γνωρίστε τη Γιατρό",
    "doctor.subtitle": "Αφοσιωμένη στην Υγεία και Ομορφιά σας",
    "doctor.bio":
      "Η ιατρός φέρει μια ισχυρή ακαδημαϊκή και επαγγελματική βάση, έχοντας αποφοιτήσει από την Ιατρική Σχολή του Plovdiv (2018). Με πολυετή εμπειρία στην Γενική Χειρουργική Ογκολογία στο Αντικαρκινικό Νοσοκομείο Μεταξά (με συμμετοχή σε 250+ μείζονες/ελάσσονες επεμβάσεις), έχει αναπτύξει ακριβείς χειρουργικές δεξιότητες και οξεία κλινική κρίση. Διαθέτει επίσης εξειδικευμένη εμπειρία στην Μεταμόσχευση Μαλλιών (με συμμετοχή σε 600+ επεμβάσεις FUT-STRIP), ενισχύοντας το προφίλ της στον τομέα της Αισθητικής Ιατρικής. Είναι ενεργό μέλος σε κορυφαίες επιστημονικές εταιρείες (όπως η Ελληνική Εταιρεία Πλαστικής Επανορθωτικής & Αισθητικής Χειρουργικής) και συμμετέχει ανελλιπώς σε διεθνή και πανελλήνια συνέδρια, διασφαλίζοντας την προσήλωσή της στη συνεχή εκπαίδευση και την υιοθέτηση των πιο σύγχρονων τεχνικών.",
    "doctor.workExperience": "Επαγγελματική Εμπειρία",
    "doctor.education": "Εκπαίδευση & Σπουδές",
    "doctor.personalSkills": "Γλωσσικές & Προσωπικές Δεξιότητες",
    "doctor.seminars": "Μεταπτυχιακά Σεμινάρια & Συνέδρια",
    "doctor.associations": "Επιστημονικές Εταιρείες",
    "doctor.job1.title": "Ειδικευόμενη Γενικής Χειρουργικής",
    "doctor.job1.place": "Τμήμα Χειρουργικής Ογκολογίας, Αντικαρκινικό Νοσοκομείο Μεταξά, Πειραιάς",
    "doctor.job1.date": "02/12/2019 – σήμερα",
    "doctor.job1.item1": "Συμμετοχή σε 250+ μείζονες & ελάσσονες επεμβάσεις",
    "doctor.job1.item2": "Κλινικές επισκέψεις – παρακολούθηση ασθενών",
    "doctor.job1.item3": "Εξέταση ασθενών στο εξωτερικό ιατρείο",
    "doctor.job1.item4": "Εφημερίες στα τμήματα Χειρουργικής, Ουρολογίας & Covid-19",
    "doctor.job2.title": "Πρακτική Άσκηση στη Μεταμόσχευση Μαλλιών",
    "doctor.job2.place": "Metropolitan Hospital, Πειραιάς",
    "doctor.job2.date": "10/01/2018 – 01/12/2019",
    "doctor.job2.item1": "Συμμετοχή σε 600+ μεταμοσχεύσεις μαλλιών FUT-STRIP",
    "doctor.edu1.title": "Ιατρική Σχολή – Doctor of Medicine (MD)",
    "doctor.edu1.place": "Medical University of Plovdiv, 2018 – Πλόβντιβ, Βουλγαρία",
    "doctor.edu2.title": "Απολυτήριο Λυκείου",
    "doctor.edu2.place": "École Jeanne D'Arc, 2007–2010, Πειραιάς",
    "doctor.skills.native": "Μητρική γλώσσα: Ελληνικά",
    "doctor.skills.foreign": "Ξένες γλώσσες: Αγγλικά (B2), Γαλλικά (Sorbonne)",
    "doctor.seminar1": "10ο Συνέδριο Ογκολογίας – Δήμος Πειραιά (2019)",
    "doctor.seminar2": "2nd Hellenic Annual Symposium in Marketing of Aesthetics (2019)",
    "doctor.seminar3": "4ο Πανελλήνιο Συνέδριο για τον Καρκίνο του Μαστού (2019)",
    "doctor.seminar4": "25th World Congress – International Society of Hair Restoration Surgery, Πράγα (2017)",
    "doctor.assoc1": "Ιατρικός Σύλλογος Πειραιά (2019–σήμερα)",
    "doctor.assoc2": "Ελληνική Χειρουργική Εταιρεία (2019–σήμερα)",
    "doctor.assoc3": "Ελληνική Εταιρεία Πλαστικής, Επανορθωτικής & Αισθητικής Χειρουργικής (2019–σήμερα)",
    "doctor.assoc4": "Ελληνική Εταιρεία Χειρουργικής Μαστού (2020–σήμερα)",

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
    "footer.quickLinks": "Γρήγοροι Σύνδεσμοι",
    "footer.rights": "Όλα τα δικαιώματα διατηρούνται.",
    "footer.privacy": "Πολιτική Απορρήτου",
    "footer.terms": "Όροι Χρήσης",

    // Map Section
    "map.title": "Χάρτης & Τοποθεσία",

    // CTA
    "cta.ready": "Έτοιμοι να Ξεκινήσετε;",
    "cta.description":
      "Κλείστε μια συμβουλευτική για να συζητήσουμε τους αισθητικούς σας στόχους σε ένα άνετο, ιδιωτικό περιβάλλον.",
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
