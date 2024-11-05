"use client";

import { useRouter, usePathname } from "@/navigation";
import { ChangeEvent } from "react";

type LocalePageProps = {
	locale: string;
};

export default function LanguageChanger({ locale }: LocalePageProps) {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		router.push(pathname, { locale: e.target.value });
	};

	return (
		<select value={locale} onChange={handleChange}>
			<option value="ua">Українська</option>
			<option value="en">English</option>
		</select>
	);
}
