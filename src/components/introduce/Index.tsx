"use client";
import CBreadcrumb from "@/custom_antd/CBreadscrumb";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CTitle from "@/custom_antd/CTitle";
import Link from "next/link";
import { Typography, Image } from 'antd';
import { useTranslations } from "next-intl";
const { Paragraph } = Typography;

export default function IntroduceComponent() {
    const t = useTranslations("IntroducePage");
    const items = [
        {
            title: <Link href="/trang-chu">{t('home')}</Link>
        },
        {
            title: <Link className="!text-blue-700 font-bold" href="#">{t('introduce')}</Link>
        }
    ];

    return (
        <div className="mx-32 mt-28">
            <CBreadcrumb items={items} />
            <br />
            <div className="bg-[#fff]">
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>{t('title1')}</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>{t('content1')}</CTitle>
                        </Typography>
                        <Paragraph>{t('des1')}</Paragraph>
                    </CCol>
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-1.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                </CRow>
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/04/Trang-gio%CC%9B%CC%81i-thie%CC%A3%CC%82u-banner-2.jpg.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>{t('title2')}</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>{t('content2')}</CTitle>
                        </Typography>
                        <Paragraph>{t('des2')}</Paragraph>
                    </CCol>
                </CRow>
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>{t('title3')}</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>{t('content3')}</CTitle>
                        </Typography>
                        <Paragraph>{t('des3')}</Paragraph>
                    </CCol>
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-5.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                </CRow>
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-6-1.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>{t('title4')}</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>{t('content4')}</CTitle>
                        </Typography>
                        <Paragraph>{t('des4')}</Paragraph>
                    </CCol>
                </CRow>
            </div>
        </div>
    );
}