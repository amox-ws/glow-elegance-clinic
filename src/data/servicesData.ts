// Service data for the Services page - all 16 services across 3 categories

export interface ServiceItem {
  id: string;
  title: { en: string; el: string };
  shortIntro: { en: string; el: string };
  longContent: { en: string; el: string };
}

export interface ServiceCategory {
  id: string;
  title: { en: string; el: string };
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'injectable-face',
    title: {
      en: 'Injectable Facial Treatments',
      el: 'ΕΝΕΣΙΜΕΣ ΘΕΡΑΠΕΙΕΣ ΠΡΟΣΩΠΟΥ'
    },
    services: [
      {
        id: 'hyaluronic-fillers',
        title: { en: 'Hyaluronic Acid Fillers', el: 'Υαλουρονικό Οξύ – Fillers' },
        shortIntro: {
          en: 'Restore lost volume and enhance your natural facial features.',
          el: 'Αποκατάσταση όγκου και ανάδειξη των φυσικών χαρακτηριστικών του προσώπου.'
        },
        longContent: {
          en: 'Injectable hyaluronic acid that restores facial volume, refines contour and improves tissue elasticity. Treatment areas: lips, facial contouring, mid-face/cheeks, chin, jawline and under-eye hollow.',
          el: 'Ενέσιμη θεραπεία που στοχεύει στην αποκατάσταση του όγκου, την ενίσχυση των φυσικών χαρακτηριστικών του προσώπου και τη βελτίωση της ελαστικότητας των ιστών. Περιοχές εφαρμογής: Χείλη, Contouring προσώπου, Ζυγωματικά (μεσοπρόσωπο), Πηγούνι, Γωνίες γνάθου, Κάτω οφθαλμική κοιλότητα (under-eye).'
        }
      },
      {
        id: 'botox',
        title: { en: 'Botox – Anti-wrinkle Treatment', el: 'Botox – Αντιρυτιδική Αγωγή' },
        shortIntro: {
          en: 'Softens expression lines for a smoother, refreshed look.',
          el: 'Μείωση των δυναμικών ρυτίδων για λείο και ξεκούραστο αποτέλεσμα.'
        },
        longContent: {
          en: 'Botulinum toxin type A relaxes specific facial muscles to reduce dynamic wrinkles while keeping expression natural. Treatment areas: face, neck, underarms and palms (for excessive sweating).',
          el: 'Το Botox έχει ως αποτέλεσμα τη μείωση των δυναμικών ρυτίδων που προκαλούνται από τις εκφράσεις. Πρόκειται για βοτουλινική τοξίνη τύπου Α, η οποία αναστέλλει προσωρινά τη σύσπαση των μυών, προσφέροντας λείο, ξεκούραστο και φυσικό αποτέλεσμα. Περιοχές εφαρμογής: Πρόσωπο, λαιμός, μασχάλες & παλάμες (για μείωση υπεριδρωσίας).'
        }
      },
      {
        id: 'skin-boosters',
        title: { en: 'Skin Boosters', el: 'Skin Boosters' },
        shortIntro: {
          en: 'Deep hydration and radiance from within.',
          el: 'Βαθιά ενυδάτωση και λάμψη εκ των έσω.'
        },
        longContent: {
          en: 'Low molecular weight injectable solutions delivered into the deeper skin layers to improve hydration, stimulate fibroblasts and boost collagen for glow and firmness.',
          el: 'Ενέσιμα διαλύματα χαμηλού μοριακού βάρους που εγχέονται στα βαθύτερα στρώματα του δέρματος. Βελτιώνουν την ενυδάτωση, ενεργοποιούν τους ινοβλάστες και ενισχύουν την παραγωγή κολλαγόνου, προσφέροντας λάμψη και σύσφιξη.'
        }
      },
      {
        id: 'facial-mesotherapy',
        title: { en: 'Facial Mesotherapy', el: 'Μεσοθεραπείες Προσώπου' },
        shortIntro: {
          en: 'Personalized cocktails for skin regeneration and density.',
          el: 'Εξατομικευμένα κοκτέιλ για αναζωογόνηση και πυκνότητα δέρματος.'
        },
        longContent: {
          en: 'Facial mesotherapy delivers micro-injections of active ingredients (vitamins, peptides, amino acids, hyaluronic acid, antioxidants) directly into the dermis to stimulate regeneration, increase density and improve glow, hydration and anti-ageing. Includes PRP, nucleotide-rich formulas, vitamin cocktails for radiance, hyaluronic acid mesotherapy, antioxidant blends, peptides and amino acids.',
          el: 'Η μεσοθεραπεία χρησιμοποιεί μικροενέσεις με δραστικά συστατικά (βιταμίνες, πεπτίδια, αμινοξέα, υαλουρονικό, αντιοξειδωτικά) που δρουν στοχευμένα στο χόριο. Στόχος είναι η κυτταρική αναγέννηση, η ενίσχυση της δερματικής πυκνότητας και η συνολική βελτίωση λάμψης, αντιγήρανσης και ενυδάτωσης. Ενδεικτικοί τύποι: Αυτόλογη Μεσοθεραπεία (PRP), μεσοθεραπείες πλούσιες σε νουκλεοτίδια, βιταμινούχες φόρμουλες για λάμψη, μεσοθεραπεία υαλουρονικού, αντιοξειδωτικά κοκτέιλ, μεσοθεραπεία με πεπτίδια & αμινοξέα.'
        }
      },
      {
        id: 'nanosoft-eye',
        title: { en: 'NanoSoft Eye Mesotherapy', el: 'Μεσοθεραπεία Ματιών NanoSoft' },
        shortIntro: {
          en: 'Targeted care for dark circles and fine lines.',
          el: 'Στοχευμένη φροντίδα για μαύρους κύκλους και λεπτές γραμμές.'
        },
        longContent: {
          en: 'Micro-needle treatment that delivers specific formulas around the eyes to reduce dark circles and fine lines while improving micro-circulation.',
          el: 'Θεραπεία με μικρο-βελόνες που επιτρέπει την έγχυση ειδικών φόρμουλων στην περιοχή των ματιών. Μειώνει μαύρους κύκλους και λεπτές γραμμές και βελτιώνει τη μικροκυκλοφορία.'
        }
      },
      {
        id: 'filler-dissolving',
        title: { en: 'Hyaluronic Acid Dissolving', el: 'Διάλυση Υαλουρονικού Οξέως' },
        shortIntro: {
          en: 'Safe correction of undesired fillers.',
          el: 'Ασφαλής διόρθωση ανεπιθύμητων fillers.'
        },
        longContent: {
          en: 'Hyaluronidase is used to break down existing hyaluronic acid filler in cases of overcorrection, asymmetry or unsatisfactory results, especially in areas such as the lips.',
          el: 'Η διάλυση του υαλουρονικού οξέος επιτυγχάνεται με τη χρήση υαλουρονιδάσης, ενός ενζύμου που διασπά το υαλουρονικό. Χρησιμοποιείται σε περιπτώσεις ανεπιθύμητου υαλουρονικού για διόρθωση κακής εφαρμογής, ασυμμετριών, παλαιών fillers ή υπερβολικού όγκου (ιδίως στα χείλη).'
        }
      },
      {
        id: 'facial-lipolysis',
        title: { en: 'Facial Lipolysis', el: 'Λιποδιάλυση Προσώπου' },
        shortIntro: {
          en: 'Targeted reduction of localized facial fat.',
          el: 'Στοχευμένη μείωση τοπικού λίπους στο πρόσωπο.'
        },
        longContent: {
          en: 'Injectable solution that breaks down fat cells to refine areas of localized fat on the face and improve contour.',
          el: 'Ενέσιμη θεραπεία που διαλύει τα λιποκύτταρα, μειώνοντας τοπικό λίπος στο πρόσωπο και χαρίζοντας βελτιωμένο σχήμα.'
        }
      },
      {
        id: 'submental-lipolysis',
        title: { en: 'Submental Lipolysis', el: 'Λιποδιάλυση Υπογενείδιου Λίπους (Προγούλι)' },
        shortIntro: {
          en: 'Define the contour under the chin.',
          el: 'Ορισμός στο περίγραμμα κάτω από το πηγούνι.'
        },
        longContent: {
          en: 'Injectable lipolysis that targets the fat under the chin (double chin), reducing volume and sharpening the jawline.',
          el: 'Ενέσιμη θεραπεία που διαλύει τα λιποκύτταρα στην περιοχή του προγουλιού, μειώνοντας τοπικό λίπος και χαρίζοντας πιο ορισμένο περίγραμμα προσώπου.'
        }
      },
      {
        id: 'facial-tightening',
        title: { en: 'Facial Tightening', el: 'Σύσφιξη Προσώπου' },
        shortIntro: {
          en: 'Collagen-stimulating solutions for a firmer facial contour.',
          el: 'Ενεργοποίηση κολλαγόνου για πιο σφριγηλό οβάλ.'
        },
        longContent: {
          en: 'Biostimulatory injectables that boost collagen and elastin production to improve laxity and redefine the facial oval.',
          el: 'Ενέσιμες θεραπείες με βιοδιεγερτικά που ενεργοποιούν την παραγωγή κολλαγόνου και ελαστίνης, βελτιώνοντας τη χαλάρωση στην περιοχή του προσώπου.'
        }
      }
    ]
  },
  {
    id: 'skin-renewal',
    title: {
      en: 'Skin Renewal & Hydration',
      el: 'ΘΕΡΑΠΕΙΕΣ ΑΝΑΝΕΩΣΗΣ & ΕΝΥΔΑΤΩΣΗΣ'
    },
    services: [
      {
        id: 'skinpen',
        title: { en: 'SkinPen Microneedling', el: 'SkinPen – Μικροβελόνες' },
        shortIntro: {
          en: 'Clinically proven collagen induction with controlled micro-injuries.',
          el: 'Κλινικά τεκμηριωμένη θεραπεία αναδόμησης με μικροτραυματισμούς.'
        },
        longContent: {
          en: 'SkinPen uses advanced microneedling technology to create controlled micro-injuries, triggering natural healing and new collagen formation. Ideal for acne scars, enlarged pores, discoloration and dull skin.',
          el: 'Το SkinPen είναι συσκευή μικροβελονισμού που δημιουργεί ελεγχόμενους μικροτραυματισμούς στο δέρμα, ενεργοποιώντας τη φυσική επούλωση και την παραγωγή νέου κολλαγόνου. Ιδανική για ουλές ακμής, διεσταλμένους πόρους, δυσχρωμίες και θαμπή όψη.'
        }
      },
      {
        id: 'fractional-laser',
        title: { en: 'Fractional Laser', el: 'Fractional Laser' },
        shortIntro: {
          en: 'Targeted resurfacing for wrinkles, scars and pigmentation.',
          el: 'Στοχευμένη λείανση ρυτίδων, ουλών και δυσχρωμιών.'
        },
        longContent: {
          en: 'Fractional laser treats micro-columns of skin, improving wrinkles, scars and pigment while leaving surrounding tissue intact for faster healing.',
          el: 'Η κλασματική τεχνολογία laser (fractional laser) βελτιώνει ρυτίδες, ουλές, δυσχρωμίες και σημάδια. Στοχεύει μικρο-στήλες δέρματος, προάγοντας ταχεία επούλωση ενώ αφήνει άθικτο τον ιστό ανάμεσά τους.'
        }
      },
      {
        id: 'microneedling-face',
        title: { en: 'Facial Microneedling', el: 'Micro-needling Προσώπου' },
        shortIntro: {
          en: 'Improves skin density, texture and fine lines.',
          el: 'Ενίσχυση πυκνότητας και υφής του δέρματος.'
        },
        longContent: {
          en: 'Medical microneedling technique that boosts skin density and softens fine lines and texture using a professional device for safe, controlled results.',
          el: 'Τεχνική μικροβελονισμού που ενισχύει την πυκνότητα του δέρματος και βελτιώνει λεπτές γραμμές και υφή. Στο ιατρείο μας πραγματοποιείται με εξειδικευμένη συσκευή ιατρικού microneedling για ελεγχόμενο και ασφαλές αποτέλεσμα.'
        }
      },
      {
        id: 'microneedling-scalp',
        title: { en: 'Scalp Microneedling', el: 'Micro-needling Τριχωτού Κεφαλής' },
        shortIntro: {
          en: 'Stimulates hair follicles and supports hair growth.',
          el: 'Ενεργοποίηση θυλάκων και ενίσχυση της τριχοφυΐας.'
        },
        longContent: {
          en: 'Scalp microneedling boosts blood flow and activates hair follicles, helping improve hair density and quality.',
          el: 'Το micro-needling στο τριχωτό της κεφαλής διεγείρει τη ροή αίματος και ενεργοποιεί τους θύλακες, ενισχύοντας την ανάπτυξη των μαλλιών.'
        }
      }
    ]
  },
  {
    id: 'body-treatments',
    title: {
      en: 'Body Services',
      el: 'ΥΠΗΡΕΣΙΕΣ ΣΩΜΑΤΟΣ'
    },
    services: [
      {
        id: 'laser-hair-removal',
        title: { en: 'Body Laser Hair Removal', el: 'Laser Αποτρίχωση Σώματος' },
        shortIntro: {
          en: 'Long-term hair reduction with medical Alexandrite laser.',
          el: 'Μόνιμη μείωση τριχοφυΐας με ιατρικό laser Αλεξανδρίτη.'
        },
        longContent: {
          en: 'Medical-grade Alexandrite laser that provides progressive yet lasting reduction of unwanted hair with high safety for the skin.',
          el: 'Μέθοδος με ιατρικό laser Αλεξανδρίτη που προσφέρει σταδιακή αλλά μόνιμη μείωση της τριχοφυΐας, με ασφάλεια για το δέρμα.'
        }
      },
      {
        id: 'body-lipolysis',
        title: { en: 'Body Lipolysis', el: 'Λιποδιάλυση Σώματος' },
        shortIntro: {
          en: 'Targets stubborn localized fat deposits.',
          el: 'Στοχευμένη αντιμετώπιση επίμονων λιποαποθηκών.'
        },
        longContent: {
          en: 'Injectable treatment that breaks down localized fat in areas resistant to diet and exercise.',
          el: 'Ενέσιμη μέθοδος που διαλύει τοπικό λίπος, ιδανική για περιοχές με επίμονες λιποαποθήκες που δεν ανταποκρίνονται εύκολα σε δίαιτα και άσκηση.'
        }
      },
      {
        id: 'cellulite-treatments',
        title: { en: 'Cellulite Treatments', el: 'Θεραπείες Κυτταρίτιδας' },
        shortIntro: {
          en: 'Smooths orange-peel texture and improves micro-circulation.',
          el: 'Λείανση όψης φλοιού πορτοκαλιού και βελτίωση μικροκυκλοφορίας.'
        },
        longContent: {
          en: 'Injectable protocols designed to smooth the skin surface, reduce visible cellulite and enhance local blood flow.',
          el: 'Ενέσιμες θεραπείες που λειαίνουν την επιφάνεια του δέρματος, μειώνουν την κυτταρίτιδα και βελτιώνουν τη μικροκυκλοφορία.'
        }
      }
    ]
  }
];
