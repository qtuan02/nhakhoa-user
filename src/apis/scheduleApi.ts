import { appConfig } from "@/commons/AppConfig";
import axiosClient from "@/commons/AxiosConfig";
import { IResponse } from "@/interfaces/IResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = appConfig.API_LOCAL+"/v2/schedule";

export const getDate = createAsyncThunk<IResponse, string>(
    'schedule/getDate',
    async (doctor_id) => {
        try{
            const res = await axiosClient.get(URL+"/"+doctor_id);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);

export const getTime = createAsyncThunk<IResponse, { doctor_id: string, date: string }>(
    'schedule/getTime',
    async ({ doctor_id, date }) => {
        try{
            const res = await axiosClient.get(URL+"/"+doctor_id+"/"+date);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
); 