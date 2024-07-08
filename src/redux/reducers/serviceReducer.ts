import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IService } from "@/interfaces/IService";
import { getServices } from "@/apis/serviceApi";

interface IServiceState {
    loading?: boolean;
    status?: 'pending' | 'completed' | 'rejected';
    data: IService[];
};

const initialState: IServiceState = {
    loading: false,
    status: 'completed',
    data: [],
};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getServices.rejected, (state, action: any) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action.error?.message)
            })
    }
});

export default serviceSlice.reducer;