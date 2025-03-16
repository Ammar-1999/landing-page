import { Button } from "@/components/ui/button";
import { m as motion } from "framer-motion";

interface HeroSectionProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

const HeroSection = ({ onGetStarted, onLogin }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex opacity-0 items-center px-3 py-1 mb-2 rounded-full bg-accent "
          >
            <span className="text-xs font-medium text-foreground/70">
              استعد لتحويل طريقة عملك
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: .3 }}
            className="text-4xl opacity-0 md:text-5xl lg:text-6xl font-bold tracking-tight text-balance "
          >
            فريقك الذكي الخاص – <br />
            <span className="text-gradient">اعمل بذكاء، لا بجهد!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: .5 }}
            className="max-w-[700px] opacity-0 text-lg md:text-xl text-foreground/70 text-balance "
          >
            استفد من وكلاء الذكاء الاصطناعي المتخصصين في التسويق وإنشاء المحتوى
            والتصميم - كل ذلك في محادثة واحدة!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: .7 }}
            className="flex flex-col opacity-0 sm:flex-row gap-4 mt-8"
          >
            <Button
              size="lg"
              className="text-md h-12 px-8"
              onClick={onGetStarted}
            >
              ابدأ مجانًا
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-md h-12 px-8"
              onClick={onLogin}
            >
              تسجيل الدخول
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="mt-20 opacity-0 relative w-full max-w-5xl mx-auto"
        >
          <div className="w-full aspect-[16/9] bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl overflow-hidden p-1 glass">
            <div className="w-full h-full bg-accent/30 rounded-xl flex items-center justify-center">
              <span className="text-gradient font-medium">
                معاينة واجهة الدردشة الذكية
              </span>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute -z-10 -top-[40%] -left-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft" />
          <div className="absolute -z-10 -bottom-[40%] -right-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
