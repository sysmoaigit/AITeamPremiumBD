import { ToolDetail } from "@/components/ToolDetail";
import { MessageSquare } from "lucide-react";

export default function ChatGPT() {
  return (
    <ToolDetail
      name="ChatGPT Plus"
      tagline="in Bangladesh"
      description="Unlock GPT-4o, o1, DALL-E 3, and Advanced Data Analysis without needing an international credit card. Pay easily with bKash or Nagad."
      accentColor="#16A34A"
      icon={MessageSquare}
      features={[
        "Access to GPT-4o and o1 models",
        "Faster response times during peak hours",
        "Generate images with DALL-E 3",
        "Create custom GPTs",
        "Deep Research & Advanced Data Analysis",
        "Full warranty with replacement guarantee",
      ]}
      plans={[
        {
          label: "ChatGPT Plus Shared",
          price: "৳399",
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
          label: "ChatGPT Premium Shared",
          price: "৳950",
          period: "/mo",
          delivery: "5-15 min delivery",
          type: "Premium",
          specs: [
            { label: "Access", value: "Extended limits" },
            { label: "Models", value: "o1, o3, Deep Research" },
            { label: "Support", value: "Priority WhatsApp" },
          ],
        },
        {
          label: "ChatGPT Plus Personal",
          price: "৳2,500",
          period: "/mo",
          delivery: "2-4 hr delivery",
          type: "Personal",
          specs: [
            { label: "Access", value: "Your own email" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Payment", value: "bKash / Nagad" },
          ],
        },
      ]}
    />
  );
}