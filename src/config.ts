// import { LocalePrefix, Pathnames } from "next-intl/routing";

// export const locales = ["ua", "en"] as const;

// export type Locales = typeof locales;

// export const pathnames: Pathnames<Locales> = {
// 	"/": "/",
// 	"/pathnames": "/pathnames",
// };

// export const localePrefix: LocalePrefix<Locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_PROJECT_PRODUCTION_URL
	? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
	: `http://localhost:${port}`;
