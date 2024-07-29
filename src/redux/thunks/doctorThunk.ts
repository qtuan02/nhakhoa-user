import { doctorApi } from "@/api/doctorApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const doctorsThunk = createAsyncThunk(
    "doctor/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await doctorApi.get();
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)