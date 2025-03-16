
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import AuthModal from "@/components/auth/AuthModal";
import { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState<"login" | "signup" | null>(null);
  const router = useRouter();
  const handleAuthModal = (type: "login" | "signup") => {
    router.push("/dash");
    console.log(type);
    
    // setAuthModalOpen(type);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLoginClick={() => handleAuthModal("login")} onSignupClick={() => handleAuthModal("signup")} />
      
      <main>
        <HeroSection onGetStarted={() => handleAuthModal("signup")} onLogin={() => handleAuthModal("login")} />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
      </main>
      
      <Footer />
      
      {/* Auth Modals */}
      <AuthModal 
        triggerType={authModalOpen || "login"} 
        isOpen={authModalOpen !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) setAuthModalOpen(null);
        }}
      />
    </div>
  );
};

export default Index;
