import { appConfig } from "@/commons/AppConfig";
import axiosClient from "@/commons/AxiosConfig";
import { IResponse } from "@/interfaces/IResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = appConfig.API_LOCAL+"/v2/time";

export const getTimes = createAsyncThunk<IResponse>(
    'time/get',
    async () => {
        try{
            const res = await axiosClient.get(URL);
            return {
                ...res.data,
                data: res.data.data.map((time: string) => ({ time }))
            };
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);
