// import createMiddleware from 'next-intl/middleware';
// import { locales } from './config';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales,

//   // Used when no locale matches
//   defaultLocale: 'ua',
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ua|en|de)/:path*'],
// };

// import createMiddleware from 'next-intl/middleware';
// import { localePrefix, locales } from './navigation';

// export default createMiddleware({
//   locales,
//   localePrefix,
//   defaultLocale: 'ua',
// });

// // only applies this middleware to files in the app directory
// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		"/",

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		"/(de|en)/:path*",

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		"/((?!_next|_vercel|.*\\..*).*)",
	],
};
