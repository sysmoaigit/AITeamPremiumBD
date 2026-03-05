import { ToolDetail } from "@/components/ToolDetail";
import { SiGithub } from "react-icons/si";

export default function Copilot() {
  return (
    <ToolDetail
      name="GitHub Copilot"
      tagline="Your AI Pair Programmer"
      description="Code faster and with less work. Get GitHub Copilot for your personal account without international payment restrictions."
      accentColor="#24292F"
      icon={SiGithub as any}
      features={[
        "Autocomplete comments and code",
        "Code suggestions in real-time",
        "Integration with VS Code, JetBrains & more",
        "Official private upgrade",
        "Renewable every month",
        "24/7 technical support",
      ]}
      plans={[
        {
          label: "GitHub Copilot Private",
          price: "৳1,200",
          period: "/mo",
          delivery: "2-4 hr delivery",
          type: "Private",
          specs: [
            { label: "Access", value: "Your Own account" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "WhatsApp" },
          ],
        },
      ]}
    />
  );
}
