"use client"
import Cookies from 'js-cookie'; 
import { Header } from "antd/es/layout/layout";
import { Avatar } from "antd";
import Link from "next/link";
import CRow from "@/custom_antd/CRow";
import CCol from "@/custom_antd/CCol";
import CMenu from "@/custom_antd/CMenu";
import { customItemMenu, getLanguage } from "@/utils/FunctionUiHelpers";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import CButton from "@/custom_antd/CButton";
import { useTranslations } from 'next-intl';

export default function AppHeader() {
    const t = useTranslations("HeaderMenu");
    const choose = usePathname();
    const language = getLanguage();

    const items = [
        customItemMenu(<Link className="text-[16px] font-[500] px-3" href="/trang-chu">{t('home')}</Link>, "/trang-chu"),
        customItemMenu(<Link className="text-[16px] font-[500] px-3" href="/gioi-thieu">{t('about')}</Link>, "/gioi-thieu"),
        customItemMenu(<Link className="text-[16px] font-[500] px-3" href="/dich-vu">{t('service')}</Link>, "/dich-vu"),
    ];

    const handleChangeLanguage = () => {
        const newLanguage = language === "en" ? "vi" : "en";
        Cookies.set('language', newLanguage, { expires: 365 });
        window.location.reload();
    }

    return (
        <Header className="!bg-[#fff] border-b border-[#f1f1f1] shadow-xl fixed top-0 left-0 w-full z-50">
            <CRow className="h-full ">
                <CCol xs={4} className="h-[64px]">
                    <a href="/"><Avatar shape="square" size={64} src="/logo.png" /></a>
                </CCol>
                <CCol xs={12} className="h-full">
                    <CMenu
                        className="h-full"
                        mode={"horizontal"}
                        items={items}
                        selectedKeys={[choose]}
                    />
                </CCol>
                <CCol xs={8} className="h-full">
                    <CRow>
                        <CCol xs={16}>
                            <CRow>
                                <CCol xs={12}>
                                    <CButton type="primary" className="rounded-lg" link="/dat-lich" icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                                        <span className="font-bold">{t('appointment')}</span>
                                    </CButton>
                                </CCol>
                                <CCol xs={12}>
                                    <a href="tel:0338230318">
                                        <CButton type="primary" danger className="rounded-lg" icon={<FontAwesomeIcon icon={faPhone} />}>
                                            <span className="font-bold">033 8230 318</span>
                                        </CButton>
                                    </a>
                                </CCol>
                            </CRow>
                        </CCol>
                        <CCol xs={8}>
                            <CRow justify="end">
                                <CCol>
                                    <CButton type="link" onClick={() => handleChangeLanguage()} icon={<Avatar shape="square" src={language === "en" ? "/icon_vie.png" : "/icon_eng.png"} />} iconPosition="end"><span className="!font-[700] !text-[#000]">{language === "en" ? "VIE" : "ENG"}</span></CButton>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
        </Header>
    );
}