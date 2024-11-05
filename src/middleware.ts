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

import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ua',
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
