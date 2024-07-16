import CButton from "@/custom_antd/CButton";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CSkeleton from "@/custom_antd/CSkeleton";
import CTitle from "@/custom_antd/CTitle";
import { IDoctor } from "@/interfaces/IDoctor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDoctorId } from "@/redux/reducers/appoinmentReducer";
import { formatDate, parseHTML } from "@/utils/FunctionHelpers";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Flex, Image } from "antd";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";

interface DetailDoctorProps {
    data?: IDoctor | null;
}

export default function DetailDoctor({ data }: DetailDoctorProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const doctor = useAppSelector((state) => state.doctor);

    useEffect(() => {
        if (!doctor.doctor) {
            router.push('/doi-ngu-nha-si')
        }
    }, [doctor.doctor, router]);
    return (
        data ? <>
            <CTitle className="!text-[#313b79]" level={2}>{data?.name}</CTitle>
            <br />
            <CRow>
                <CCol span={12} className="text-center">
                    <Image src={data?.avatar} alt="Hình đại diện..." preview={false} className="!h-[600px]" />
                </CCol>
                <CCol span={12}>
                    <Flex vertical justify="space-between">
                        <CCol>
                            <Divider><CTitle className="!text-[#313b79]" level={3}>Thông tin bác sĩ</CTitle></Divider>
                            <div className="my-1"><span className="font-bold ts-16">Họ và tên: </span><span className="ml-2 font-normal ts-16">{data?.name}</span></div>
                            <div className="my-1"><span className="font-bold ts-16">Giới tính: </span><span className="ml-2 font-normal ts-16">{data?.gender === 0 ? "Nữ" : "Nam"}</span></div>
                            <div className="my-1"><span className="font-bold ts-16">Ngày sinh: </span><span className="ml-2 font-normal ts-16">{formatDate(data?.birthday)}</span></div>
                            <div className="my-1"><span className="font-bold ts-16">Email: </span><span className="ml-2 font-normal ts-16">{data?.email}</span></div>
                            <div className="mt-1 mb-2"><span className="font-bold ts-16">Thông tin khác: </span></div>
                            <div className="ts-16" dangerouslySetInnerHTML={parseHTML(data?.description)}></div>
                        </CCol>
                        <CCol className="mt-10">
                            <CButton type="primary" size="large" shape="round" onClick={() => {
                                dispatch(setDoctorId(data?.id || ''));
                                router.push('/dat-lich')
                            }} icon={<FontAwesomeIcon icon={faCalendarDays} />}>Đặt lịch ngay</CButton>
                        </CCol>
                    </Flex>
                </CCol>
            </CRow>
        </> :
        <CSkeleton loading={true} />
    );
}