
import { getHotServices } from "@/apis";
import CSkeleton from "@/custom_antd/CSkeleton";
import CTitle from "@/custom_antd/CTitle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation } from 'swiper/modules';
import CCard from "@/custom_antd/CCard";
import CDescriptionItem from "@/custom_antd/CDescriptionItem";
import { customNumberPrice } from "@/utils/FunctionHelpers";
import CRow from "@/custom_antd/CRow";
import CButton from "@/custom_antd/CButton";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { useRouter } from 'next-nprogress-bar';

export default function HotServiceHome() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const service = useAppSelector((state) => state.service);
    useEffect(() => {
        if (service.statusHot === 'completed' || service.statusHot === 'rejected') {
            dispatch(getHotServices());
        }
    }, [service.statusHot, dispatch]);

    return (
        <>
            <CTitle className="!text-center">Dịch vụ được yêu thích</CTitle>
            <CSkeleton loading={service.loadingHot}>
                <Swiper
                    className="p-5"
                    modules={[Virtual, Navigation]}
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                >
                    {service.dataHot.map((s, index) => (
                        <SwiperSlide key={index} className="none">
                            <CCard image={s.image} styleImage={{ height: 200 }}>
                                <div className="h-28">
                                    <CTitle level={4}>{s.name}</CTitle>
                                    <CRow justify={"space-between"} align="bottom">
                                        <CDescriptionItem title="Giá" content={customNumberPrice(s.min_price) + "/" + s.unit} />
                                        <p className="text-[10px]">Đã bán: {s.quantity_sold}</p>
                                    </CRow>
                                    <CRow justify={"space-between"} className="mt-5">
                                        <CButton type="default" size="middle" shape="round">Chi tiết</CButton>
                                        <CButton type="primary" size="middle" shape="round"
                                            onClick={() => {
                                                dispatch(addService(s))
                                                router.push("/dat-lich")
                                            }}>Chọn dịch vụ
                                        </CButton>
                                    </CRow>
                                </div>
                            </CCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CSkeleton>
        </>
    );
}