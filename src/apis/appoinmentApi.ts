import axiosClient from "@/commons/AxiosConfig";
import { IAppoinment } from "@/interfaces/IAppoinment";
import { IResponse } from "@/interfaces/IResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = '/v2/appointment';

export const createAppoinment = createAsyncThunk<IResponse, IAppoinment>(
    'appoinment/create',
    async (data) => {
        try{
            const res = await axiosClient.post(URL, data);
            return res.data;
        }catch(error: any) {
            throw error?.response?.data;
        }
    }
);