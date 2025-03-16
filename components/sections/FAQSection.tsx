
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هو نظام التعاون بالذكاء الاصطناعي؟",
    answer: "يجمع نظام التعاون بالذكاء الاصطناعي عدة وكلاء ذكاء اصطناعي متخصصين في منصة واحدة للعمل معًا على مهامك. فكر فيه كوجود فريق من خبراء الذكاء الاصطناعي تحت تصرفك، كل منهم يمتلك مهارات مختلفة تكمل بعضها البعض."
  },
  {
    question: "كيف يتعاون وكلاء الذكاء الاصطناعي؟",
    answer: "تم تصميم وكلاء الذكاء الاصطناعي لدينا للتواصل مع بعضهم البعض، ومشاركة المعلومات، والبناء على مخرجات بعضهم البعض. عندما تطرح سؤالاً، يقوم وكلاء متعددون بتخصصات مختلفة بتحليله وتوليد الإجابة الأكثر شمولاً بشكل تعاوني."
  },
  {
    question: "هل بياناتي آمنة مع منصتكم؟",
    answer: "بالتأكيد. نحن نوظف تدابير أمنية على مستوى المؤسسات لحماية بياناتك. جميع المحادثات مشفرة، ولا نستخدم بياناتك أبدًا لتدريب نماذجنا دون إذن صريح. نحن نمتثل للوائح GDPR وCCPA وغيرها من لوائح الخصوصية."
  },
  {
    question: "هل يمكنني تخصيص وكلاء الذكاء الاصطناعي في فريقي؟",
    answer: "نعم! في خطتنا الاحترافية، يمكنك إنشاء فرق مخصصة من وكلاء الذكاء الاصطناعي مصممة خصيصًا لتلبية احتياجاتك المحددة. على سبيل المثال، يمكنك إنشاء فريق تسويق مع متخصصين في وسائل التواصل الاجتماعي وكتابة المحتوى وتحسين محركات البحث."
  },
  {
    question: "هل أحتاج إلى معرفة تقنية لاستخدام المنصة؟",
    answer: "لا على الإطلاق. تم تصميم منصتنا لتكون بديهية وسهلة الاستخدام. إذا كنت تستطيع استخدام تطبيق دردشة، يمكنك استخدام نظام التعاون بالذكاء الاصطناعي لدينا. لا يوجد ترميز أو إعداد تقني مطلوب."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent">
            <span className="text-xs font-medium text-foreground/70">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            الأسئلة المتكررة
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-[700px]">
            كل ما تحتاج معرفته عن منصة التعاون بالذكاء الاصطناعي
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
