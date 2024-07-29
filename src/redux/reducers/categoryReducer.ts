import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "@/interfaces/ICategory";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { categoriesThunk } from "../thunks/categoryThunk";
import { RootState } from "../store";

interface ICategoryState {
    loading: boolean;
    status: 'pending' | 'completed' | 'rejected';
    data?: ICategory[];
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
            .addCase(categoriesThunk.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(categoriesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(categoriesThunk.rejected, (state, action) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action?.payload);
            })
    }
});

export const getCategoryState = (state: RootState) => state.category;
export default categorySlice.reducer;