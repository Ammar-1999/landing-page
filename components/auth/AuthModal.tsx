
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type AuthModalProps = {
  triggerType: "login" | "signup";
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
};

const AuthModal = ({ triggerType, isOpen, onOpenChange, children }: AuthModalProps) => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Authentication in progress");
    // Close the modal after a brief delay to simulate authentication
    setTimeout(() => {
      toast.dismiss(toastId);
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {children && <div>{children}</div>}
      <DialogContent className="sm:max-w-[425px] rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            مرحباً بك في نجد
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={triggerType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="signup">التسجيل</TabsTrigger>
          </TabsList>
          
          {/* Login Form */}
          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">البريد الإلكتروني</Label>
                <Input id="email-login" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password-login">كلمة المرور</Label>
                  <a href="#" className="text-xs text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </a>
                </div>
                <Input id="password-login" type="password" required />
              </div>
              <Button type="submit" className="w-full">متابعة</Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-foreground/70">
                    أو المتابعة باستخدام
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  جوجل
                </Button>
                <Button variant="outline" className="w-full">
                  جيثب
                </Button>
              </div>
            </form>
          </TabsContent>
          
          {/* Sign Up Form */}
          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name-signup">الاسم الكامل</Label>
                <Input id="name-signup" type="text" placeholder="محمد أحمد" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signup">البريد الإلكتروني</Label>
                <Input id="email-signup" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">كلمة المرور</Label>
                <Input id="password-signup" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <Button type="submit" className="w-full">إنشاء حساب</Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-foreground/70">
                    أو المتابعة باستخدام
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  جوجل
                </Button>
                <Button variant="outline" className="w-full">
                  جيثب
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
