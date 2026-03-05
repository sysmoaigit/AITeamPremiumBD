import { ToolDetail } from "@/components/ToolDetail";
import { Cpu } from "lucide-react";

export default function Grok() {
  return (
    <ToolDetail
      name="Grok Premium"
      tagline="by xAI"
      description="Experience Grok, the rebellious AI by Elon Musk's xAI. Integrated directly into X (Twitter) Premium."
      accentColor="#000000"
      icon={Cpu}
      features={[
        "Real-time access to info via X platform",
        "Wit and rebellious streak",
        "X Premium features included",
        "No credit card needed",
        "Pay locally with bKash",
        "Replacement guarantee",
      ]}
      plans={[
        {
          label: "Grok Premium Shared",
          price: "৳699",
          period: "/mo",
          delivery: "5-15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Shared X account" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "WhatsApp" },
          ],
        },
      ]}
    />
  );
}
