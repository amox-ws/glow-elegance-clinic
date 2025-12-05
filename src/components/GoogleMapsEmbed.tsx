import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie_consent';

interface GoogleMapsEmbedProps {
  src: string;
  height?: string | number;
  className?: string;
  title?: string;
}

interface CookieConsent {
  type: 'all' | 'essential' | 'custom';
  thirdParty?: boolean;
  timestamp: number;
}

const GoogleMapsEmbed = ({ src, height = 450, className = '', title = 'Location Map' }: GoogleMapsEmbedProps) => {
  const { language } = useLanguage();
  const [canLoadMap, setCanLoadMap] = useState<boolean | null>(null);

  const checkCookieConsent = () => {
    const consentStr = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentStr) {
      setCanLoadMap(false);
      return;
    }
    
    try {
      const consent: CookieConsent = JSON.parse(consentStr);
      // Allow map if: accepted all, or custom with thirdParty true
      if (consent.type === 'all') {
        setCanLoadMap(true);
      } else if (consent.type === 'essential') {
        setCanLoadMap(false);
      } else if (consent.type === 'custom') {
        setCanLoadMap(consent.thirdParty === true);
      } else {
        setCanLoadMap(false);
      }
    } catch {
      setCanLoadMap(false);
    }
  };

  useEffect(() => {
    checkCookieConsent();
    
    // Listen for cookie consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === COOKIE_CONSENT_KEY) {
        checkCookieConsent();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab updates
    const handleConsentUpdate = () => checkCookieConsent();
    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
    };
  }, []);

  const handleAcceptCookies = () => {
    const consent: CookieConsent = {
      type: 'all',
      thirdParty: true,
      timestamp: Date.now()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setCanLoadMap(true);
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const translations = {
    en: {
      message: 'To display the map, you must accept third-party cookies.',
      button: 'Accept Cookies'
    },
    el: {
      message: 'Για να εμφανιστεί ο χάρτης, πρέπει να αποδεχτείτε τα cookies τρίτων.',
      button: 'Αποδοχή Cookies'
    }
  };

  const t = translations[language];

  // Loading state
  if (canLoadMap === null) {
    return (
      <div 
        className={`w-full flex items-center justify-center bg-muted/30 rounded-2xl ${className}`}
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Blocked state - show placeholder
  if (!canLoadMap) {
    return (
      <div 
        className={`w-full flex flex-col items-center justify-center gap-4 bg-muted/20 backdrop-blur-sm border border-border rounded-2xl ${className}`}
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
          <MapPin className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground text-center max-w-sm px-4">
          {t.message}
        </p>
        <Button 
          onClick={handleAcceptCookies}
          className="gradient-warm text-white border-0 hover:opacity-90"
        >
          {t.button}
        </Button>
      </div>
    );
  }

  // Map loads normally
  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      style={{ border: 0, display: 'block', borderRadius: '1rem' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
      className={className}
    />
  );
};

export default GoogleMapsEmbed;
