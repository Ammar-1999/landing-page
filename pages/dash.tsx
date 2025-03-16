import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";
import GroupCard from "@/components/group-card";
import CreateGroupModal from "@/components/create-group-modal";
import Head from "next/head";

// Sample data for demonstration
const sampleGroups = [
  {
    id: "1",
    name: "فريق التسويق",
    description:
      "وكلاء الذكاء الاصطناعي المتخصصون في استراتيجيات التسويق وإنشاء المحتوى",
    agents: ["تسويق", "كتابة محتوى", "تحسين محركات البحث"],
    lastActive: "منذ ساعتين",
  },
  {
    id: "2",
    name: "مشروع التصميم",
    description: "مجموعة تركز على تقييم التصميم والتوجيه الإبداعي",
    agents: ["تصميم", "أبحاث تجربة المستخدم", "كتابة محتوى"],
    lastActive: "أمس",
  },
  {
    id: "3",
    name: "الدعم الفني",
    description: "استكشاف الأخطاء الفنية وإصلاحها ومساعدة التطوير",
    agents: ["تطوير", "عمليات التطوير", "اختبار الجودة"],
    lastActive: "منذ 3 أيام",
  },
];

export default function Home() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = sampleGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>محادثة متعددة الوكلاء</title>
        <meta
          name="description"
          content="تطبيق محادثة مع وكلاء ذكاء اصطناعي متعددين"
        />
      </Head>

      <header className="fixed top-0 z-10 bg-card pt-4 pb-4 border-b w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 w-full sm:w-auto"
            >
              <PlusCircle className="h-5 w-5 ml-1 mr-0" />
              إنشاء مجموعة جديدة
            </Button>

            <div className="relative w-full sm:w-auto sm:min-w-[300px]">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="البحث في المجموعات..."
                className="pr-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto pb-8 mt-24">
        {/* Sticky Header */}

        {/* Content */}
        <div className="px-4 mt-6">
          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-xl text-muted-foreground">
                لم يتم العثور على مجموعات
              </p>
              <Button
                variant="link"
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-2"
              >
                إنشاء أول مجموعة
              </Button>
            </div>
          )}
        </div>

        <CreateGroupModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </main>
    </>
  );
}
