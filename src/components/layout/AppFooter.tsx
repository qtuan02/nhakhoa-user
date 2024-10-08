"use client";
import Link from "next/link";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import { useTranslations } from "next-intl";
import { Footer } from "antd/es/layout/layout";

export default function AppFooter() {
    const t = useTranslations("FooterMenu");
    const items = [
        {
            col: 3,
            offset: 1,
            label: <p>{t('name')}</p>,
            children: [
                {
                    label: <Link href="/gioi-thieu" className="text-[#000]">{t('about')}</Link>
                },
                {
                    label: <Link href="/dich-vu" className="text-[#000]">{t('service')}</Link>
                },
                {
                    label: <Link href="#" className="text-[#000]">{t('doctor')}</Link>
                }
            ],
        },
        {
            col: 6,
            offset: 0,
            label: <p>{t('support')}</p>,
            children: [
                {
                    label: <span>Email: <a href="mailto:contact@nhakhoaokvip.com" className="text-[#000]">contact@nhakhoaokvip.com</a></span>
                },
                {
                    label: <span>{t('phone')}: <a href="tel:0338230318" className="text-[#000]">033 8230 318</a> - <a href="tel:0393653862" className="text-[#000]">039 3653 862</a></span>
                },
                {
                    label: <span>{t('address')}: <a href="https://www.google.com/maps/place/180+%C4%90.+Cao+L%E1%BB%97,+Ph%C6%B0%E1%BB%9Dng+4,+Qu%E1%BA%ADn+8,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7380234,106.6752848,17z/data=!3m1!4b1!4m6!3m5!1s0x31752fad0158a09f:0xfd0a6159277a3508!8m2!3d10.7380234!4d106.6778651!16s%2Fg%2F11csg1y8zp?entry=ttu" target="_blank" className="text-[#000]">{t('address_detail')}</a></span>
                }
            ]
        },
        {
            col: 3,
            offset: 0,
            label: <p>{t('worktime')}</p>,
            children: [
                {
                    label: <span className="font-bold border-b-[1px] pb-2">{t('datebegin')} - {t('dateend')}:</span> 
                },
                {
                    label: "08:00 - 12:00"
                },
                {
                    label: "14:00 - 20:00"
                }
            ]
        },
        {
            col: 8,
            offset: 1,
            label: (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5268954749696!2d106.6752848!3d10.7380234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fad0158a09f%3A0xfd0a6159277a3508!2s180%20Cao%20L%E1%BB%97%2C%20Ph%C6%B0%E1%BB%9Dng%204%2C%20Qu%E1%BA%ADn%208%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2sus!4v1687354079731!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            )
        }
    ];
    return (
        <Footer className="w-full !bg-[#fff] h-[500px] !pt-10 mt-10">
            <CRow className="h-full justify-between">
                {items.map((item, index) => (
                    <CCol key={index} xs={item.col} offset={item.offset}>
                        <span className="font-bold text-[18px] block">{item.label}</span>
                        {item.children?.map((i, index) => (
                            <span key={index} className="block mt-4">{i.label}</span>
                        ))}
                    </CCol>
                ))}
            </CRow>
        </Footer>
    )
}