import { ToolDetail } from "@/components/ToolDetail";
import { Image } from "lucide-react";

export default function Midjourney() {
  return (
    <ToolDetail
      name="Midjourney"
      tagline="Shared Access"
      description="The world's most stunning AI image generator. Midjourney v7 produces photorealistic and artistic images with character consistency, style reference, and Vary (Region) editing — all accessible in Bangladesh via bKash/Nagad."
      accentColor="#2563EB"
      icon={Image}
      features={[
        "Midjourney v7 — most realistic AI images ever generated",
        "Character Reference (--cref) for consistent characters across scenes",
        "Style Reference (--sref) to match any artistic style",
        "Vary (Region) — AI-powered inpainting to edit specific areas",
        "Photorealistic portraits, landscapes, product shots and concepts",
        "Turbo Mode — ultra-fast image generation",
        "Web interface + Discord bot access",
        "Commercial usage rights included",
        "30-day warranty · bKash / Nagad accepted",
      ]}
      plans={[
        {
          label: "Midjourney — Shared",
          price: "৳1,200",
          period: "/mo",
          delivery: "5–15 min delivery",
          type: "Shared",
          specs: [
            { label: "Access", value: "Discord + Web" },
            { label: "Warranty", value: "Full 30 days" },
            { label: "Rules", value: "1 device only" },
          ],
        },
      ]}
    />
  );
}
