import { ToolDetail } from "@/components/ToolDetail";
import { PenTool } from "lucide-react";

export default function Grammarly() {
  return (
    <ToolDetail
      name="Grammarly Premium"
      tagline="for BD Writers"
      description="The world's leading AI writing assistant. GrammarlyGO full-paragraph AI rewrites, advanced grammar correction, plagiarism checking and tone tuning — essential for students, freelancers and professionals."
      accentColor="#15B881"
      icon={PenTool}
      features={[
        "GrammarlyGO — AI-powered full paragraph and email rewrites",
        "Advanced grammar, spelling and punctuation correction",
        "Plagiarism checker against 16 billion web pages",
        "Tone detector — adjust formality, confidence and clarity",
        "Vocabulary enhancements and sentence restructuring",
        "Inline suggestions in Gmail, Google Docs, MS Word and Chrome",
        "Genre-specific writing style guidance (academic, business, casual)",
        "Works across web browser, desktop app and Microsoft Office",
        "30-day warranty · bKash / Nagad accepted",
      ]}
      plans={[
        {
          label: "Grammarly Premium",
          price: "৳800",
          period: "/mo",
          delivery: "1–2 hr delivery",
          type: "Private",
          specs: [
            { label: "Access", value: "Your own account" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "24/7 WhatsApp" },
          ],
        },
      ]}
    />
  );
}
