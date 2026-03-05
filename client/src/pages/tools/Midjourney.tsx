import { ToolDetail } from "@/components/ToolDetail";
import { Image } from "lucide-react";

export default function Midjourney() {
  return (
    <ToolDetail
      name="Midjourney"
      tagline="Shared Access"
      description="The world's best AI image generator. Get shared access to Midjourney and start creating stunning art today."
      accentColor="#2563EB"
      icon={Image}
      features={[
        "Generate high-quality AI art",
        "Access to Discord bot",
        "Shared account access",
        "Fast generation mode included",
        "Official subscription usage",
        "24/7 support via WhatsApp",
      ]}
      plans={[
        {
          label: "Midjourney Shared",
          price: "৳1,200",
          period: "/mo",
          delivery: "5-15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Discord Shared" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Rules", value: "Strict Device Rules" },
          ],
        },
      ]}
    />
  );
}
