import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IDoctor } from "@/interfaces/IDoctor";
import { getCategories } from "@/apis/categoryApi";
import { ICategory } from "@/interfaces/ICategory";

interface ICategoryState {
    loading?: boolean;
    status?: 'pending' | 'completed' | 'rejected';
    data: ICategory[];
};

const initialState: ICategoryState = {
    loading: false,
    status: 'completed',
    data: [],
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getCategories.rejected, (state, action: any) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action.error?.message)
            })
    }
});

export default categorySlice.reducer;