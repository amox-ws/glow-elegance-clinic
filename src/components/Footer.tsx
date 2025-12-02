import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-gradient-warm mb-4">Dr.Valvis</h3>
            <p className="text-muted-foreground text-sm">{t("hero.subtitle")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.home")}
              </Link>
              <Link to="/doctor" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.doctor")}
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.services")}
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("contact.info")}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Kountouriotou 127, Piraeus, Greece 18532</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+306951944489" className="hover:text-primary transition-colors">
                  +30 6951944489
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Instagram className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://www.instagram.com/valvisbeautyclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @valvisbeautyclinic
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Dr.Valvis. {t("footer.rights")}
          </p>
          <div className="mt-2 space-x-4">
            <Link to="#" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
