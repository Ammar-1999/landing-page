import { memo, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { m as motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "سجّل وأنشئ مجموعة",
    description:
      "سجل حساباً وأنشئ فريق الذكاء الاصطناعي الأول الخاص بك ببضع نقرات فقط.",
  },
  {
    number: "02",
    title: "عيّن وكلاء الذكاء الاصطناعي لفريقك",
    description:
      "أضف وكلاء الذكاء الاصطناعي المتخصصين إلى فريقك بناءً على احتياجات مشروعك المحددة.",
  },
  {
    number: "03",
    title: "ابدأ الدردشة واحصل على رؤى ذكية",
    description:
      "ابدأ التعاون مع فريق الذكاء الاصطناعي الخاص بك لحل المشكلات وتوليد الأفكار.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent">
            <span className="text-xs font-medium text-foreground/70">
              عملية بسيطة
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">كيف يعمل</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-[700px]">
            ابدأ مع فريق التعاون الذكي الخاص بك في ثلاث خطوات بسيطة فقط
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = memo(
  ({ step, index }: { step: (typeof steps)[number]; index: number }) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        key={index}
        className="relative group"
      >
        <div className="flex flex-col p-8 rounded-xl bg-white border border-border group-hover:border-primary/20 transition-all-300 h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="text-5xl font-bold text-primary/10">
              {step.number}
            </span>
            <CheckCircle2 className="w-6 h-6 text-primary/40" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
          <p className="text-foreground/70">{step.description}</p>
        </div>
        {/* Connecting line */}
        {index < steps.length - 1 && (
          <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-border z-10" />
        )}
      </motion.div>
    );
  }
);

StepCard.displayName = "StepCard";
export default HowItWorksSection;
