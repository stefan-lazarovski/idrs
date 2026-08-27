import { ui, defaultLang } from "./ui";

type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: string) {
    const locale = (lang in ui ? lang : defaultLang) as keyof typeof ui;
    return function t(key: UiKey): string {
        return ui[locale][key] ?? ui[defaultLang][key];
    };
}