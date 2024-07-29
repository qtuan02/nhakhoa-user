import { IService } from "@/interfaces/IService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOAST_ERROR, TOAST_SUCCESS, TOAST_WARNING } from "@/utils/FunctionUiHelpers";
import { appointmentCreateThunk } from "../thunks/appointmentThunk";
import { RootState } from "../store";

interface IAppoinmentState {
    loading: boolean;
    services?: IService[];
    doctor_id?: string;
};

const initialState: IAppoinmentState = {
    loading: false,
    services: [],
    doctor_id: '',
};

const appoinmentSlice = createSlice({
    name: 'appoinment',
    initialState,
    reducers: {
        addService: (state, action: PayloadAction<IService>) => {
            const service = action.payload;
            if(state?.services?.find(s => s.id === service.id)) {
                TOAST_WARNING("Dịch vụ đã được thêm!");
            }else{
                state?.services?.push(service);
                TOAST_SUCCESS("Thêm dịch vụ thành công.");
            }
        },
        deleteService: (state, action: PayloadAction<number>) => {
            const service_id = action.payload;
            const index = state?.services?.findIndex(s => s.id === service_id);
            if (index !== undefined) {
                state.services?.splice(index, 1);
                TOAST_SUCCESS("Xóa dịch vụ thành công.");
            }
        },
        setDoctorId: (state, action: PayloadAction<string>) => {
            state.doctor_id = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(appointmentCreateThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(appointmentCreateThunk.fulfilled, (state, action) => {
                state.loading = false;
                TOAST_SUCCESS(action.payload.message);
            })
            .addCase(appointmentCreateThunk.rejected, (state, action: any) => {
                state.loading = false;
                TOAST_ERROR(action?.payload)
            })
    }
});

export const getAppointmentState = (state: RootState) => state.appointment;
export const { addService, deleteService, setDoctorId } = appoinmentSlice.actions;
export default appoinmentSlice.reducer;