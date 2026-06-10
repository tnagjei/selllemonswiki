import { siteConfig } from "../data/config";

export const localeLabels = {
  en: "English",
  th: "Thai",
  fil: "Filipino",
  id: "Indonesian"
};

export const defaultNavItems = [
  { slug: "", label: "Home", href: "/" },
  { slug: "codes", label: "Codes", href: "/codes/" },
  { slug: "progression", label: "Progression", href: "/progression/" },
  { slug: "income-sources", label: "Income Sources", href: "/income-sources/" },
  { slug: "rebirths", label: "Rebirths", href: "/rebirths/" },
  { slug: "deals", label: "Deals", href: "/deals/" }
];

export function getMainNavItems() {
  const completed = new Set(siteConfig.completedCoreSlugs);
  return defaultNavItems.filter((item) => item.slug === "" || completed.has(item.slug));
}

export function getAvailableLocales() {
  return siteConfig.availableLocales.map((locale) => ({
    locale,
    label: localeLabels[locale] || locale,
    href: locale === siteConfig.defaultLocale ? "/" : `/${locale}/`,
    completed: siteConfig.completedLocales.includes(locale)
  }));
}
