"use client";
import CBreadcrumb from "@/custom_antd/CBreadscrumb";
import { Skeleton } from "antd";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import DetailDoctor from "./components/DetailDoctor";

export default function DoctorDetailComponent() {
    const doctor = useAppSelector((state) => state.doctor);

    const items = [
        {
            title: <Link href="/trang-chu">Trang chủ</Link>
        },
        {
            title: <Link className="!text-blue-700 font-bold" href="#">Bác sĩ</Link>
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mx-32 mt-28">
            <CBreadcrumb items={items} />
            <br />
            <Skeleton loading={doctor.loadingDoctor}>
                <DetailDoctor data={doctor.doctor} />
            </Skeleton>
        </div>
    );
}