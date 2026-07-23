import { createContext } from "react";

export type Locale = "pt" | "en"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);