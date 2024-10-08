
import CSkeleton from "@/custom_antd/CSkeleton";
import CTitle from "@/custom_antd/CTitle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation } from 'swiper/modules';
import CCard from "@/custom_antd/CCard";
import CDescriptionItem from "@/custom_antd/CDescriptionItem";
import { customNumberPrice } from "@/utils/FunctionUiHelpers";
import CRow from "@/custom_antd/CRow";
import CButton from "@/custom_antd/CButton";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { useRouter } from 'next-nprogress-bar';
import { getServiceState } from "@/redux/reducers/serviceReducer";
import { serviceSpecialThunk } from "@/redux/thunks/serviceThunk";
import { useTranslations } from "next-intl";
import { IService } from "@/interfaces/IService";

export default function SwiperServiceHome() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const t = useTranslations("Common");
    const service = useAppSelector(getServiceState);

    useEffect(() => {
        if (service.statusSpecial === 'completed' || service.statusSpecial === 'rejected') {
            dispatch(serviceSpecialThunk());
        }
    }, [dispatch, service.statusSpecial]);

    return (
        <CSkeleton loading={service.loadingSpecial}>
            <Swiper
                className="p-5"
                modules={[Virtual, Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
            >
                {service?.dataSpecial?.map((s: IService, index: number) => (
                    <SwiperSlide key={index}>
                        <CCard image={s.image} styleImage={{ height: 200 }} onClick={() => router.push("/dich-vu/" + s.id)}>
                            <div className="h-32">
                                <CTitle level={4}>{s.name}</CTitle>
                                <CRow justify={"space-between"} align="bottom">
                                    <CDescriptionItem title={t('price')} content={customNumberPrice(s.min_price) + "/" + s.unit} />
                                    <p className="text-[10px]">{t('sold')}: {s.quantity_sold}</p>
                                </CRow>
                                <CRow justify={"space-between"} className="mt-5">
                                    <CButton type="default" size="middle" shape="round" link={"/dich-vu/" + s.id}>{t('btn_detail')}</CButton>
                                    <CButton type="primary" size="middle" shape="round"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            dispatch(addService(s))
                                            router.push("/dat-lich")
                                        }}>{t('btn_choose')}
                                    </CButton>
                                </CRow>
                            </div>
                        </CCard>
                    </SwiperSlide>
                )) || []}
            </Swiper>
        </CSkeleton>
    );
}