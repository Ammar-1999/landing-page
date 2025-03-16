import { m as motion, useInView } from "framer-motion";
import { MessageCircle, Users, History, Bot } from "lucide-react";
import { memo, useRef } from "react";

const features = [
  {
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
    title: "دردشة متعددة الوكلاء",
    description:
      "احصل على ردود من خبراء الذكاء الاصطناعي المتخصصين في واجهة دردشة بديهية واحدة.",
  },
  {
    icon: <History className="w-10 h-10 text-primary" />,
    title: "محادثات دائمة",
    description:
      "احفظ واستعرض الدردشات السابقة في أي وقت. لن تفقد الأفكار القيمة مرة أخرى.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "فرق ذكاء اصطناعي مخصصة",
    description:
      "عيّن وكلاء الذكاء الاصطناعي لفرق مختلفة بناءً على احتياجات مشروعك المحددة.",
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "تعاون الذكاء الاصطناعي",
    description: "يعمل وكلاؤنا معًا لتحسين الإجابات وتقديم أفضل الحلول.",
  },
];

const FeaturesSection = memo(() => {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent">
            <span className="text-xs font-medium text-foreground/70">
              ميزات خاصة
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            لماذا تختار نظام التعاون الذكي الخاص بنا؟
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-[700px]">
            جرّب قوة عمل الفريق بالذكاء الاصطناعي مع هذه الميزات البارزة المصممة
            لتحسين سير عملك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} delay={index * 0.2} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

const FeatureCard = memo(
  ({
    feature,
    delay,
  }: {
    feature: (typeof features)[number];
    delay: number;
  }) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: delay }}
        className="flex flex-col items-center text-center p-6 rounded-xl bg-accent/50 hover:bg-accent/80"
      >
        <div className="p-3 mb-4 rounded-full bg-accent">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-foreground/70">{feature.description}</p>
      </motion.div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

FeaturesSection.displayName = "FeaturesSection";

export default FeaturesSection;
