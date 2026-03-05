import { ToolDetail } from "@/components/ToolDetail";
import { SiCanva } from "react-icons/si";

export default function Canva() {
  return (
    <ToolDetail
      name="Canva Pro"
      tagline="Team Access in BD"
      description="Design anything like a pro. Get Canva Pro team access without needing a credit card. Pay locally via bKash/Nagad."
      accentColor="#00C4CC"
      icon={SiCanva as any}
      features={[
        "Access to 100+ million premium photos, videos, audio and graphics",
        "610,000+ premium and free templates with new designs daily",
        "Remove backgrounds instantly with Background Remover",
        "Schedule social media content to 8 platforms",
        "Invite team members to collaborate",
        "Official team seat invitation",
      ]}
      plans={[
        {
          label: "Canva Pro Team Seat",
          price: "৳350",
          period: "/mo",
          delivery: "5-15 min delivery",
          type: "Team",
          specs: [
            { label: "Access", value: "Team Invitation" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "WhatsApp" },
          ],
        },
      ]}
    />
  );
}
