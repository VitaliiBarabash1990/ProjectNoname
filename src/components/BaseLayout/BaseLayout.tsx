// import { clsx } from "clsx";
// import { Inter } from "next/font/google";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { ReactNode } from "react";

// const inter = Inter({ subsets: ["latin"] });

// type Props = {
// 	children: ReactNode;
// 	locale: string;
// };

// export default async function BaseLayout({ children, locale }: Props) {
// 	// Providing all messages to the client
// 	// side is the easiest way to get started
// 	const messages = await getMessages();

// 	return (
// 		<html className="h-full" lang={locale}>
// 			<body className={clsx(inter.className, "flex h-full flex-col")}>
// 				<NextIntlClientProvider messages={messages}>
// 					{children}
// 				</NextIntlClientProvider>
// 			</body>
// 		</html>
// 	);
// }

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

import { montserrat } from "@/utils/fonts";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Temporary } from "@/components/UI/temporary/temporary";
import ToastContainer from "@/components/UI/ToastContainer/ToastContainer";

import "@/app/[locale]/globals.scss";
import { NextIntlClientProvider, useMessages } from "next-intl";

const ReduxProvider = dynamic(
	() => import("../../Providers/ReduxProvider/ReduxProvider"),
	{
		ssr: false,
	}
);

const angryFont = localFont({
	src: "../../../public/fonts/Angry.otf",
});

export const metadata: Metadata = {
	title: "JunChirp",
	description: "JunChirp",
	openGraph: {
		images: [{ url: "/logo.png" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image", // Или другой тип карточки
		images: ["/logo.png"],
	},
	icons: {
		icon: "/logo.png",
	},
};

export default function BaseLayout({
	children,
	locale,
}: Readonly<{
	children: React.ReactNode;
	locale: string;
}>) {
	const messages = useMessages();
	return (
		<html lang={locale}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<body className={`${angryFont.className} ${montserrat.className}`}>
					<ReduxProvider>
						<ToastContainer />
						<Header />
						<Temporary />
						<main>{children}</main>
						<Footer />
					</ReduxProvider>
				</body>
			</NextIntlClientProvider>
		</html>
	);
}
