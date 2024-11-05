// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';
// import { locales } from './config';

// export default getRequestConfig(async ({ locale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();
//   let component = '';
//   if (locale === 'ua') {
//     component = 'componentUa';
//   } else if (locale === 'en') {
//     component = 'componentEn';
//   } else if (locale === 'de') {
//     component = 'componentDe';
//   }

//   return {
//     messages: (await import(`../locales/${locale}/${component}.json`)).default,
//   };
// });

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  let component = '';
  if (locale === 'ua') {
    component = 'componentUa';
  } else if (locale === 'en') {
    component = 'componentEn';
  } else if (locale === 'de') {
    component = 'componentDe';
  }

  return {
    messages: (await import(`../locales/${locale}/${component}.json`)).default,
  };
});
