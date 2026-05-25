import { motion } from "framer-motion";
import { Video, Clock, Zap, Film } from "lucide-react";

export interface VideoGenSpec {
  label: string;
  value: string;
  icon?: "duration" | "quality" | "speed" | "style";
}

export interface VideoPromptExample {
  prompt: string;
  duration?: string;
}

export interface VideoGenData {
  title?: string;
  specs: VideoGenSpec[];
  examples: VideoPromptExample[];
}

interface VideoGenDeepDiveProps {
  data?: VideoGenData | null;
  productName?: string;
}

const ICONS = { duration: Clock, quality: Film, speed: Zap, style: Video };

export function VideoGenDeepDive({ data }: VideoGenDeepDiveProps) {
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
          {data.title ?? "Video Generation Specs"}
        </h3>
        <div className="space-y-3">
          {data.specs.map((spec, i) => {
            const Icon = spec.icon ? ICONS[spec.icon] : Video;
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex-shrink-0">
                  <Icon size={16} color="#7C3AED" strokeWidth={1.8} />
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
              className="relative rounded-xl overflow-hidden border-2 border-purple-200 dark:border-purple-800"
              style={{
                background: `linear-gradient(135deg, hsl(${270 + i * 20} 60% ${i % 2 === 0 ? "95%" : "92%"}) 0%, hsl(${250 + i * 15} 55% ${i % 2 === 0 ? "90%" : "87%"}) 100%)`,
              }}
            >
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20">
                    <div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "7px solid #7C3AED", marginLeft: 1 }} />
                  </div>
                  {ex.duration && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-400">
                      {ex.duration}
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-gray-700 dark:text-gray-300 leading-relaxed">"{ex.prompt}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
