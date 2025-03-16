import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Check, ArrowLeft } from "lucide-react";

const specializationColors: Record<string, string> = {
  marketing: "#10B981",
  content: "#6366F1",
  design: "#EC4899",
  seo: "#F59E0B",
  ux: "#3B82F6",
  dev: "#8B5CF6",
  devops: "#EF4444",
  qa: "#14B8A6",
};

const availableAgents = [
  { id: "marketing", label: "تسويق" },
  { id: "content", label: "كتابة محتوى" },
  { id: "design", label: "تصميم" },
  { id: "seo", label: "تحسين محركات البحث" },
  { id: "ux", label: "أبحاث تجربة المستخدم" },
  { id: "dev", label: "تطوير" },
  { id: "devops", label: "عمليات التطوير" },
  { id: "qa", label: "اختبار الجودة" },
];

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateGroupModal({
  isOpen,
  onClose,
}: CreateGroupModalProps) {
  const [step, setStep] = useState(1);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);

  const handleNext = () => {
    if (groupName.trim() === "") return;
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleAgentToggle = (agentId: string) => {
    setSelectedAgents((prev) =>
      prev.includes(agentId)
        ? prev.filter((id) => id !== agentId)
        : [...prev, agentId]
    );
  };

  const handleCreate = () => {
    if (selectedAgents.length === 0) return;

    // TODO: save to database
    console.log({
      name: groupName,
      description: groupDescription,
      agents: selectedAgents.map(
        (id) => availableAgents.find((a) => a.id === id)?.label
      ),
    });

    // Reset form and close modal
    setGroupName("");
    setGroupDescription("");
    setSelectedAgents([]);
    setStep(1);
    onClose();
  };

  const handleClose = () => {
    setStep(1);
    setGroupName("");
    setGroupDescription("");
    setSelectedAgents([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-lg p-0 gap-0 rounded-xl overflow-hidden bg-white dark:bg-gray-950"
        dir="rtl"
      >
        <div className="relative h-2">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800"></div>
          <div
            className="absolute inset-y-0 right-0 bg-primary transition-all duration-300 ease-out"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {step === 1 ? "تفاصيل المجموعة" : "تعيين وكلاء الذكاء الاصطناعي"}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 h-8 w-8"
            >
              <X size={18} className="text-gray-500 dark:text-gray-400" />
            </Button>
          </div>

          {step === 1 ? (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-900 dark:text-gray-100">
                  اسم المجموعة <span className="text-red-500">*</span>
                </Label>
                <Input
                  autoFocus
                  id="name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="أدخل اسم المجموعة"
                  className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-900 dark:text-gray-100">
                  الوصف
                </Label>
                <Textarea
                  id="description"
                  value={groupDescription}
                  onChange={(e) => setGroupDescription(e.target.value)}
                  placeholder="ما الغرض من هذه المجموعة؟"
                  className="w-full min-h-24 resize-none bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                />
              </div>

              <Button
                size="lg"
                onClick={handleNext}
                disabled={!groupName.trim()}
                className="w-full mt-4"
              >
                التالي <ArrowLeft size={16} className="ml-2" />
              </Button>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                حدد تخصصات وكلاء الذكاء الاصطناعي لهذه المجموعة
              </p>

              <div className="grid grid-cols-2 gap-4">
                {availableAgents.map((agent) => {
                  const isSelected = selectedAgents.includes(agent.id);
                  const bgColor = specializationColors[agent.id];
                  const bgColorWithOpacity = `${bgColor}${isSelected ? '20' : '10'}`;

                  return (
                    <button
                      type="button"
                      key={agent.id}
                      onClick={() => handleAgentToggle(agent.id)}
                      className={`
                        p-3 border rounded-lg transition-all duration-200
                        ${
                          isSelected
                            ? "ring-2 ring-offset-2 dark:ring-offset-gray-950 border-transparent"
                            : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                        }
                      `}
                      style={
                        {
                          "--ring-color": specializationColors[agent.id],
                          backgroundColor: isSelected 
                            ? bgColorWithOpacity
                            : "transparent",
                        } as any
                      }
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-gray-100 text-start">
                            {agent.label}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            خبير في {agent.label}
                          </p>
                        </div>
                        {isSelected && (
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: specializationColors[agent.id],
                            }}
                          >
                            <Check size={12} className="text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                  size="lg"
                >
                  رجوع
                </Button>
                <Button
                  onClick={handleCreate}
                  size="lg"
                  disabled={selectedAgents.length === 0}
                  className="flex-1"
                >
                  إنشاء المجموعة
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
