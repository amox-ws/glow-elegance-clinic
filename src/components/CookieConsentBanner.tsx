import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'cookie_consent';

type ConsentType = 'all' | 'essential' | 'custom' | null;

const CookieConsentBanner = () => {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (type: ConsentType, thirdParty?: boolean) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ type, thirdParty, timestamp: Date.now() }));
    setShowBanner(false);
    setShowPreferences(false);
    // Dispatch event for same-tab listeners
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const handleAcceptAll = () => saveConsent('all', true);
  const handleRejectNonEssential = () => saveConsent('essential', false);
  const handleSavePreferences = () => {
    const thirdPartyCheckbox = document.getElementById('thirdParty') as HTMLInputElement;
    const thirdPartyEnabled = thirdPartyCheckbox?.checked ?? false;
    saveConsent('custom', thirdPartyEnabled);
  };

  if (!showBanner) return null;

  const translations = {
    en: {
      title: 'Cookie Consent',
      description: 'We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our use of cookies.',
      acceptAll: 'Accept All',
      rejectNonEssential: 'Reject Non-Essential',
      managePreferences: 'Manage Preferences',
      savePreferences: 'Save Preferences',
      learnMore: 'Learn more in our',
      cookiesPolicy: 'Cookies Policy',
      essential: 'Essential Cookies',
      essentialDesc: 'Required for basic website functionality.',
      thirdParty: 'Third-Party Cookies (Google Maps)',
      thirdPartyDesc: 'Used for map functionality and may include analytics.',
    },
    el: {
      title: 'Συγκατάθεση Cookies',
      description: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας. Συνεχίζοντας τη χρήση του ιστοτόπου, συμφωνείτε με τη χρήση cookies.',
      acceptAll: 'Αποδοχή όλων',
      rejectNonEssential: 'Απόρριψη μη απαραίτητων',
      managePreferences: 'Διαχείριση προτιμήσεων',
      savePreferences: 'Αποθήκευση προτιμήσεων',
      learnMore: 'Μάθετε περισσότερα στην',
      cookiesPolicy: 'Πολιτική Cookies',
      essential: 'Απαραίτητα Cookies',
      essentialDesc: 'Απαιτούνται για τη βασική λειτουργία του ιστοτόπου.',
      thirdParty: 'Cookies Τρίτων (Google Maps)',
      thirdPartyDesc: 'Χρησιμοποιούνται για τη λειτουργία χάρτη και μπορεί να περιλαμβάνουν αναλυτικά.',
    },
  };

  const t = translations[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto max-w-4xl">
        {!showPreferences ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              <p className="font-semibold text-foreground mb-1">{t.title}</p>
              <p>
                {t.description}{' '}
                <Link to="/cookies-policy" className="text-primary hover:underline">
                  {t.learnMore} {t.cookiesPolicy}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                onClick={handleAcceptAll}
                className="gradient-warm text-white border-0 hover:opacity-90 text-sm"
              >
                {t.acceptAll}
              </Button>
              <Button
                onClick={handleRejectNonEssential}
                variant="outline"
                className="text-sm"
              >
                {t.rejectNonEssential}
              </Button>
              <Button
                onClick={() => setShowPreferences(true)}
                variant="ghost"
                className="text-sm"
              >
                {t.managePreferences}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-foreground">{t.managePreferences}</p>
              <Button
                onClick={() => setShowPreferences(false)}
                variant="ghost"
                size="sm"
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <input type="checkbox" checked disabled className="mt-1" />
                <div>
                  <p className="font-medium text-foreground">{t.essential}</p>
                  <p className="text-sm text-muted-foreground">{t.essentialDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <input type="checkbox" defaultChecked className="mt-1" id="thirdParty" />
                <label htmlFor="thirdParty" className="cursor-pointer">
                  <p className="font-medium text-foreground">{t.thirdParty}</p>
                  <p className="text-sm text-muted-foreground">{t.thirdPartyDesc}</p>
                </label>
              </div>
            </div>
            
            <div className="flex gap-2 justify-end">
              <Button
                onClick={handleSavePreferences}
                className="gradient-warm text-white border-0 hover:opacity-90"
              >
                {t.savePreferences}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;