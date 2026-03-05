import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "../ui/FloatingWhatsApp";
import { BRAND } from "@/components/brand/LogoIcons";
import StickyMobileCTABar from "../StickyMobileCTA";
import { OrganizationSchema } from "../OrganizationSchema";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: BRAND.white }}>
      <OrganizationSchema />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTABar />
    </div>
  );
}
