import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const tiers = [
    {
      name: "مجاني",
      price: "0",
      description: "مثالي للبدء في التعاون مع الذكاء الاصطناعي",
      features: [
        "3 وكلاء ذكاء اصطناعي لكل فريق",
        "5 محادثات في اليوم",
        "سجل محادثات أساسي (7 أيام)",
        "وقت استجابة قياسي"
      ],
      cta: "ابدأ الآن",
      popular: false
    },
    {
      name: "احترافي",
      price: billingCycle === "monthly" ? "19" : "190",
      description: "مثالي للمحترفين والفرق الصغيرة",
      features: [
        "10 وكلاء ذكاء اصطناعي لكل فريق",
        "محادثات غير محدودة",
        "سجل محادثات متقدم (90 يوم)",
        "وقت استجابة ذو أولوية",
        "تدريب مخصص للذكاء الاصطناعي",
        "ميزات تعاون الفريق"
      ],
      cta: "الترقية إلى احترافي",
      popular: true
    },
    {
      name: "مؤسسات",
      price: billingCycle === "monthly" ? "49" : "490",
      description: "للمؤسسات ذات الاحتياجات المتقدمة",
      features: [
        "وكلاء ذكاء اصطناعي غير محدودين",
        "محادثات غير محدودة",
        "سجل محادثات دائم",
        "أسرع وقت استجابة",
        "تدريب متقدم للذكاء الاصطناعي",
        "ميزات تعاون الفريق",
        "الوصول إلى API",
        "دعم مخصص"
      ],
      cta: "اتصل بالمبيعات",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white" dir="rtl">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent">
            <span className="text-xs font-medium text-foreground/70">خطط الأسعار</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            أسعار بسيطة وشفافة
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-[700px]">
            اختر الخطة التي تناسب احتياجاتك. لا رسوم خفية أو مصاريف مفاجئة.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={cn("text-sm mr-3", billingCycle === "monthly" ? "font-semibold" : "text-foreground/70")}>شهري</span>
          <button 
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            role="switch"
            aria-checked={billingCycle === "yearly"}
          >
            <span 
              className={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-primary shadow-lg ring-0 transition-transform",
                billingCycle === "yearly" ? "-translate-x-5" : "-translate-x-1"
              )} 
            />
          </button>
          <span className={cn("text-sm ml-3", billingCycle === "yearly" ? "font-semibold" : "text-foreground/70")}>
            سنوي
            <span className="mr-2 inline-block text-green-500 font-medium">وفر 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col rounded-xl border transition-transform duration-500 opacity-0 animate-fade-in-up", 
                tier.popular ? 'border-primary shadow-lg relative !translate-y-0 !opacity-100' : 'border-border hover:border-primary/20',
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {tier.popular && (
                <div className="w-full text-center -mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    الأكثر شعبية
                  </span>
                </div>
              )}
              
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-foreground/70 mr-2">{tier.name !== "مجاني" ? billingCycle === "monthly" ? "/ شهرياً" : "/ سنوياً" : ""}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn("mt-auto", tier.popular ? '' : 'bg-white hover:bg-accent/50 text-foreground border border-border')}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
