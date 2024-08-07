"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import FormAppoiment from "./components/FormAppoinment";
import { useEffect } from "react";
import dayjs from 'dayjs';
import { getAppointmentState } from "@/redux/reducers/appoinmentReducer";
import { getDoctorState } from "@/redux/reducers/doctorReducer";
import { getTimeState } from "@/redux/reducers/timeReducer";
import { doctorsThunk } from "@/redux/thunks/doctorThunk";
import { timesThunk } from "@/redux/thunks/timeThunk";
import { IAppointment } from "@/interfaces/IAppointment";
import { appointmentCreateThunk } from "@/redux/thunks/appointmentThunk";
import { Spin } from "antd";

export default function AppoinmentComponent() {
    const dispatch = useAppDispatch();
    const time = useAppSelector(getTimeState);
    const doctor = useAppSelector(getDoctorState);
    const appoinment = useAppSelector(getAppointmentState);

    useEffect(() => {
        if (doctor.status === 'completed' || doctor.status === 'rejected') {
            dispatch(doctorsThunk());
        }
        if (time.status === 'completed' || time.status === 'rejected') {
            dispatch(timesThunk());
        }
    }, [dispatch, doctor.status, time.status]);

    const handleSubmit = (values: IAppointment) => {
        values.date = dayjs(values.date).format('YYYY-MM-DD');
        values.services = appoinment.services;
        dispatch(appointmentCreateThunk(values));
    }

    return (
        <>
            <FormAppoiment onSubmit={handleSubmit} />
            {appoinment.loading &&
                <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-[rgba(255,255,255,0.7)]'>
                    <Spin size='large' />
                </div>}
        </>
    );
}