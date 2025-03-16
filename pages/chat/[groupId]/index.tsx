import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MoreHorizontal,
  Send,
  PaperclipIcon,
  Edit2,
  ArrowRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import ChatMessage from "@/components/chat-message";
import Head from "next/head";

// Sample data for demonstration
const sampleGroups = [
  {
    id: "1",
    name: "فريق التسويق",
    description:
      "وكلاء الذكاء الاصطناعي المتخصصون في استراتيجيات التسويق وإنشاء المحتوى",
    agents: ["تسويق", "كتابة محتوى", "تحسين محركات البحث"],
  },
  {
    id: "2",
    name: "مشروع التصميم",
    description: "مجموعة تركز على تقييم التصميم والتوجيه الإبداعي",
    agents: ["تصميم", "أبحاث تجربة المستخدم", "كتابة محتوى"],
  },
  {
    id: "3",
    name: "الدعم الفني",
    description: "استكشاف الأخطاء الفنية وإصلاحها ومساعدة التطوير",
    agents: ["تطوير", "عمليات التطوير", "اختبار الجودة"],
  },
];

// Sample conversation
const initialMessages = [
  {
    id: "1",
    content: "مرحبًا، أحتاج إلى مساعدة في حملة تسويقية لإطلاق منتجنا الجديد.",
    sender: "user",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "2",
    content:
      "أوصي بالبدء باستراتيجية شاملة للتواصل الاجتماعي تستهدف الفئة الديموغرافية الأساسية الخاصة بك. بناءً على اتجاهات الصناعة، يعمل محتوى الفيديو بشكل جيد بشكل خاص لإطلاق المنتجات.",
    sender: "تسويق",
    timestamp: new Date(Date.now() - 3500000).toISOString(),
  },
  {
    id: "3",
    content:
      "بالنسبة لاستراتيجية المحتوى الخاصة بك، ركز على إبراز القيمة الفريدة لمنتجك. قم بإنشاء مزيج من المحتوى التعليمي والترويجي لإشراك العملاء المحتملين.",
    sender: "كتابة محتوى",
    timestamp: new Date(Date.now() - 3400000).toISOString(),
  },
  {
    id: "4",
    content:
      "تأكد من تحسين صفحات الهبوط الخاصة بك باستخدام الكلمات الرئيسية ذات الصلة بمنتجك. أقترح التركيز على مصطلحات مثل [فئة المنتج] + الابتكار والفوائد والحلول.",
    sender: "تحسين محركات البحث",
    timestamp: new Date(Date.now() - 3300000).toISOString(),
  },
];

