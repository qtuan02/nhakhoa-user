import axiosClient from "@/commons/AxiosConfig";

const URL = "/v2/time";

export const timeApi = {
    get() {
        return axiosClient.get(URL);
    },
}