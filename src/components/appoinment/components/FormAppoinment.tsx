"use client"
import { getDate, getTime } from "@/apis";
import CButton from "@/custom_antd/CButton";
import CCol from "@/custom_antd/CCol";
import CDatePicker from "@/custom_antd/CDatePicker";
import { CForm, CFormItem } from "@/custom_antd/CForm";
import { CInput, CTextArea } from "@/custom_antd/CInput";
import CRow from "@/custom_antd/CRow";
import CSelect from "@/custom_antd/CSelect";
import CTitle from "@/custom_antd/CTitle";
import { IAppoinment, IDate, ITime } from "@/interfaces/IAppoinment";
import { IDoctor } from "@/interfaces/IDoctor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteService, toggleModal } from "@/redux/reducers/appoinmentReducer";
import { setDate, setTime } from "@/redux/reducers/scheduleReducer";
import { Avatar, Form, List, Select } from "antd";
import ModalAppoiment from "./ModalAppoinment";

interface FormComponentProps {
    onSubmit: (values: IAppoinment) => void;
}

const initialAppoinment: IAppoinment = {
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

    const dispatch = useAppDispatch();
    const time = useAppSelector((state) => state.time);
    const doctor = useAppSelector((state) => state.doctor);
    const schedule = useAppSelector((state) => state.schedule);
    const appoinment = useAppSelector((state) => state.appoinment);

    const handleDisabledDate = (current: any) => {
        return current && (current.valueOf() < Date.now() || current.day() === 0);
    };

    const handleDoctorChange = (doctorId: string) => {
        form.setFieldsValue({ date: '', time: '' });
        if (doctorId) {
            dispatch(getDate(doctorId));
            dispatch(setTime());
        } else {
            dispatch(setDate());
        }
    };

    const handleDateChange = (date: string) => {
        form.setFieldsValue({ time: '' });
        if (date) {
            dispatch(getTime({ doctor_id: form.getFieldValue("doctor_id"), date: date }));
        } else {
            dispatch(setTime());
        }
    }

    return (
        <div className="w-[1000px] mx-auto p-12">
            <CTitle level={2} className="text-center">Đặt lịch hẹn</CTitle>
            <CForm layout="vertical" className="!p-6" initialValues={{ ...initialAppoinment, services: appoinment.services }} form={form} onFinish={onSubmit}>
                <CRow gutter={32}>
                    <CCol xs={12}>
                        <CFormItem label="Họ và tên" name="name" rules={[{ required: true, message: "Chưa nhập họ tên..." }]}>
                            <CInput placeholder="Nhập tên của bạn" className="h-10 p-2 ts-16" />
                        </CFormItem>
                    </CCol>
                    <CCol xs={12}>
                        <CFormItem label="Số điện thoại" name="phone" rules={[{ required: true, message: "Chưa nhập số điện thoại..." }]}>
                            <CInput placeholder="Nhập số điện thoại" className="h-10 p-2 ts-16" />
                        </CFormItem>
                    </CCol>
                </CRow>
                <CRow gutter={32}>
                    <CCol xs={12}>
                        <CFormItem label="Nha sĩ" name="doctor_id">
                            <CSelect loading={doctor.loading} className="!h-10 ts-16" onChange={handleDoctorChange}>
                                <Select.Option value="">--Không chọn nha sĩ</Select.Option>
                                {doctor.data?.map((d: IDoctor) => (
                                    <Select.Option key={d.id} value={d.id}>{d.name}</Select.Option>
                                ))}
                            </CSelect>
                        </CFormItem>
                    </CCol>
                    <CCol xs={12}>
                        {schedule.date.length === 0 ?
                            <CRow gutter={12}>
                                <CCol xs={12}>
                                    <CFormItem label="Ngày hẹn" name="date" rules={[{ required: true, message: "Chưa chọn ngày..." }]}>
                                        <CDatePicker disabledDate={handleDisabledDate} format='YYYY-MM-DD' className="h-10 w-full ts-16" placeholder="--Chọn ngày" />
                                    </CFormItem>
                                </CCol>
                                <CCol xs={12}>
                                    <CFormItem label="Giờ hẹn" name="time" rules={[{ required: true, message: "Chưa chọn thời gian..." }]}>
                                        <CSelect loading={time.loading} className="!h-10 ts-16">
                                            <Select.Option value="">--Chọn thời gian</Select.Option>
                                            {time.data?.map((t: ITime) => (
                                                <Select.Option key={t.time} value={t.time}>{t.time}</Select.Option>
                                            ))}
                                        </CSelect>
                                    </CFormItem>
                                </CCol>
                            </CRow> :
                            <CRow gutter={12}>
                                <CCol xs={12}>
                                    <CFormItem label="Ngày hẹn" name="date" rules={[{ required: true, message: "Chưa chọn ngày..." }]}>
                                        <CSelect loading={schedule.loadingDate} className="!h-10 ts-16" onChange={handleDateChange}>
                                            <Select.Option value="">--Chọn ngày</Select.Option>
                                            {schedule.date?.map((d: IDate) => (
                                                <Select.Option key={d.date} value={d.date}>{d.date}</Select.Option>
                                            ))}
                                        </CSelect>
                                    </CFormItem>
                                </CCol>
                                <CCol xs={12}>
                                    <CFormItem label="Giờ hẹn" name="time" rules={[{ required: true, message: "Chưa chọn thời gian..." }]}>
                                        <CSelect loading={schedule.loadingTime} className="!h-10 ts-16">
                                            <Select.Option value="">--Chọn thời gian</Select.Option>
                                            {schedule.time?.map((t: ITime) => (
                                                <Select.Option key={t.time} value={t.time}>{t.time}</Select.Option>
                                            ))}
                                        </CSelect>
                                    </CFormItem>
                                </CCol>
                            </CRow>
                        }
                    </CCol>
                </CRow>
                <CFormItem label="Dịch vụ đặt hẹn" name="services">
                    {appoinment.services.length === 0 ?
                        <div className="bg-[#e4e4e4] h-[150px] flex items-center justify-center text-center pb-2 rounded-md border-solid border-[1px] border-[#d9d9d9]">
                            <div>
                                <p className="block py-2">Chưa có dịch vụ nào được chọn. Chọn dịch vụ (nếu có)!</p>
                                <CButton type="primary" className="rounded-lg" onClick={() => dispatch(toggleModal())}>Chọn dịch vụ</CButton>
                            </div>
                        </div> :
                        <div>
                            <CButton type="primary" className="rounded-lg" onClick={() => dispatch(toggleModal())}>Chọn dịch vụ</CButton>
                            <List
                                itemLayout="horizontal"
                                dataSource={appoinment.services}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar shape="square" size="large" src={item?.image} />}
                                            title={<CRow justify="space-between">{item?.name}<CButton type="primary" danger size="small" onClick={() => dispatch(deleteService(item?.id || -1))}>Xóa</CButton></CRow> }
                                            description={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item?.min_price))+"/"+item?.unit}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    }
                    <ModalAppoiment />
                </CFormItem>
                <CFormItem label="Ghi chú" name="note">
                    <CTextArea
                        showCount
                        maxLength={500}
                        placeholder="Thông tin thêm"
                        className="ts-16"
                        style={{ height: 150, resize: 'none' }}
                    />
                </CFormItem>
                <br />
                <CFormItem className="text-center">
                    <CButton type="primary" className="!rounded-3xl !px-14 !py-6 ts-20 !font-[500]" htmlType="submit">Gửi thông tin</CButton>
                </CFormItem>
            </CForm>
        </div>
    );
}