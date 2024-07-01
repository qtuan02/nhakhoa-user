"use client"
import CButton from "@/custom_antd/CButton";
import CCol from "@/custom_antd/CCol";
import CDatePicker from "@/custom_antd/CDatePicker";
import { CForm, CFormItem } from "@/custom_antd/CForm";
import { CInput, CTextArea } from "@/custom_antd/CInput";
import CRow from "@/custom_antd/CRow";
import { CSelect, CSelectOption } from "@/custom_antd/CSelect";
import CTitle from "@/custom_antd/CTitle";
import { colorPW } from "@/utils/Colors";
import { getHoverColors } from "@/utils/FunctionHelpers";
import { ConfigProvider } from "antd";
import { useState } from "react";

export default function FormAppoiment() {
    const [isOpen, setIsOpen] = useState(false);
    const itemDentis = [
        {
            key: 1,
            label: "Hà Nhật Khánh"
        },
        {
            key: 2,
            label: "Huỳnh Quốc Tuấn"
        }
    ];

    const itemTime = [
        {
            key: "08:00 - 09:00",
            label: "08:00 - 09:00"
        },
        {
            key: "09:00 - 10:00",
            label: "09:00 - 10:00"
        },
        {
            key: "10:00 - 11:00",
            label: "10:00 - 11:00"
        }
    ];

    const disabledDate = (current: any) => {
        return current && (current.valueOf() < Date.now() || current.day() === 0);
    };
    
    return (
        <div className="w-[1000px] mx-auto p-12">
            <CTitle level={2} className="text-center">Đặt lịch hẹn</CTitle>
            <CForm layout="vertical" className="!p-6">
                <CRow gutter={32}>
                    <CCol xs={12}>
                        <CFormItem label="Họ và tên" required>
                            <CInput placeholder="Nhập tên của bạn" className="h-12 p-2 ts-16" />
                        </CFormItem>
                    </CCol>
                    <CCol xs={12}>
                        <CFormItem label="Số điện thoại" required>
                            <CInput placeholder="Nhập tên của bạn" className="h-12 p-2 ts-16" />
                        </CFormItem>
                    </CCol>
                </CRow>
                <CRow gutter={32}>
                    <CCol xs={12}>
                        <CFormItem label="Nha sĩ">
                            <CSelect className="!h-12 ts-16" defaultValue={""}>
                                <CSelectOption value="" className="!py-2 ts-16">Không chọn nha sĩ</CSelectOption>
                                    {itemDentis.map((item, index) => (
                                        <CSelectOption key={index} value={item.key} className="!py-2 ts-16">{item.label}</CSelectOption>
                                    ))}
                            </CSelect>
                        </CFormItem>
                    </CCol>
                    <CCol xs={12}>    
                        <CRow gutter={12}>
                            <CCol xs={12}>
                                <CFormItem label="Ngày hẹn" required>
                                    <CDatePicker disabledDate={disabledDate} className="h-12 w-full ts-16" placeholder="yyyy-mm-dd" />
                                </CFormItem>
                            </CCol>
                            <CCol xs={12}>
                                <CFormItem label="Giờ hẹn" required>
                                    <CSelect className="!h-12 ts-16" defaultValue={"08:00 - 09:00"}>
                                        {itemTime.map((item, index) => (
                                            <CSelectOption key={index} value={item.key} className="!py-2 ts-16">{item.label}</CSelectOption>
                                        ))}
                                    </CSelect>
                                </CFormItem>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
                <CFormItem label="Dịch vụ đặt hẹn">
                    <div className="bg-[#e4e4e4] h-[200px] flex items-center justify-center text-center pb-2 rounded-md border-solid border-[1px] border-[#d9d9d9]">
                        <div>
                            <p className="block py-2">Chưa có dịch vụ nào được chọn. Chọn dịch vụ (nếu có)!</p>
                            <ConfigProvider theme={{
                                        components: {
                                        Button: {
                                            colorPrimary: `linear-gradient(24deg,  ${colorPW.join(', ')})`,
                                            colorPrimaryHover: `linear-gradient(180deg, ${getHoverColors(colorPW).join(', ')})`,
                                            lineWidth: 0,
                                }}}}>
                                <CButton type="primary" className="rounded-lg">Chọn dịch vụ</CButton>
                            </ConfigProvider>
                        </div>
                    </div>
                </CFormItem>
                <CFormItem label="Ghi chú">
                    <CTextArea
                        showCount
                        maxLength={500}
                        placeholder="Thông tin thêm"
                        className="ts-16"
                        style={{ height: 200, resize: 'none' }}
                    />
                </CFormItem>
                <br />
                <CFormItem className="text-center">
                    <ConfigProvider theme={{
                        components: {
                        Button: {
                        colorPrimary: `linear-gradient(24deg,  ${colorPW.join(', ')})`,
                        colorPrimaryHover: `linear-gradient(180deg, ${getHoverColors(colorPW).join(', ')})`,
                        lineWidth: 0,
                    }}}}>
                        <CButton type="primary" className="!rounded-3xl !px-14 !py-6 ts-20 !font-[500]">Gửi thông tin</CButton>
                    </ConfigProvider>
                </CFormItem>
            </CForm>
        </div>
    );
}