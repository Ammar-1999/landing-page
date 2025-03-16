import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar = ({ onLoginClick, onSignupClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "المميزات", href: "#features" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "الأسعار", href: "#pricing" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between">
          {isMobile && (
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gradient">نجيد</span>
          </a>

          {!isMobile && (
            <div className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground opacity-70 hover:opacity-100 transition-all-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <Button onClick={onSignupClick}>ابدأ الان</Button>
        </div>

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="mt-4 border-t border-border/30 animate-fade-in bg-white rounded-lg py-6 px-5">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" size="sm" onClick={onLoginClick}>
                  تسجيل الدخول
                </Button>
                <Button size="sm" onClick={onSignupClick}>
                  التسجيل
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
