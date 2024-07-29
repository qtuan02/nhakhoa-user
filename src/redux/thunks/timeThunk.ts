import { timeApi } from "@/api/timeApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const timesThunk = createAsyncThunk(
    "time/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await timeApi.get();
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)