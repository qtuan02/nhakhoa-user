import { getCategories } from "@/apis/categoryApi";
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

    console.log(category.data);

    return (
        <>
            <CTitle className="!text-center my-10">Chăm sóc sức khỏe răng miệng toàn diện</CTitle>
            <CSkeleton loading={category.loading}>
                <CRow gutter={[16, 16]}>

                </CRow>
            </CSkeleton>
        </>
    );
}
