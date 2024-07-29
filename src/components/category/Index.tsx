"use client";
import CBreadcrumb from "@/custom_antd/CBreadscrumb";
import CSkeleton from "@/custom_antd/CSkeleton";
import { ICategory } from "@/interfaces/ICategory";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DetailCategory from "./components/DetailCategory";
import { categoryApi } from "@/api/categoryApi";

export default function CategoryComponent() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ICategory | undefined>(undefined);

    const items = [
        {
            title: <Link href="/trang-chu">Trang chủ</Link>
        },
        {
            title: <Link className="!text-blue-700 font-bold" href="#">Danh mục</Link>
        }
    ];

    const getDataCategory = async (id: string) => {
        setLoading(true);
        const value = await categoryApi.findOne(id);
        setData(value);
        setLoading(false);
    }

    useEffect(() => {
        if(id){
            getDataCategory(id as string);
        }
    }, [id])

    return (
        <div className="mx-32 mt-28">
            <CBreadcrumb items={items} />
            <br />
            <CSkeleton loading={loading}>
                <DetailCategory data={data} />
            </CSkeleton>
            <br />
            <CSkeleton loading={loading}/>
        </div>
    );
}