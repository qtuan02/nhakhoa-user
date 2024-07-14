import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOAST_ERROR, TOAST_SUCCESS, TOAST_WARNING } from "@/utils/FunctionUiHelpers";
import { IService } from "@/interfaces/IService";
import { createAppoinment } from "@/apis";

interface IAppoinmentState {
    modal: boolean;
    loading: boolean;
    services: IService[];
    doctor_id?: string;
};

const initialState: IAppoinmentState = {
    modal: false,
    loading: false,
    services: [],
    doctor_id: ''
};

const appoinmentSlice = createSlice({
    name: 'appoinment',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.modal = !state.modal;
        },
        addService: (state, action: PayloadAction<IService>) => {
            const service = action.payload;
            if(state.services.find(s => s.id === service.id)) {
                TOAST_WARNING("Dịch vụ đã được thêm!");
            }else{
                state.services.push(service);
                TOAST_SUCCESS("Thêm dịch vụ thành công.");
            }
        },
        deleteService: (state, action: PayloadAction<number>) => {
            const service_id = action.payload;
            const index = state.services.findIndex(s => s.id === service_id);
            if (index !== -1) {
                state.services.splice(index, 1);
                TOAST_SUCCESS("Xóa dịch vụ thành công.");
            } else {
                TOAST_ERROR("Dịch vụ không tồn tại!");
            }
        },
        setDoctorId: (state, action: PayloadAction<string>) => {
            state.doctor_id = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAppoinment.pending, (state) => {
                state.loading = true;
            })
            .addCase(createAppoinment.fulfilled, (state, action) => {
                state.loading = false;
                state.services = [];
                TOAST_SUCCESS(action.payload.message);
            })
            .addCase(createAppoinment.rejected, (state, action: any) => {
                state.loading = false;
                state.services = [];
                TOAST_ERROR(action.error?.message)
            })
    }
});

export const { toggleModal, addService, deleteService, setDoctorId } = appoinmentSlice.actions;
export default appoinmentSlice.reducer;