import axiosClient from "@/commons/AxiosConfig";
import { IAppointment } from "@/interfaces/IAppointment";

const URL = "/v2/appointment";

export const appointmentApi = {
    create(body: IAppointment) {
        return axiosClient.post(URL, body);
    },
}