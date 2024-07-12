"use client"
import { Header } from "antd/es/layout/layout";
import { Avatar, Button, ConfigProvider } from "antd";
import Link from "next/link";
import CRow from "@/custom_antd/CRow";
import CCol from "@/custom_antd/CCol";
import CMenu from "@/custom_antd/CMenu";
import { customItemMenu, getHoverColors } from "@/utils/FunctionHelpers";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { colorBB, colorYW } from "@/utils/Colors";
import CButton from "@/custom_antd/CButton";

export default function AppHeader() {
    const choose = usePathname();
    const items = [
        {
            key: "/trang-chu",
            label: "Trang chủ"
        },
        {
            key: "/gioi-thieu",
            label: "Giới thiệu"
        },
        {
            key: "/dich-vu",
            label: "Dịch vụ"
        },
        {
            key: "/doi-ngu-nha-si",
            label: "Đội ngũ nha sĩ"
        }
    ];

    return (
        <Header className="!bg-[#fff] border-b border-[#f1f1f1] shadow-xl fixed top-0 left-0 w-full z-50">
            <CRow className="h-full">
                <CCol xs={4} className="h-[64px]">
                    <a href="/"><Avatar shape="square" size={64} src="/okvip.png" /></a>
                </CCol>
                <CCol xs={15} className="h-full">
                    <CMenu
                        className="h-full"
                        mode={"horizontal"}
                        items={items.map((item) => 
                            customItemMenu(
                                <Link className="text-[16px] font-[500] px-3" href={item.key}>{item.label}</Link>,
                                item.key
                            )
                        )}
                        selectedKeys={[choose]}
                    />
                </CCol>
                <CCol xs={5} className="h-full">
                    <CRow>
                        <CCol xs={12}>
                            <CButton type="primary" className="rounded-lg" link="dat-lich" icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                                <span className="font-bold">ĐẶT LỊCH</span>
                            </CButton>
                        </CCol>
                        <CCol xs={12}>
                            <a href="tel:0338230318">
                                <CButton type="primary" danger className="rounded-lg" link="dat-lich" icon={<FontAwesomeIcon icon={faPhone} />}>
                                    <span className="font-bold">033 8230 318</span>
                                </CButton>
                            </a>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
        </Header>
    );
}