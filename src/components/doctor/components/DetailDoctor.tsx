import CButton from "@/custom_antd/CButton";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CTitle from "@/custom_antd/CTitle";
import { IDoctor } from "@/interfaces/IDoctor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDoctorId } from "@/redux/reducers/appoinmentReducer";
import { formatDate, parseHTML } from "@/utils/FunctionUiHelpers";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Flex, Image } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next-nprogress-bar";

interface DetailDoctorProps {
    data?: IDoctor;
}

export default function DetailDoctor({ data }: DetailDoctorProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const t = useTranslations("DetailDoctor");

    return (
        <>
            <CTitle className="!text-[#313b79]" level={2}>{data?.name}</CTitle>
            <br />
            <CRow>
                <CCol span={12} className="text-center">
                    <Image src={data?.avatar} alt="Hình đại diện..." preview={false} className="!h-[600px]" />
                </CCol>
                <CCol span={12}>
                    <Flex vertical justify="space-between">
                        <CCol>
                            <Divider><CTitle className="!text-[#313b79]" level={3}>{t('title')}</CTitle></Divider>
                            <div className="my-1"><span className="font-bold ts-16">{t('fullname')}: </span><span className="ml-2 font-normal ts-16">{data?.name}</span></div>
                            <div className="my-1"><span className="font-bold ts-16">{t('sex')}: </span><span className="ml-2 font-normal ts-16">{data?.gender === 0 ? "Nữ" : "Nam"}</span></div>
                            <div className="my-1"><span className="font-bold ts-16">{t('date')}: </span><span className="ml-2 font-normal ts-16">{formatDate(data?.birthday)}</span></div>
                            <div className="my-1"><span className="font-bold ts-16">Email: </span><span className="ml-2 font-normal ts-16">{data?.email}</span></div>
                            <div className="mt-1 mb-2"><span className="font-bold ts-16">{t('other')}: </span></div>
                            <div className="ts-16" dangerouslySetInnerHTML={parseHTML(data?.description)}></div>
                        </CCol>
                        <CCol className="mt-10">
                            <CButton type="primary" size="large" shape="round" onClick={() => {
                                dispatch(setDoctorId(data?.id || ''));
                                router.push('/dat-lich')
                            }} icon={<FontAwesomeIcon icon={faCalendarDays} />}>{t('btn')}</CButton>
                        </CCol>
                    </Flex>
                </CCol>
            </CRow>
        </>
    );
}