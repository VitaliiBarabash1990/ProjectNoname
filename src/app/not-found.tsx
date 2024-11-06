// "use client";

import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Error404 from "@/components/ErrorPage404/ErrorPage404";
import { routing } from "@/i18n/routing";

export default function NotFoundPage() {
	return (
		<BaseLayout locale={routing.defaultLocale}>
			<Error404 />
		</BaseLayout>
	);
}
