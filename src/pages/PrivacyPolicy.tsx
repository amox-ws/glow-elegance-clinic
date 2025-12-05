import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'el' 
      ? 'Πολιτική Απορρήτου – Dr. Valvis Clinic'
      : 'Privacy Policy – Dr. Valvis Clinic';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Μάθετε πώς η Dr. Valvis Clinic συλλέγει, επεξεργάζεται και προστατεύει τα προσωπικά δεδομένα σας σύμφωνα με τον GDPR.'
        : 'Learn how Dr. Valvis Clinic collects and protects your personal data under GDPR.'
      );
    }
  }, [language]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="gradient-cream py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              {language === 'el' ? 'Πολιτική Απορρήτου' : 'Privacy Policy'}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-foreground">
            {language === 'el' ? (
              <>
                <p className="text-muted-foreground mb-8">
                  Η παρούσα Πολιτική Απορρήτου εξηγεί πώς η κλινική Dr. Valvis Clinic συλλέγει, χρησιμοποιεί, αποθηκεύει και προστατεύει τα προσωπικά δεδομένα των επισκεπτών και χρηστών του ιστοτόπου.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Τι δεδομένα συλλέγουμε</h2>
                <p className="text-muted-foreground mb-4">Μέσω της φόρμας επικοινωνίας συλλέγουμε:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Ονοματεπώνυμο</li>
                  <li>Email</li>
                  <li>Τηλέφωνο</li>
                  <li>Μήνυμα (ενδέχεται να περιέχει πληροφορίες σχετικές με υγεία)</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. Πώς συλλέγονται τα δεδομένα</h2>
                <p className="text-muted-foreground mb-4">
                  Η αποστολή της φόρμας γίνεται μέσω της υπηρεσίας Formspree, η οποία επεξεργάζεται τα δεδομένα ως τρίτος πάροχος. Τα δεδομένα μεταφέρονται στους servers της Formspree για τη λήψη και παράδοση του μηνύματος.
                </p>
                <p className="text-muted-foreground mb-6">Δεν χρησιμοποιούμε τα δεδομένα για κανέναν άλλο σκοπό.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Νομική βάση επεξεργασίας</h2>
                <p className="text-muted-foreground mb-6">Η συγκατάθεσή σας, την οποία δίνετε κατά την υποβολή της φόρμας.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Χρόνος διατήρησης</h2>
                <p className="text-muted-foreground mb-6">Τα δεδομένα αποθηκεύονται για 12 μήνες εκτός αν ζητήσετε νωρίτερα τη διαγραφή τους.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">5. Δικαιώματα χρήστη (GDPR)</h2>
                <p className="text-muted-foreground mb-4">Έχετε δικαίωμα:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Πρόσβασης στα δεδομένα σας</li>
                  <li>Διόρθωσης</li>
                  <li>Διαγραφής</li>
                  <li>Περιορισμού επεξεργασίας</li>
                  <li>Φορητότητας</li>
                  <li>Ανάκλησης συγκατάθεσης</li>
                  <li>Υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">6. Κοινοποίηση σε τρίτους</h2>
                <p className="text-muted-foreground mb-6">
                  Δεν κοινοποιούμε, πουλάμε ή ανταλλάσσουμε τα δεδομένα σας. Μοναδικός τρίτος πάροχος: Formspree, αποκλειστικά για την παραλαβή του μηνύματος.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">7. Ασφάλεια δεδομένων</h2>
                <p className="text-muted-foreground mb-6">Λαμβάνουμε οργανωτικά και τεχνικά μέτρα για την προστασία των δεδομένων.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">8. Επικοινωνία για θέματα GDPR</h2>
                <p className="text-muted-foreground">Email: info@example.com</p>
                <p className="text-muted-foreground">Τηλέφωνο: +30 6951944489</p>
              </>
            ) : (
              <>
                <p className="text-muted-foreground mb-8">
                  This Privacy Policy describes how Dr. Valvis Clinic collects, processes, and protects personal data of website visitors and users.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. What data we collect</h2>
                <p className="text-muted-foreground mb-4">Through the contact form we collect:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Full Name</li>
                  <li>Email</li>
                  <li>Phone Number</li>
                  <li>Message (may include health-related information)</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. How data is collected</h2>
                <p className="text-muted-foreground mb-4">
                  Form submissions are processed by Formspree, a third-party service. Your data is transmitted to Formspree's servers to deliver the message safely.
                </p>
                <p className="text-muted-foreground mb-6">We do not use the data for any other purpose.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Legal basis for processing</h2>
                <p className="text-muted-foreground mb-6">Your consent, given during form submission.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Data retention</h2>
                <p className="text-muted-foreground mb-6">Data is stored for 12 months, unless you request deletion earlier.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">5. Your GDPR rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Access</li>
                  <li>Correction</li>
                  <li>Erasure</li>
                  <li>Restriction</li>
                  <li>Portability</li>
                  <li>Withdraw consent</li>
                  <li>File a complaint with your Data Protection Authority</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">6. Sharing with third parties</h2>
                <p className="text-muted-foreground mb-6">
                  We do not sell, trade, or share your data with any third party except: Formspree, for message delivery only.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">7. Data security</h2>
                <p className="text-muted-foreground mb-6">We apply technical and organizational measures to keep your data secure.</p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">8. GDPR Contact</h2>
                <p className="text-muted-foreground">Email: info@example.com</p>
                <p className="text-muted-foreground">Phone: +30 6951944489</p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;