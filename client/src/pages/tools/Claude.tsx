import { ToolDetail } from "@/components/ToolDetail";
import { Brain } from "lucide-react";

export default function Claude() {
  return (
    <ToolDetail
      name="Claude Pro"
      tagline="in Bangladesh"
      description="Experience Anthropic's most intelligent model. Unmatched writing, coding, and analysis capabilities with a massive context window."
      accentColor="#D97757"
      icon={Brain}
      features={[
        "Access to Claude 3.5 Sonnet and Claude 3 Opus",
        "5x more usage than the free tier",
        "Massive 200K token context window",
        "Perfect for coding and long-form writing",
        "Zero international payment hassle",
        "Replacement guarantee within 24h",
      ]}
      plans={[
        {
          label: "Claude Pro Shared",
          price: "৳599",
          period: "/mo",
          delivery: "5-15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Shared seat" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "24/7 WhatsApp" },
          ],
        },
        {
          label: "Claude Pro Personal",
          price: "৳2,400",
          period: "/mo",
          delivery: "2-4 hr delivery",
          type: "Personal",
          specs: [
            { label: "Access", value: "Your own email" },
            { label: "Device", value: "Web & Mobile" },
            { label: "Payment", value: "bKash / Nagad" },
          ],
        },
      ]}
    />
  );
}