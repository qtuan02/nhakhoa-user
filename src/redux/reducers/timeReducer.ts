import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { getTimes } from "@/apis";
import { ITime } from "@/interfaces/IAppoinment";

interface ITimeState {
    loading?: boolean;
    status?: 'pending' | 'completed' | 'rejected';
    data: ITime[];
};

const initialState: ITimeState = {
    loading: false,
    status: 'completed',
    data: [],
};

const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTimes.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(getTimes.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getTimes.rejected, (state, action: any) => {
                state.data = [];
                state.loading = false;
                TOAST_ERROR(action.error?.message)
            })
    }
});

export default timeSlice.reducer;