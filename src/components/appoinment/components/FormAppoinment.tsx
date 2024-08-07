"use client"
import CButton from "@/custom_antd/CButton";
import CCol from "@/custom_antd/CCol";
import CDatePicker from "@/custom_antd/CDatePicker";
import { CForm, CFormItem } from "@/custom_antd/CForm";
import { CInput, CTextArea } from "@/custom_antd/CInput";
import CRow from "@/custom_antd/CRow";
import CSelect from "@/custom_antd/CSelect";
import CTitle from "@/custom_antd/CTitle";
import { IDoctor } from "@/interfaces/IDoctor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteService, getAppointmentState, setDoctorId } from "@/redux/reducers/appoinmentReducer";
import { Avatar, Form, List, Select } from "antd";
import ModalAppoiment from "./ModalAppoinment";
import { useEffect, useState } from "react";
import { IAppointment, IDate, ITime } from "@/interfaces/IAppointment";
import { getTimeState } from "@/redux/reducers/timeReducer";
import { getDoctorState } from "@/redux/reducers/doctorReducer";
import { scheduleApi } from "@/api/scheduleApi";
import { formatDate } from "@/utils/FunctionUiHelpers";
import { useTranslations } from "next-intl";

interface FormComponentProps {
    onSubmit: (values: IAppointment) => void;
}

