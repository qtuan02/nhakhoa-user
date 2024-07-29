import { categoryApi } from "@/api/categoryApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const categoriesThunk = createAsyncThunk(
    "category/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await categoryApi.get();
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)