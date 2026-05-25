import { ToolDetail } from "@/components/ToolDetail";
import { Star } from "lucide-react";

export default function Gemini() {
  return (
    <ToolDetail
      name="Gemini Advanced"
      tagline="— Google AI in BD"
      description="Google's most powerful AI — Gemini 2.5 Pro with a 1 million token context, Deep Research, Gemini Live voice mode, and 2 TB Google Drive storage. Pay with bKash/Nagad, no international card."
      accentColor="#4285F4"
      icon={Star}
      features={[
        "Gemini 2.5 Pro — Google's smartest model",
        "1,000,000 token context window (largest in class)",
        "Deep Research: multi-step web research with cited reports",
        "Gemini Live — real-time voice conversations",
        "2 TB Google Drive storage included (Personal plan)",
        "Seamlessly integrated into Gmail, Docs, Sheets and Slides",
        "NotebookLM-style document analysis and Q&A",
        "State-of-the-art coding, maths and science reasoning",
        "Accurate Bangla language generation",
        "30-day warranty · 24/7 WhatsApp support",
      ]}
      plans={[
        {
          label: "Gemini Advanced — Shared",
          price: "৳499",
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
          label: "Gemini Advanced — Personal",
          price: "৳2,300",
          period: "/mo",
          delivery: "2–4 hr delivery",
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
