// import type { Metadata } from 'next';
// import dynamic from 'next/dynamic';
// import localFont from 'next/font/local';

// import { montserrat } from '@/utils/fonts';

// import Header from '@/components/Header/Header';
// import Footer from '@/components/Footer/Footer';
// import { Temporary } from '@/components/UI/temporary/temporary';
// import ToastContainer from '@/components/UI/ToastContainer/ToastContainer';

// import './globals.scss';

// const ReduxProvider = dynamic(
//   () => import('../Providers/ReduxProvider/ReduxProvider'),
//   {
//     ssr: false,
//   }
// );

// const angryFont = localFont({
//   src: '../../public/fonts/Angry.otf',
// });

// export const metadata: Metadata = {
//   title: 'JunChirp',
//   description: 'JunChirp',
//   openGraph: {
//     images: [{ url: '/logo.png' }],
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image', // Или другой тип карточки
//     images: ['/logo.png'],
//   },
//   icons: {
//     icon: '/logo.png',
//   },
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${angryFont.className} ${montserrat.className}`}>
//         <ReduxProvider>
//           <ToastContainer />
//           <Header />
//           <Temporary />
//           <main>{children}</main>
//           <Footer />
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';

import { montserrat } from '@/utils/fonts';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Temporary } from '@/components/UI/temporary/temporary';
import ToastContainer from '@/components/UI/ToastContainer/ToastContainer';

import './globals.scss';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const ReduxProvider = dynamic(
  () => import('../Providers/ReduxProvider/ReduxProvider'),
  {
    ssr: false,
  }
);

const angryFont = localFont({
  src: '../../public/fonts/Angry.otf',
});

export const metadata: Metadata = {
  title: 'JunChirp',
  description: 'JunChirp',
  openGraph: {
    images: [{ url: '/logo.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Или другой тип карточки
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={`${angryFont.className} ${montserrat.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <ToastContainer />
            <Header />
            <Temporary />
            <main>{children}</main>
            <Footer />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
