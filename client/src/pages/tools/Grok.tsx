import { ToolDetail } from "@/components/ToolDetail";
import { Cpu } from "lucide-react";

export default function Grok() {
  return (
    <ToolDetail
      name="Grok Premium"
      tagline="by xAI"
      description="xAI's Grok 3 — the world's most powerful AI with real-time X/internet data, DeepSearch, Aurora image generation, and Think mode for extended reasoning. Pay with bKash/Nagad in Bangladesh."
      accentColor="#1d1d1f"
      icon={Cpu}
      features={[
        "Grok 3 — xAI's most capable model",
        "Think mode: extended chain-of-thought reasoning",
        "DeepSearch: real-time web + X (Twitter) data synthesis",
        "Aurora image generation — photorealistic AI images",
        "Bigger context than GPT-4o for long documents",
        "Real-time information without knowledge cut-off",
        "Code generation, analysis and debugging",
        "Witty, direct personality — no unnecessary restrictions",
        "Pay via bKash / Nagad · 30-day warranty",
      ]}
      plans={[
        {
          label: "Grok Premium — Shared",
          price: "৳699",
          period: "/mo",
          delivery: "5–15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Shared X account" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Support", value: "WhatsApp 24/7" },
          ],
        },
      ]}
    />
  );
}
