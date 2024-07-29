"use client";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CSkeleton from "@/custom_antd/CSkeleton";
import CTitle from "@/custom_antd/CTitle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { IService } from "@/interfaces/IService";
import { removeVietnameseTones } from "@/utils/FunctionHelpers";
import ListSerivce from "./components/ListService";
import { CInput } from "@/custom_antd/CInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getServiceState } from "@/redux/reducers/serviceReducer";
import { servicesThunk } from "@/redux/thunks/serviceThunk";

export default function SerivceComponent() {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");
    const service = useAppSelector(getServiceState);

    useEffect(() => {
        if(service.status === "completed" || service.status === "rejected"){
            dispatch(servicesThunk());
        }
    }, [dispatch, service.status]);

    const onSearch = (value: string) => {
        setSearch(value);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const filterData = service?.data?.filter((item: IService) =>
        removeVietnameseTones(item?.name?.toLowerCase()).includes(removeVietnameseTones(search.toLowerCase()))
    );

    return (
        <div className="mx-32 mt-28">
            <CRow justify={"space-between"}>
                <CCol>
                    <CTitle className="!text-[#313b79] !pb-2">Dịch vụ</CTitle>
                </CCol>
                <CCol>
                    {/* <CSearch size="large" placeholder="Tìm dịch vụ..." onSearch={onSearch} enterButton /> */}
                    <CInput prefix={<FontAwesomeIcon icon={faSearch} className="!px-1" />} size="large" placeholder="Tìm dịch vụ..." onChange={onChange} />
                </CCol>
            </CRow>
            <CSkeleton loading={service.loading} rows={12}>
                <ListSerivce data={filterData} />
            </CSkeleton>
        </div>
    );
}