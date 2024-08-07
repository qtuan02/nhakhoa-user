import axiosClient from "@/commons/AxiosConfig";
import { IAppointment } from "@/interfaces/IAppointment";
import { getLanguage } from "@/utils/FunctionUiHelpers";

const language = getLanguage();
const URL = language+"/appointment";

export const appointmentApi = {
    create(body: IAppointment) {
        return axiosClient.post(URL, body);
    },
}