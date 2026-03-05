import { WhatsAppIcon } from "@/components/brand/LogoIcons";

export function StickyMobileCTA() {
  const whatsappUrl = "https://wa.me/8801533262758?text=Hi%2C+I+want+to+order+ChatGPT+Plus";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-16 z-[100] p-4 pointer-events-none">
       {/* 
          Note: The right-16 is to avoid overlapping with the FloatingWhatsApp button if it exists. 
          Actually, the requirement says "Fixed bottom bar with WhatsApp button".
          Usually, a sticky CTA bar spans the full width.
       */}
    </div>
  );
}

// Re-reading requirements: "Fixed bottom bar with WhatsApp button", "Green background (#25D366)", "Text: WhatsApp এ অর্ডার করুন"
export default function StickyMobileCTABar() {
  const whatsappUrl = "https://wa.me/8801533262758?text=Hi%2C+I+want+to+order+ChatGPT+Plus";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] p-3 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-sticky-whatsapp"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all active:scale-[0.98]"
        style={{ background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "1rem" }}
      >
        <WhatsAppIcon size={20} color="#fff" />
        <span>WhatsApp এ অর্ডার করুন</span>
      </a>
    </div>
  );
}
