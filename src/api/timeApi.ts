import axiosClient from "@/commons/AxiosConfig";
import { getLanguage } from "@/utils/FunctionUiHelpers";

const language = getLanguage();
const URL = language+"/time";

export const timeApi = {
    get() {
        return axiosClient.get(URL);
    },
}