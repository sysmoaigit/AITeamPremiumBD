import { ToolDetail } from "@/components/ToolDetail";
import { PenTool } from "lucide-react";

export default function Grammarly() {
  return (
    <ToolDetail
      name="Grammarly Premium"
      tagline="for BD Writers"
      description="Perfect your writing with advanced grammar, tone, and plagiarism checking. Essential for students, writers, and professionals."
      accentColor="#15B881"
      icon={PenTool}
      features={[
        "Advanced Grammar & Spell Check",
        "Vocabulary enhancements & sentence rewrites",
        "Plagiarism checker",
        "Tone adjustments for any audience",
        "Works on browser, Word, and desktop",
        "Full warranty with BD support",
      ]}
      plans={[
        {
          label: "Grammarly Premium",
          price: "৳800",
          period: "/mo",
          delivery: "1-2 hr delivery",
          type: "Private",
          specs: [
            { label: "Type", value: "Private Upgrade" },
            { label: "Duration", value: "1 Month (Renewable)" },
            { label: "Support", value: "Local BD Support" },
          ],
        },
      ]}
    />
  );
}