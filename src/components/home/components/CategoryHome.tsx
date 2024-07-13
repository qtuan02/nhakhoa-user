import { getCategories } from "@/apis/categoryApi";
import CCard from "@/custom_antd/CCard";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CSkeleton from "@/custom_antd/CSkeleton";
import CTitle from "@/custom_antd/CTitle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

export default function CategoryHome() {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.category);
    useEffect(() => {
        if (category.status === 'completed' || category.status === 'rejected') {
            dispatch(getCategories());
        }
    }, [category.status, dispatch]);

    return (
        <>
            <CTitle className="!text-center">Chăm sóc sức khỏe răng miệng toàn diện</CTitle>
            <CSkeleton loading={category.loading}>
                <CRow gutter={[16, 16]} className="p-2">
                    {category.data.map((c, index) => (
                        <CCol span={6} key={index} className="!px-4 py-2">
                            <CCard image={c.image} styleCard={{ border: "1px solid" }} styleImage={{ height: 150 }}><CTitle className="text-center hover:text-blue-600 cursor-pointer" level={4}>{c.name}</CTitle></CCard>
                        </CCol>
                    ))}
                </CRow>
            </CSkeleton>
        </>
    );
}
