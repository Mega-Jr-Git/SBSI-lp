import { useState, useEffect, type ReactNode } from "react";
import type { Locale } from "./LocaleContext"
import { LocaleContext } from "./LocaleContext"

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      const stored = localStorage.getItem("locale")
      if (stored === "pt" || stored === "en") return stored
    } catch {}
    return "pt"
  })

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale)
    } catch {}
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}