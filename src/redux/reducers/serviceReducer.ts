import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IService } from "@/interfaces/IService";
import { serviceSpecialThunk, servicesThunk } from "../thunks/serviceThunk";
import { RootState } from "../store";

interface IServiceState {
    loading: boolean;
    status: 'pending' | 'completed' | 'rejected';
    data?: IService[];
    loadingSpecial: boolean;
    statusSpecial: 'pending' | 'completed' | 'rejected';
    dataSpecial?: IService[];
};

const initialState: IServiceState = {
    loading: false,
    status: 'completed',
    data: [],
    loadingSpecial: false,
    statusSpecial: 'completed',
    dataSpecial: [],
};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(servicesThunk.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(servicesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(servicesThunk.rejected, (state, action: any) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action?.payload);
            })
            .addCase(serviceSpecialThunk.pending, (state) => {
                state.statusSpecial = 'pending';
                state.loadingSpecial = true;
            })
            .addCase(serviceSpecialThunk.fulfilled, (state, action) => {
                state.loadingSpecial = false;
                state.dataSpecial = action.payload.data;
            })
            .addCase(serviceSpecialThunk.rejected, (state, action: any) => {
                state.dataSpecial = [];
                state.loadingSpecial = false;
                TOAST_ERROR(action?.payload);
            })
    }
});

export const getServiceState = (state: RootState) => state.service;
export default serviceSlice.reducer;