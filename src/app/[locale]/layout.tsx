import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

import { montserrat } from "@/utils/fonts";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Temporary } from "@/components/UI/temporary/temporary";
import ToastContainer from "@/components/UI/ToastContainer/ToastContainer";

import "./globals.scss";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

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

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}
	setRequestLocale(locale);
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
