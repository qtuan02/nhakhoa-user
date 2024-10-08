"use client"
import CBreadcrumb from "@/custom_antd/CBreadscrumb";
import CSkeleton from "@/custom_antd/CSkeleton";
import { IService } from "@/interfaces/IService";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DetailService from "../components/DetailService";
import { serviceApi } from "@/api/serviceApi";
import { useTranslations } from "next-intl";

export default function SerivceDetailComponent() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IService | undefined>(undefined);

    const t = useTranslations("Common")

    const getDataService = async (id : string) => {
        setLoading(true);
        const value = await serviceApi.findOne(id);
        setData(value);
        setLoading(false);
    }

    const items = [
        {
            title: <Link href="/trang-chu">{t('t_home')}</Link>
        },
        {
            title: <Link className="!text-blue-700 font-bold" href="#">{t('t_service')}</Link>
        }
    ];

    useEffect(() => {
        if(id){
            getDataService(id as string);
        }
    }, [id])

    return (
        <div className="mx-32 mt-28">
            <CBreadcrumb items={items} />
            <br />
            <CSkeleton loading={loading}>
                <DetailService data={data} />
            </CSkeleton>
        </div>
    );
}