"use client";
import CategoryHome from "./components/CategoryHome";
import SwiperHome from "./components/SwiperHome";
import SwiperServiceHome from "./components/SwiperServiceHome";
import SwiperDoctor from "./components/SwiperDoctor";
import CTitle from "@/custom_antd/CTitle";
import { useTranslations } from 'next-intl';

export default function HomeComponent() {
    const t = useTranslations("HomePage");

    return (
        <>
            <SwiperHome />
            <div className="mx-32 mt-20">
                <CTitle className="!text-center">{t('category')}</CTitle>
                <CategoryHome />
                <br /><br />
                <CTitle className="!text-center">{t('service')}</CTitle>
                <SwiperServiceHome />
                <br /><br />
                <CTitle className="!text-center">{t('doctor')}</CTitle>
                <SwiperDoctor />
            </div>
        </>
    );
}