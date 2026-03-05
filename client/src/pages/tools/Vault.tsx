import { ToolDetail } from "@/components/ToolDetail";
import { Zap } from "lucide-react";

export default function Vault() {
  return (
    <ToolDetail
      name="AI Tools Vault"
      tagline="The Ultimate Bundle"
      description="Get all major AI tools in one package. Save more than 50% compared to buying them individually."
      accentColor="#F59E0B"
      icon={Zap}
      features={[
        "ChatGPT Plus Shared Seat",
        "Claude Pro Shared Seat",
        "Gemini Advanced Shared Seat",
        "Best value for productivity",
        "Consolidated support channel",
        "6-hour maximum delivery time",
      ]}
      plans={[
        {
          label: "AI Tools Vault Bundle",
          price: "৳1,990",
          period: "/mo",
          delivery: "6 hr delivery",
          type: "Bundle",
          specs: [
            { label: "Tools", value: "3 Major Tools" },
            { label: "Savings", value: "50%+" },
            { label: "Support", value: "Priority" },
          ],
        },
      ]}
    />
  );
}
