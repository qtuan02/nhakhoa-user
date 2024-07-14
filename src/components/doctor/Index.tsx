"use client";
import CTitle from "@/custom_antd/CTitle";
import { Image } from "antd";
import SwiperDoctor from "./components/SwiperDoctor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getDoctors } from "@/apis";
import CSkeleton from "@/custom_antd/CSkeleton";

export default function DoctorComponent() {
    const dispatch = useAppDispatch();
    const doctor = useAppSelector((state) => state.doctor);
    useEffect(() => {
        if(doctor.status === 'completed' || doctor.status === 'rejected') {
            dispatch(getDoctors());
        }
    }, [dispatch, doctor.status]);

    return (
        <>
            <Image src="https://benhvienbacha.vn/wp-content/uploads/2023/06/Banner-web-BS-1820x595.jpg" alt="Hình ảnh..." preview={false} />
            <CTitle className="text-center py-5">ĐỘI NGŨ BÁC SĨ</CTitle>
            <div className="mx-32">
                <CSkeleton loading={doctor.loading}>
                    <SwiperDoctor />
                </CSkeleton>
            </div>
        </>
    );
}    