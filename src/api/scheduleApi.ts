import axiosClient from "@/commons/AxiosConfig";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";

const URL = "/v2/schedule";

export const scheduleApi = {
    getDate: async (doctor_id: string) => {
        try{
            const res = await axiosClient.get(URL + "/" + doctor_id);
            return res.data.data;
        }catch(error: any) {
            TOAST_ERROR(error?.response?.data?.message)
        }
    },
    getTime: async (doctor_id: string, date: string) => {
        try{
            const res = await axiosClient.get(URL + "/" + doctor_id + "/" + date);
            return res.data.data;
        }catch(error: any) {
            TOAST_ERROR(error?.response?.data?.message)
        }
    }
}