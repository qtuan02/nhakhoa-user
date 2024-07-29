import axiosClient from "@/commons/AxiosConfig";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";

const URL = "/v2/doctor";

export const doctorApi = {
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