import { ToolDetail } from "@/components/ToolDetail";
import { Search } from "lucide-react";

export default function Perplexity() {
  return (
    <ToolDetail
      name="Perplexity Pro"
      tagline="Search Redefined"
      description="The world's first AI-powered answer engine. Get Perplexity Pro for deep research and unlimited file uploads."
      accentColor="#20B2AA"
      icon={Search}
      features={[
        "Unlimited Pro searches",
        "Upload and analyze unlimited files",
        "Access to Claude 3, GPT-4o, and more",
        "Visualization with diagrams",
        "Zero international payment hassle",
        "Instant delivery via WhatsApp",
      ]}
      plans={[
        {
          label: "Perplexity Pro Shared",
          price: "৳599",
          period: "/mo",
          delivery: "5-15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Shared seat" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "WhatsApp" },
          ],
        },
      ]}
    />
  );
}
