import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CheckmarkIcon } from "@/components/icons/Checkmark";
import { ErrorIcon } from "@/components/icons/Error";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { domAnimation, LazyMotion } from "framer-motion";
import 'lenis/dist/lenis.css'
import { useEffect } from "react";
import Lenis from "lenis";

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
      <LazyMotion features={domAnimation} strict>
        <Component {...pageProps} />
      </LazyMotion>
    </ReactQueryProvider>
  );
}
