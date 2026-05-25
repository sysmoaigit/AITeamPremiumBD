import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  iconColor?: string;
  name: string;
  description: string;
  badge?: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  productName?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {features.map((feat, i) => {
        const Icon = feat.icon;
        const color = feat.iconColor ?? "#2563EB";
        return (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(37,99,235,0.12)" }}
            className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 cursor-default transition-shadow"
            data-testid={`feature-card-${i}`}
          >
            <div
              className="flex items-center justify-center rounded-xl"
              style={{ width: 48, height: 48, background: `${color}15` }}
            >
              <Icon size={24} color={color} strokeWidth={1.8} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight">{feat.name}</h3>
                {feat.badge && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${color}18`, color }}
                  >
                    {feat.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{feat.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
