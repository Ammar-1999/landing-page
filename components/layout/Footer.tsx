
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: "سياسة الخصوصية", href: "#" },
    { label: "شروط الخدمة", href: "#" },
    { label: "اتصل بنا", href: "#" },
  ];
  
  const socialLinks = [
    { label: "تويتر", icon: Twitter, href: "#" },
    { label: "لينكدإن", icon: Linkedin, href: "#" },
    { label: "فيسبوك", icon: Facebook, href: "#" },
    { label: "انستغرام", icon: Instagram, href: "#" },
    { label: "جيثب", icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-accent/30 border-t border-border/20 pt-12 pb-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">سمارت تيم</h3>
            <p className="text-sm text-foreground/70 max-w-xs mb-4">
              فريق الذكاء الاصطناعي الشخصي الذي يساعدك على العمل بشكل أكثر ذكاءً، ويجمع بين وكلاء الذكاء الاصطناعي المتخصصين لتقديم نتائج استثنائية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={index} 
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-3">روابط سريعة</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-all-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-3">ابق على اطلاع</h4>
            <p className="text-sm text-foreground/70 mb-3">
              اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والميزات.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="sm" className="h-9">
                اشترك
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-foreground/60">
            © {currentYear} سمارت تيم. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
