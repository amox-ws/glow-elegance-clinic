import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const Terms = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'el' 
      ? 'Όροι Χρήσης – Dr. Valvis Clinic'
      : 'Terms of Service – Dr. Valvis Clinic';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Όροι χρήσης του ιστότοπου Dr. Valvis Clinic.'
        : 'Terms of Service for Dr. Valvis Clinic website.'
      );
    }
  }, [language]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="gradient-cream py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              {language === 'el' ? 'Όροι Χρήσης' : 'Terms of Service'}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-foreground">
            {language === 'el' ? (
              <>
                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Εύρος Υπηρεσιών</h2>
                <p className="text-muted-foreground mb-6">
                  Ο ιστότοπος της Dr. Valvis Clinic παρέχει πληροφορίες σχετικά με τις υπηρεσίες αισθητικής ιατρικής που προσφέρουμε. Οι πληροφορίες αυτές έχουν ενημερωτικό χαρακτήρα και δεν αποτελούν ιατρική συμβουλή.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. Αποποίηση Ευθύνης</h2>
                <p className="text-muted-foreground mb-6">
                  Παρόλο που καταβάλλουμε κάθε δυνατή προσπάθεια για την ακρίβεια των πληροφοριών, δεν εγγυόμαστε την πληρότητα ή την καταλληλότητά τους για συγκεκριμένους σκοπούς. Η χρήση του ιστοτόπου γίνεται με δική σας ευθύνη.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Περιορισμός Ευθύνης</h2>
                <p className="text-muted-foreground mb-6">
                  Η Dr. Valvis Clinic δεν ευθύνεται για οποιαδήποτε άμεση, έμμεση ή παρεπόμενη ζημία που προκύπτει από τη χρήση ή την αδυναμία χρήσης του ιστοτόπου.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Πνευματικά Δικαιώματα</h2>
                <p className="text-muted-foreground mb-6">
                  Όλο το περιεχόμενο του ιστοτόπου, συμπεριλαμβανομένων κειμένων, εικόνων και γραφικών, προστατεύεται από πνευματικά δικαιώματα. Απαγορεύεται η αναπαραγωγή χωρίς γραπτή άδεια.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">5. Τροποποιήσεις</h2>
                <p className="text-muted-foreground mb-6">
                  Διατηρούμε το δικαίωμα να τροποποιούμε τους παρόντες όρους ανά πάσα στιγμή. Οι αλλαγές τίθενται σε ισχύ με τη δημοσίευσή τους στον ιστότοπο.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">6. Επικοινωνία</h2>
                <p className="text-muted-foreground">Email: info@example.com</p>
                <p className="text-muted-foreground">Τηλέφωνο: +30 6951944489</p>
                <p className="text-muted-foreground">Διεύθυνση: Κουντουριώτου 127, Πειραιάς 18532</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Service Scope</h2>
                <p className="text-muted-foreground mb-6">
                  The Dr. Valvis Clinic website provides information about the aesthetic medicine services we offer. This information is for informational purposes only and does not constitute medical advice.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  While we make every effort to ensure the accuracy of information, we do not guarantee its completeness or suitability for specific purposes. Use of the website is at your own risk.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Dr. Valvis Clinic is not liable for any direct, indirect, or consequential damages arising from the use or inability to use the website.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Copyright</h2>
                <p className="text-muted-foreground mb-6">
                  All website content, including text, images, and graphics, is protected by copyright. Reproduction without written permission is prohibited.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">5. Modifications</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify these terms at any time. Changes take effect upon publication on the website.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">6. Contact</h2>
                <p className="text-muted-foreground">Email: info@example.com</p>
                <p className="text-muted-foreground">Phone: +30 6951944489</p>
                <p className="text-muted-foreground">Address: Kountouriotou 127, Piraeus 18532</p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;