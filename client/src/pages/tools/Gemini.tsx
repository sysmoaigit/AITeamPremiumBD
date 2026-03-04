import { ToolDetail } from "@/components/ToolDetail";
import { Star } from "lucide-react";

export default function Gemini() {
  return (
    <ToolDetail
      name="Gemini Advanced"
      tagline="— Google AI in BD"
      description="Subscribe to Google One AI Premium without a card. Get Gemini Advanced directly integrated into Docs, Gmail, and Drive."
      accentColor="#4285F4"
      icon={Star}
      features={[
        "Access to Gemini 1.5 Pro",
        "2TB Google Drive Storage included",
        "Integration with Google Workspace",
        "State-of-the-art coding abilities",
        "Directly upgraded on your Gmail",
        "Full warranty and support",
      ]}
      plans={[
        {
          label: "Gemini Advanced Shared",
          price: "৳499",
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
          label: "Gemini Advanced Personal",
          price: "৳2,300",
          period: "/mo",
          delivery: "2-4 hr delivery",
          type: "Personal",
          specs: [
            { label: "Storage", value: "2 Terabytes" },
            { label: "Type", value: "100% Private" },
            { label: "Payment", value: "bKash / Nagad" },
          ],
        },
      ]}
    />
  );
}