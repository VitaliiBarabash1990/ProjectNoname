"use client";

import { roboto } from "@/utils/fonts";

import s from "./ErrorPage505.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Error505() {
	const t = useTranslations("error505");
	return (
		<section className={s.section}>
			<div className={`${roboto.className} ${s.container}`}>
				<div className={s.content__block}>
					<svg className={s.img__505} width="242" height="210">
						<use href="/symbol-defs.svg#505"></use>
					</svg>
					<h1 className={s.title}>{t("errorTitle")}</h1>
					<p className={s.details}>{t("errorMessage")}</p>
					<Link href="/" className={`${s.link} ${s.button}`}>
						{t("homeButton")}
					</Link>
				</div>
			</div>
		</section>
	);
}
