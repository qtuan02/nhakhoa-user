import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IService } from "@/interfaces/IService";
import { getHotServices, getServices } from "@/apis";

interface IServiceState {
    loading: boolean;
    status: 'pending' | 'completed' | 'rejected';
    data?: IService[];
    loadingHot: boolean;
    statusHot: 'pending' | 'completed' | 'rejected';
    dataHot?: IService[];
};

const initialState: IServiceState = {
    loading: false,
    status: 'completed',
    data: [],
    loadingHot: false,
    statusHot: 'completed',
    dataHot: [],
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
            .addCase(getHotServices.pending, (state) => {
                state.statusHot = 'pending';
                state.loadingHot = true;
            })
            .addCase(getHotServices.fulfilled, (state, action) => {
                state.loadingHot = false;
                state.dataHot = action.payload.data;
            })
            .addCase(getHotServices.rejected, (state, action: any) => {
                state.dataHot = [];
                state.loadingHot = false;
                TOAST_ERROR(action.error?.message)
            })
    }
});

export default serviceSlice.reducer;