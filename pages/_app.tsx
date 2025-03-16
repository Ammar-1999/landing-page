import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CheckmarkIcon } from "@/components/icons/Checkmark";
import { ErrorIcon } from "@/components/icons/Error";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { domAnimation, LazyMotion } from "framer-motion";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import { Tajawal } from "next/font/google";
import Lenis from "lenis";
const font = Tajawal({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-main-font",
});
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ReactQueryProvider>
      <Toaster
        swipeDirections={["left", "right", "top"]}
        position="top-center"
        hotkey={["tab", "Tab"]}
        toastOptions={{
          duration: 7000,
          classNames: {
            actionButton:
              "!bg-transparent !text-foreground/50 hover:!text-foreground rtl:!pl-0 ltr:!pr-0",
            content: "flex-1 font-cairo",
            icon: "!w-[20px] !h-[20px]",
          },
        }}
        offset={{
          top: "calc(env(safe-area-inset-top) + 32px)",
        }}
        icons={{
          error: <ErrorIcon />,
          success: <CheckmarkIcon />,
        }}
      />
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <LazyMotion features={domAnimation} strict>
        <div className={`${font.variable} font-main-font animate-fade`}>
          <Component {...pageProps} />
        </div>
      </LazyMotion>
    </ReactQueryProvider>
  );
}
