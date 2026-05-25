import { motion } from "framer-motion";
import { Image, Zap, Palette, Maximize2 } from "lucide-react";

export interface ImageGenSpec {
  label: string;
  value: string;
  icon?: "resolution" | "style" | "speed" | "quality";
}

export interface ImagePromptExample {
  prompt: string;
  style?: string;
}

export interface ImageGenData {
  title?: string;
  specs: ImageGenSpec[];
  examples: ImagePromptExample[];
}

interface ImageGenDeepDiveProps {
  data?: ImageGenData | null;
  productName?: string;
}

const ICONS = { resolution: Maximize2, style: Palette, speed: Zap, quality: Image };

export function ImageGenDeepDive({ data }: ImageGenDeepDiveProps) {
  if (!data || data.specs.length === 0) return null;

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
          {data.title ?? "Image Generation Specs"}
        </h3>
        <div className="space-y-3">
          {data.specs.map((spec, i) => {
            const Icon = spec.icon ? ICONS[spec.icon] : Image;
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex-shrink-0">
                  <Icon size={16} color="#2563EB" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block">{spec.label}</span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{spec.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Example Prompts</h3>
        <div className="space-y-3">
          {data.examples.slice(0, 3).map((ex, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              style={{
                background: `linear-gradient(135deg, hsl(${210 + i * 40} 80% ${i % 2 === 0 ? "92%" : "88%"}) 0%, hsl(${230 + i * 30} 70% ${i % 2 === 0 ? "88%" : "84%"}) 100%)`,
              }}
            >
              <div className="p-4">
                {ex.style && (
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/60 dark:bg-gray-900/60 text-blue-700 dark:text-blue-400 mb-2">
                    {ex.style}
                  </span>
                )}
                <p className="font-mono text-xs text-gray-700 dark:text-gray-300 leading-relaxed">"{ex.prompt}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
