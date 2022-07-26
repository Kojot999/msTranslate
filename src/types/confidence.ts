import { LanguageCode } from "./Languages";

export type AutoDetectedLanguage = {
  confidence: number;
  language: LanguageCode;
};
