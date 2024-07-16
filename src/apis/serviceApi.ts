import { appConfig } from "@/commons/AppConfig";
import axiosClient from "@/commons/AxiosConfig";
import { IResponse } from "@/interfaces/IResponse";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = appConfig.API_LOCAL+"/v2/service";

export const getService = async (id: string) => {
    try {
        const res = await axiosClient.get(URL+ '/' +id);
        return res.data.data;
    }catch(error: any) {
        TOAST_ERROR(error?.response?.data?.message);
        return null;
    }
};

export const getServices = createAsyncThunk<IResponse>(
    'service/get',
    async () => {
        try{
            const res = await axiosClient.get(URL);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);

export const getHotServices = createAsyncThunk<IResponse>(
    'service/getHot',
    async () => {
        try{
            const res = await axiosClient.get(URL+"?page=1&limit="+appConfig.HOT_SERVICE);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);
