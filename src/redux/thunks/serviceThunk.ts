import { serviceApi } from "@/api/serviceApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const servicesThunk = createAsyncThunk(
    "service/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await serviceApi.get();
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)

export const serviceSpecialThunk = createAsyncThunk(
    "service/getSpecial",
    async (_, { rejectWithValue }) => {
        try {
            const res = await serviceApi.getSpecial();
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)