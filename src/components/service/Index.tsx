"use client";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CSearch from "@/custom_antd/CSearch";
import CTitle from "@/custom_antd/CTitle";

export default function SerivceComponent() {
    const onSearch = (value: string) => {
        console.log(value);
    };

    return (
        <div className="mx-32 mt-28">
            <CRow justify={"space-between"}>
                <CCol>
                    <CTitle className="!text-[#313b79] !pb-2">Dịch vụ</CTitle>
                </CCol>
                <CCol>
                    <CSearch size="large" placeholder="Tìm dịch vụ..." onSearch={onSearch} enterButton />
                </CCol>
            </CRow>
            
        </div>
    );
}