const initialAppoinment: IAppointment = {
    name: '',
    phone: '',
    email: '',
    doctor_id: '',
    date: '',
    time: '',
    services: [],
    note: '',
}
export default function FormAppoiment({ onSubmit }: FormComponentProps) {
    const [form] = Form.useForm();
    const t = useTranslations("AppointmentPage");

    const dispatch = useAppDispatch();
    const time = useAppSelector(getTimeState);
    const doctor = useAppSelector(getDoctorState);
    const appoinment = useAppSelector(getAppointmentState);

    const [ modal, setModal ] = useState<boolean>(false);

    const [ dataDate, setDataDate ] = useState<IDate[]>([]);
    const [ loadingDate, setLoadingDate ] = useState<boolean>(false);

    const [ dataTime, setDataTime ] = useState<ITime[]>([]);
    const [ loadingTime, setLoadingTime ] = useState<boolean>(false);

    const handleToggleModal = () => {
        setModal(!modal);
    }

    const handleDisabledDate = (current: any) => {
        return current && (current.valueOf() < Date.now() || current.day() === 0);
    };

    const getDataDateByDoctorId = async (doctor_id: string) => {
        setLoadingDate(true);
        const res = await scheduleApi.getDate(doctor_id);
        setLoadingDate(false); 
        setDataDate(res);
    }

    const getDataTimeByDoctorIdAndDate = async (doctor_id: string, date: string) => {
        setLoadingTime(true);
        const res = await scheduleApi.getTime(doctor_id, date);
        setLoadingTime(false);
        setDataTime(res);
    }

    const handleDoctorChange = async (doctorId: string) => {
        form.setFieldsValue({ date: '', time: '' });
        if(doctorId){
            dispatch(setDoctorId(doctorId));
            getDataDateByDoctorId(doctorId);
        }else{
            setDataDate([]);
        }
    };

    const handleDateChange = (date: string) => {
        form.setFieldsValue({ time: '' });
        getDataTimeByDoctorIdAndDate(form.getFieldValue("doctor_id"), date);
    }

    useEffect(() => {
        if(appoinment.doctor_id){
            form.setFieldValue('doctor_id', appoinment.doctor_id);
            getDataDateByDoctorId(appoinment.doctor_id);
        }
    }, [appoinment.doctor_id, form])

    return (
        <div className="w-[1000px] mx-auto p-12">
            <CTitle level={2} className="text-center">{t('appointment')}</CTitle>
            <CForm layout="vertical" className="!p-6" initialValues={{ ...initialAppoinment, services: appoinment.services }} form={form} onFinish={onSubmit}>
                <CRow gutter={32}>
                    <CCol xs={12}>
                        <CFormItem label={t('name')} name="name" rules={[{ required: true, message: t('vname') as string }]}>
                            <CInput placeholder={t('cname')} className="h-10 p-2 ts-16" />
                        </CFormItem>
                    </CCol>
                    <CCol xs={12}>
                        <CFormItem label={t('phone')} name="phone" rules={[{ required: true, message: t('vphone') as string }]}>
                            <CInput placeholder={t('cphone')} className="h-10 p-2 ts-16" />
                        </CFormItem>
                    </CCol>
                </CRow>
                <CRow gutter={32}>
                    <CCol xs={12}>
                        <CFormItem label={t('doctor')} name="doctor_id">
                            <CSelect loading={doctor.loading} className="!h-10 ts-16" onChange={handleDoctorChange}>
                                <Select.Option value="">{t('cdoctor')}</Select.Option>
                                {doctor.data?.map((d: IDoctor) => (
                                    <Select.Option key={d.id} value={d.id}>{d.name}</Select.Option>
                                ))}
                            </CSelect>
                        </CFormItem>
                    </CCol>
                    <CCol xs={12}>
                        {dataDate && dataDate.length === 0 ?
                            <CRow gutter={12}>
                                <CCol xs={12}>
                                    <CFormItem label={t('date')} name="date" rules={[{ required: true, message: t('vdate') as string }]}>
                                        <CDatePicker disabledDate={handleDisabledDate} format='DD/MM/YYYY' className="h-10 w-full ts-16" placeholder={t('cdate')} />
                                    </CFormItem>
                                </CCol>
                                <CCol xs={12}>
                                    <CFormItem label={t('time')} name="time" rules={[{ required: true, message: t('vtime') as string }]}>
                                        <CSelect loading={time.loading} className="!h-10 ts-16">
                                            <Select.Option value="">{t('ctime')}</Select.Option>
                                            {time.data?.map((t: ITime) => (
                                                <Select.Option key={t.time} value={t.time}>{t.time}</Select.Option>
                                            ))}
                                        </CSelect>
                                    </CFormItem>
                                </CCol>
                            </CRow> :
                            <CRow gutter={12}>
                                <CCol xs={12}>
                                    <CFormItem label={t('date')} name="date" rules={[{ required: true, message: t('vdate') as string }]}>
                                        <CSelect loading={loadingDate} className="!h-10 ts-16" onChange={handleDateChange}>
                                            <Select.Option value="">{t('cdate')}</Select.Option>
                                            {dataDate?.map((d: IDate) => (
                                                <Select.Option key={d.date} value={d.date}>{formatDate(d.date)}</Select.Option>
                                            )) || []}
                                        </CSelect>
                                    </CFormItem>
                                </CCol>
                                <CCol xs={12}>
                                    <CFormItem label={t('time')} name="time" rules={[{ required: true, message: t('vtime') as string }]}>
                                        <CSelect loading={loadingTime} className="!h-10 ts-16">
                                            <Select.Option value="">{t('ctime')}</Select.Option>
                                            {dataTime?.map((t: ITime) => (
                                                <Select.Option key={t.time} value={t.time}>{t.time}</Select.Option>
                                            )) || []}
                                        </CSelect>
                                    </CFormItem>
                                </CCol>
                            </CRow>
                        }
                    </CCol>
                </CRow>
                <CFormItem label={t('service')} name="services">
                    {appoinment?.services?.length === 0 ?
                        <div className="bg-[#e4e4e4] h-[150px] flex items-center justify-center text-center pb-2 rounded-md border-solid border-[1px] border-[#d9d9d9]">
                            <div>
                                <p className="block py-2">{t('vservice')}</p>
                                <CButton type="primary" className="rounded-lg" onClick={() => handleToggleModal()}>{t('service')}</CButton>
                            </div>
                        </div> :
                        <div>
                            <CButton type="primary" className="rounded-lg" onClick={() => handleToggleModal()}>{t('cservice')}</CButton>
                            <List
                                itemLayout="horizontal"
                                dataSource={appoinment.services}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar shape="square" size="large" src={item?.image} />}
                                            title={<CRow justify="space-between">{item?.name}<CButton type="primary" danger size="small" onClick={() => dispatch(deleteService(item?.id || -1))}>{t('del')}</CButton></CRow> }
                                            description={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item?.min_price))+"/"+item?.unit}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    }
                    <ModalAppoiment modal={modal} toggle={handleToggleModal} />
                </CFormItem>
                <CFormItem label={t('note')} name="note">
                    <CTextArea
                        showCount
                        maxLength={500}
                        placeholder={t('cnote')}
                        className="ts-16"
                        style={{ height: 150, resize: 'none' }}
                    />
                </CFormItem>
                <br />
                <CFormItem className="text-center">
                    <CButton type="primary" className="!rounded-3xl !px-14 !py-6 ts-20 !font-[500]" htmlType="submit">{t('submit')}</CButton>
                </CFormItem>
            </CForm>
        </div>
    );
}