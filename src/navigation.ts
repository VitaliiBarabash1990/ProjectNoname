// import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
// import { localePrefix, locales, pathnames } from './config';

// export const { Link, getPathname, redirect, usePathname, useRouter } =
//   createLocalizedPathnamesNavigation({
//     locales,
//     pathnames,
//     localePrefix,
//   });

import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["ua", "en"];
export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales, localePrefix });