export default function ChatPage() {
  const router = useRouter();
  const { groupId } = router.query;
  const group = sampleGroups.find((g) => g.id === (groupId as string));

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI agent responses
    setTimeout(() => {
      if (group) {
        group.agents.forEach((agent, index) => {
          setTimeout(() => {
            const aiMessage = {
              id: (Date.now() + index).toString(),
              content: generateAIResponse(agent, inputValue),
              sender: agent,
              timestamp: new Date().toISOString(),
            };
            setMessages((prev) => [...prev, aiMessage]);
          }, (index + 1) * 1000); // Stagger responses
        });
      }
    }, 1000);
  };

  // Simple function to generate mock AI responses
  const generateAIResponse = (agent: string, query: string): string => {
    console.log(query);
    
    const responses: Record<string, string[]> = {
      تسويق: [
        "من منظور تسويقي، أوصي بالتركيز على القيمة الفريدة لمنتجك.",
        "فكر في إجراء اختبارات A/B على قنوات تسويقية مختلفة لمعرفة أيها يؤدي أفضل أداء لجمهورك المستهدف.",
        "بناءً على الاتجاهات الحالية، سيكون التسويق بالفيديو فعالاً بشكل خاص لهذا النوع من الحملات.",
      ],
      "كتابة محتوى": [
        "يجب أن يؤكد المحتوى الخاص بك على الفوائد وليس فقط الميزات. اروِ قصة تتردد صداها مع جمهورك.",
        "أقترح إنشاء تقويم محتوى يتضمن منشورات المدونة وتحديثات وسائل التواصل الاجتماعي والنشرات الإخبارية عبر البريد الإلكتروني.",
        "استخدم نبرة محادثة في المحتوى الخاص بك لبناء علاقة مع جمهورك.",
      ],
      "تحسين محركات البحث": [
        "تأكد من تضمين الكلمات الرئيسية ذات الصلة في المحتوى الخاص بك، ولكن تجنب حشو الكلمات الرئيسية.",
        "ركز على إنشاء روابط خلفية عالية الجودة من مواقع ذات سمعة طيبة في مجال عملك.",
        "فكر في التحسين للبحث الصوتي حيث أصبح شائعًا بشكل متزايد.",
      ],
      تصميم: [
        "يجب أن يوجه التسلسل الهرمي المرئي انتباه المستخدمين إلى العناصر الأكثر أهمية أولاً.",
        "فكر في استخدام نظام ألوان يثير المشاعر التي تريد ربطها بعلامتك التجارية.",
        "تأكد من أن تصميمك يمكن الوصول إليه لجميع المستخدمين، بما في ذلك ذوي الإعاقة.",
      ],
      "أبحاث تجربة المستخدم": [
        "بناءً على اختبار المستخدم، سيؤدي تبسيط التنقل إلى تحسين تجربة المستخدم بشكل عام.",
        "فكر في إجراء اختبار A/B لتحديد عناصر التصميم التي تتردد صداها أكثر مع المستخدمين.",
        "تشير مقابلات المستخدم إلى أن العملاء يقدرون سهولة الاستخدام أكثر من الميزات الإضافية.",
      ],
      تطوير: [
        "أوصي باستخدام بنية معيارية لجعل التحديثات المستقبلية أسهل في التنفيذ.",
        "فكر في تنفيذ ميزات تطبيق الويب التقدمي لتحسين الأداء على الأجهزة المحمولة.",
        "ستستفيد قاعدة التعليمات البرمجية من اختبارات الوحدة الإضافية لضمان الموثوقية.",
      ],
      "عمليات التطوير": [
        "سيؤدي إعداد التكامل المستمر إلى تبسيط عملية النشر الخاصة بك.",
        "فكر في وضع تطبيقك في حاويات لتحقيق قابلية أفضل للتوسع والاتساق عبر البيئات.",
        "سيساعد تنفيذ المراقبة الآلية في تحديد المشكلات قبل أن تؤثر على المستخدمين.",
      ],
      "اختبار الجودة": [
        "أوصي بتنفيذ اختبار من طرف إلى طرف لاكتشاف المشكلات المحتملة قبل وصولها إلى الإنتاج.",
        "فكر في إضافة المزيد من اختبارات الحالات الحدية لتحسين متانة تطبيقك.",
        "سيساعد اختبار إمكانية الوصول الآلي في ضمان أن تطبيقك قابل للاستخدام من قبل الجميع.",
      ],
    };

    const agentResponses = responses[agent] || [
      "أنا أحلل طلبك وسأقدم رؤى متخصصة قريبًا.",
    ];
    return agentResponses[Math.floor(Math.random() * agentResponses.length)];
  };

  if (!group) {
    return (
      <div className="flex items-center justify-center h-screen" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            لم يتم العثور على المجموعة
          </h1>
          <Link href="/dash">
            <Button>العودة إلى لوحة التحكم</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{group.name} | محادثة</title>
        <meta name="description" content={group.description} />
      </Head>

      <div className="flex flex-col h-screen" dir="rtl">
        {/* Header */}
        <header className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dash">
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">{group.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Edit2 className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>الإعدادات</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  حذف المجموعة
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="border-t p-4">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2"
          >
            <Button type="submit" size="icon">
              <Send className="h-5 w-5" />
            </Button>
            <Input
              placeholder="اكتب رسالتك..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button type="button" variant="ghost" size="icon">
              <PaperclipIcon className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
