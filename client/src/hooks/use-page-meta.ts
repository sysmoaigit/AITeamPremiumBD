import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
}

const BASE = "AI Team Premium BD";

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const prev = document.title;
    document.title = title === BASE ? BASE : `${title} | ${BASE}`;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      const prevDesc = meta?.content ?? "";
      if (meta) meta.content = description;
      return () => {
        document.title = prev;
        if (meta) meta.content = prevDesc;
      };
    }

    return () => {
      document.title = prev;
    };
  }, [title, description]);
}