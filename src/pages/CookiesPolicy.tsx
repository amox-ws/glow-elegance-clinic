import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const CookiesPolicy = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'el' 
      ? 'Πολιτική Cookies – Dr. Valvis Clinic'
      : 'Cookies Policy – Dr. Valvis Clinic';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Μάθετε πώς η Dr. Valvis Clinic χρησιμοποιεί cookies στον ιστότοπό της.'
        : 'Learn how Dr. Valvis Clinic uses cookies on its website.'
      );
    }
  }, [language]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="gradient-cream py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              {language === 'el' ? 'Πολιτική Cookies' : 'Cookies Policy'}
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
                  Αυτή η σελίδα εξηγεί πώς χρησιμοποιούμε cookies στον ιστότοπό μας.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">Λειτουργικά / Απαραίτητα Cookies</h2>
                
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">sidebar:state</h3>
                  <p className="text-muted-foreground">
                    Αποθηκεύει εάν η πλευρική μπάρα/πλοήγηση είναι ανοιχτή. Διάρκεια: 7 ημέρες.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">cookie_consent</h3>
                  <p className="text-muted-foreground">
                    Αποθηκεύει τις προτιμήσεις σας για τα cookies. Διάρκεια: 365 ημέρες.
                  </p>
                </div>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">Cookies Τρίτων</h2>
                
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">Google Maps (iframe)</h3>
                  <p className="text-muted-foreground">
                    Φορτώνει τη λειτουργία χάρτη. Η Google μπορεί να αποθηκεύσει cookies για απόδοση και αναλυτικά στοιχεία.
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-muted-foreground mb-8">
                  This page explains how we use cookies on our website.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">Functional / Necessary Cookies</h2>
                
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">sidebar:state</h3>
                  <p className="text-muted-foreground">
                    Stores if the sidebar/navigation is open. Duration: 7 days.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">cookie_consent</h3>
                  <p className="text-muted-foreground">
                    Stores your cookie preferences. Duration: 365 days.
                  </p>
                </div>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">Third-Party Cookies</h2>
                
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">Google Maps (iframe)</h3>
                  <p className="text-muted-foreground">
                    Loads map functionality. Google may store cookies for performance and analytics.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;