import { WhatsAppIcon } from "@/components/brand/LogoIcons";

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/8801533262758?text=Hi%2C+I+want+to+buy+an+AI+tool+subscription";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp-floating"
      className="fixed bottom-6 right-6 z-50 animate-pulse-ring flex items-center justify-center rounded-full shadow-2xl transition-transform duration-300 hover:-translate-y-1"
      style={{
        width: 60,
        height: 60,
        background: "#25D366",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} color="#fff" />
    </a>
  );
}