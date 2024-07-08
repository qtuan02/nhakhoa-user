import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IDoctor } from "@/interfaces/IDoctor";
import { getDoctors } from "@/apis";

interface IDoctorState {
    loading?: boolean;
    status?: 'pending' | 'completed' | 'rejected';
    data: IDoctor[];
};

const initialState: IDoctorState = {
    loading: false,
    status: 'completed',
    data: [],
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
    }
});

export default doctorSlice.reducer;