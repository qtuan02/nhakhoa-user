import { getRequestConfig } from 'next-intl/server';
import { cookies } from "next/headers";

const getLanguageCookie = () => {
    const cookieStore = cookies();
    const locale = cookieStore.get('language')?.value as string || "vi";
    return locale;
}

export default getRequestConfig(async () => {
    const locale = getLanguageCookie();

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});