
interface IAppConfig {
    API_LOCAL: string,
    HOT_SERVICE: number,
    API_ENG: string,
    API_VIE: string,
}

export const appConfig: IAppConfig = {
    API_LOCAL: process.env.NEXT_PUBLIC_API_LOCAL || "",
    HOT_SERVICE: parseInt(process.env.NEXT_PUBLIC_HOT_SERVICE || "0", 10),
    API_ENG: process.env.NEXT_PUBLIC_API_ENG || "",
    API_VIE: process.env.NEXT_PUBLIC_API_VIE || "",
}