import { appointmentApi } from "@/api/appointmentApi";
import { IAppointment } from "@/interfaces/IAppointment";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const appointmentCreateThunk = createAsyncThunk(
    "appointment/create",
    async (body: IAppointment, { rejectWithValue }) => {
        try {
            const res = await appointmentApi.create(body);
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
)