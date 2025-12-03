import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/doctor', label: t('nav.doctor') },
    { to: '/services', label: t('nav.services') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* dV Monogram - matches reference design */}
            <svg 
              viewBox="0 0 70 70" 
              className="w-14 h-14 transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              {/* Diagonal line from top-left */}
              <line 
                x1="8" y1="8" 
                x2="28" y2="48" 
                stroke="#c9a96e" 
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Curved d stem */}
              <path 
                d="M8 58 Q8 25 32 10" 
                stroke="#c9a96e" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
              />
              {/* Vertical line (shared stem) */}
              <line 
                x1="32" y1="10" 
                x2="32" y2="62" 
                stroke="#c9a96e" 
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* V letter */}
              <path 
                d="M34 10 L48 55 L62 10" 
                stroke="#c9a96e" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Oval accent */}
              <ellipse 
                cx="20" 
                cy="48" 
                rx="13" 
                ry="15" 
                stroke="#c9a96e" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
            
            {/* Text */}
            <div className="flex flex-col">
              <span className="text-[1.65rem] font-heading font-semibold text-foreground tracking-wide leading-tight">
                Dr. Valvis
              </span>
              <span className="text-[0.55rem] tracking-[0.22em] text-muted-foreground uppercase leading-tight mt-0.5">
                {t('nav.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-all duration-300 relative group ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-muted' : ''}
                >
                  <span className="mr-2">🇬🇧</span> English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('el')}
                  className={language === 'el' ? 'bg-muted' : ''}
                >
                  <span className="mr-2">🇬🇷</span> Ελληνικά
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-muted' : ''}
                >
                  <span className="mr-2">🇬🇧</span> English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('el')}
                  className={language === 'el' ? 'bg-muted' : ''}
                >
                  <span className="mr-2">🇬🇷</span> Ελληνικά
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
