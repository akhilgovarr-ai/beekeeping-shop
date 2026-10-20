import type { LocalizedText } from "../types/product";

export type Review = {
  id: string;
  author: string;
  text: LocalizedText;
};

// Add only real reviews approved for publication.
// Each entry needs a unique id, author name and text: { ru: "…", en: "…" }.
export const reviews: Review[] = [];
