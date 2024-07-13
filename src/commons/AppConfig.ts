
interface IAppConfig {
    API_LOCAL: string,
    HOT_SERVICE: number
}

export const appConfig: IAppConfig = {
    API_LOCAL: process.env.NEXT_PUBLIC_API_LOCAL || "",
    HOT_SERVICE: parseInt(process.env.NEXT_PUBLIC_HOT_SERVICE || "0", 10)
}