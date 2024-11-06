import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["ua", "en"],
	defaultLocale: "ua",
	pathnames: {
		"/": "/",
		"/pathnames": {
			ua: "/pfadnamen",
			en: "/pathnames",
		},
	},
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createNavigation(routing);
