import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IDoctor } from "@/interfaces/IDoctor";
import { getDoctor, getDoctors } from "@/apis";

interface IDoctorState {
    loading: boolean;
    status: 'pending' | 'completed' | 'rejected';
    data?: IDoctor[];
    loadingDoctor: boolean;
    statusDoctor: 'pending' | 'completed' | 'rejected';
    doctor?: IDoctor | null;
};

const initialState: IDoctorState = {
    loading: false,
    status: 'completed',
    data: [],
    doctor: null,
    loadingDoctor: false,
    statusDoctor: 'completed',
};

const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDoctors.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(getDoctors.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getDoctors.rejected, (state, action: any) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action.error?.message)
            })
            .addCase(getDoctor.pending, (state) => {
                state.statusDoctor = 'pending';
                state.loadingDoctor = true;
            })
            .addCase(getDoctor.fulfilled, (state, action) => {
                state.loadingDoctor = false;
                state.doctor = action.payload.data;
            })
            .addCase(getDoctor.rejected, (state, action: any) => {
                state.doctor = null;
                state.loadingDoctor = false;
                TOAST_ERROR(action.error?.message)
            })
    }
});

export default doctorSlice.reducer;