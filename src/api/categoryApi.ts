import axiosClient from "@/commons/AxiosConfig";
import { getLanguage, TOAST_ERROR } from "@/utils/FunctionUiHelpers";

const language = getLanguage();
const URL = language+"/category";

export const categoryApi = {
    get() {
        return axiosClient.get(URL);
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