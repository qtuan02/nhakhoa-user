import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Image } from 'antd';
import CTitle from '@/custom_antd/CTitle';
import { parseHTML } from '@/utils/FunctionUiHelpers';
import CRow from '@/custom_antd/CRow';
import CButton from '@/custom_antd/CButton';
import CCol from '@/custom_antd/CCol';
import { useRouter } from 'next-nprogress-bar';
import { setDoctorId } from '@/redux/reducers/appoinmentReducer';
import { useEffect } from 'react';
import CSkeleton from '@/custom_antd/CSkeleton';
import { getDoctorState } from '@/redux/reducers/doctorReducer';
import { doctorsThunk } from '@/redux/thunks/doctorThunk';
import { useTranslations } from 'next-intl';

export default function SwiperDoctor() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const t = useTranslations("Common");
    const doctor = useAppSelector(getDoctorState);

    useEffect(() => {
        if (doctor.status === 'completed' || doctor.status === 'rejected') {
            dispatch(doctorsThunk());
        }
    }, [dispatch, doctor.status]);

    return (
        <CSkeleton loading={doctor.loading}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className='w-full h-[450px]'
            >
                {doctor?.data?.map((d, index) =>
                    <SwiperSlide key={index} className='w-[600px] h-[400px] shadow-lg rounded-lg border border-solid border-gray-200'>
                        <div className='relative w-full h-full flex flex-col justify-between'>
                            <div className='px-5 pt-5 w-[400px] flex-grow'>
                                <CTitle level={5}>{t('doctor')}</CTitle>
                                <CTitle level={3} className='!text-[#313b79] !mt-0'>{d.name}</CTitle>
                                <div className='ts-12' dangerouslySetInnerHTML={parseHTML(d.description)} />
                            </div>
                            <div className='p-10 w-[400px]'>
                                <CRow gutter={[16, 16]}>
                                    <CCol>
                                        <CButton type="default" size="middle" shape="round" onClick={() => {
                                            router.push('/nha-si/' + d.id)
                                        }}>{t('btn_view')}</CButton>
                                    </CCol>
                                    <CCol>
                                        <CButton type="primary" size="middle" shape="round" onClick={() => {
                                            dispatch(setDoctorId(d.id || ''));
                                            router.push('/dat-lich')
                                        }}>{t('btn_book')}</CButton>
                                    </CCol>
                                </CRow>
                            </div>
                            <div className='absolute bottom-0 right-0 w-[250px] h-[250px] text-center'>
                                <Image src={d.avatar} alt='Hình đại diện...' preview={false} height="250px" />
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </CSkeleton>
    );
}
