import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IDoctor } from "@/interfaces/IDoctor";
import { doctorsThunk } from "../thunks/doctorThunk";
import { RootState } from "../store";

interface IDoctorState {
    loading: boolean;
    status: 'pending' | 'completed' | 'rejected';
    data?: IDoctor[];
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
            .addCase(doctorsThunk.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(doctorsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(doctorsThunk.rejected, (state, action) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action?.payload);
            })
    }
});

export const getDoctorState = (state: RootState) => state.doctor;
export default doctorSlice.reducer;