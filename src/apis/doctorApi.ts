import { appConfig } from "@/commons/AppConfig";
import axiosClient from "@/commons/AxiosConfig";
import { IResponse } from "@/interfaces/IResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = appConfig.API_LOCAL+'/v2/doctor';

export const getDoctor = createAsyncThunk<IResponse, string>(
    'doctor/detail',
    async (id) => {
        try{
            const res = await axiosClient.get(URL+ '/' +id);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);

export const getDoctors = createAsyncThunk<IResponse>(
    'doctor/get',
    async () => {
        try{
            const res = await axiosClient.get(URL);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);