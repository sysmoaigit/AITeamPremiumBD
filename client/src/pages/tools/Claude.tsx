import { ToolDetail } from "@/components/ToolDetail";
import { Brain } from "lucide-react";

export default function Claude() {
  return (
    <ToolDetail
      name="Claude Pro"
      tagline="in Bangladesh"
      description="Anthropic's most capable AI — Claude Sonnet 4 with Extended Thinking, a 200K token context window, and exceptional writing, coding and analysis. Buy with bKash/Nagad, no international card needed."
      accentColor="#D97757"
      icon={Brain}
      features={[
        "Claude Sonnet 4 — Anthropic's most advanced model",
        "Extended Thinking for deep, step-by-step reasoning",
        "200,000 token context window (analyse entire books or codebases)",
        "Superior long-form writing, essays and creative content",
        "Best-in-class code generation, debugging and refactoring",
        "Image and document understanding (PDFs, spreadsheets)",
        "Accurate Bangla language generation",
        "5× more usage than the free tier",
        "30-day replacement warranty · 24/7 WhatsApp support",
      ]}
      plans={[
        {
          label: "Claude Pro — Shared",
          price: "৳599",
          period: "/mo",
          delivery: "5–15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Shared seat" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "24/7 WhatsApp" },
          ],
        },
        {
          label: "Claude Pro — Personal",
          price: "৳2,400",
          period: "/mo",
          delivery: "2–4 hr delivery",
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
