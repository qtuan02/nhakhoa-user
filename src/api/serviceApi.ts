import { appConfig } from "@/commons/AppConfig";
import axiosClient from "@/commons/AxiosConfig";
import { getLanguage, TOAST_ERROR } from "@/utils/FunctionUiHelpers";

const language = getLanguage();
const URL = language+"/service";

export const serviceApi = {
    get() {
        return axiosClient.get(URL);
    },
    getSpecial() {
        return axiosClient.get(URL + "?page=1&limit=" + appConfig.HOT_SERVICE);
    },
    findOne: async (id: string) => {
        try{
            const res = await axiosClient.get(URL + "/" + id);
            return res.data.data;
        }catch(error: any) {
            TOAST_ERROR(error?.response?.data?.message)
        }
    }
}