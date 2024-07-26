import { createSlice } from "@reduxjs/toolkit";
import { TOAST_ERROR } from "@/utils/FunctionUiHelpers";
import { IDate, ITime } from "@/interfaces/IAppoinment";
import { getDate, getTime } from "@/apis/scheduleApi";

interface IScheduleState {
    loadingDate: boolean;
    statusDate: 'pending' | 'completed' | 'rejected';
    date?: IDate[];
    loadingTime: boolean;
    statusTime: 'pending' | 'completed' | 'rejected';
    time?: ITime[];
};

const initialState: IScheduleState = {
    loadingDate: false,
    statusDate: 'completed',
    date: [],
    loadingTime: false,
    statusTime: 'completed',
    time: [],
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setDate: (state) => {
            state.date = [];
        },
        setTime: (state) => {
            state.time = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDate.pending, (state) => {
                state.statusDate = 'pending';
                state.loadingDate = true;
            })
            .addCase(getDate.fulfilled, (state, action) => {
                state.loadingDate = false;
                state.date = action.payload.data;
            })
            .addCase(getDate.rejected, (state, action: any) => {
                state.date = [];
                state.loadingDate = false;
                TOAST_ERROR(action.error?.message)
            })
            .addCase(getTime.pending, (state) => {
                state.statusTime = 'pending';
                state.loadingTime = true;
            })
            .addCase(getTime.fulfilled, (state, action) => {
                state.loadingTime = false;
                state.time = action.payload.data;
            })
            .addCase(getTime.rejected, (state, action: any) => {
                state.time = [];
                state.loadingTime = false;
                TOAST_ERROR(action.error?.message)
            })
    }
});

export const { setDate, setTime } = scheduleSlice.actions;
export default scheduleSlice.reducer;