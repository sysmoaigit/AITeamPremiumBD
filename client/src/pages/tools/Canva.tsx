import { ToolDetail } from "@/components/ToolDetail";
import { SiCanva } from "react-icons/si";

export default function Canva() {
  return (
    <ToolDetail
      name="Canva Pro"
      tagline="Team Access in BD"
      description="Design anything like a pro. Magic Studio AI image generation, Dream Lab text-to-image, background remover, 100M+ premium assets and 610K+ templates — officially added to your Canva team, no credit card needed."
      accentColor="#00C4CC"
      icon={SiCanva as any}
      features={[
        "Magic Studio — AI image generation inside Canva",
        "Dream Lab — advanced text-to-image with style control",
        "Magic Write — AI copywriting and content assistant",
        "Instant background remover and Magic Eraser",
        "100+ million premium photos, videos, audio and graphics",
        "610,000+ professional templates (updated daily)",
        "Brand Kit — lock colours, fonts and logos for your team",
        "Social media scheduler to 8+ platforms",
        "Official team seat — added to your own Canva account",
        "30-day warranty · bKash / Nagad accepted",
      ]}
      plans={[
        {
          label: "Canva Pro — Team Seat",
          price: "৳350",
          period: "/mo",
          delivery: "5–15 min delivery",
          type: "Team",
          specs: [
            { label: "Access", value: "Official team invite" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "24/7 WhatsApp" },
          ],
        },
      ]}
    />
  );
}
