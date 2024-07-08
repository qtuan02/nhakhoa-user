"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import FormAppoiment from "./components/FormAppoinment";
import { IAppoinment } from "@/interfaces/IAppoinment";
import { useEffect } from "react";
import { createAppoinment, getDoctors, getTimes } from "@/apis";
import CSkeleton from "@/custom_antd/CSkeleton";
import dayjs from 'dayjs';

export default function AppoinmentComponent() {
    const dispatch = useAppDispatch();
    const appoinment = useAppSelector((state) => state.appoinment);

    useEffect(() => {
        dispatch(getDoctors());
        dispatch(getTimes());
    }, [dispatch]);

    const handleSubmit = (values: IAppoinment) => {
        values.date = dayjs(values.date).format('YYYY-MM-DD');
        values.services = appoinment.services;
        dispatch(createAppoinment(values));
    }

    return (
        <CSkeleton className="py-20 px-20" paragraph={{ rows: 10 }} loading={appoinment.loading}>
            <FormAppoiment onSubmit={handleSubmit} />
        </CSkeleton>
    );
}