"use client";
import CBreadcrumb from "@/custom_antd/CBreadscrumb";
import { Skeleton } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import DetailDoctor from "./components/DetailDoctor";
import { useParams } from "next/navigation";
import { IDoctor } from "@/interfaces/IDoctor";
import { doctorApi } from "@/api/doctorApi";
import { useTranslations } from "next-intl";

export default function DoctorComponent() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IDoctor | undefined>(undefined);

    const t = useTranslations("DetailDoctor");

    const items = [
        {
            title: <Link href="/trang-chu">{t('home')}</Link>
        },
        {
            title: <Link className="!text-blue-700 font-bold" href="#">{t('doctor')}</Link>
        }
    ];

    const getDataDoctor = async (id: string) => {
        setLoading(true);
        const value = await doctorApi.findOne(id);
        setData(value);
        setLoading(false);
    }

    useEffect(() => {
        if(id){
            getDataDoctor(id as string);
        }
    }, [id])

    return (
        <div className="mx-32 mt-28">
            <CBreadcrumb items={items} />
            <br />
            <Skeleton loading={loading}>
                <DetailDoctor data={data} />
            </Skeleton>
        </div>
    );
}