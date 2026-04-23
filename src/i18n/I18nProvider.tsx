import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { dictionaries, LANGS, Lang } from "./dictionaries";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  langs: typeof LANGS;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "pss.lang";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored && ["en", "km", "fr"].includes(stored) ? stored : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang];
    return {
      lang,
      setLang: setLangState,
      langs: LANGS,
      t: (key: string) => dict[key] ?? dictionaries.en[key] ?? key,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
