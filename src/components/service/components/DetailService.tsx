import CButton from "@/custom_antd/CButton";
import CCol from "@/custom_antd/CCol";
import { CForm } from "@/custom_antd/CForm";
import { CInput } from "@/custom_antd/CInput";
import CRow from "@/custom_antd/CRow";
import CSpace from "@/custom_antd/CSpace";
import CTitle from "@/custom_antd/CTitle";
import { IService } from "@/interfaces/IService";
import { useAppDispatch } from "@/redux/hooks";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { customNumberPrice, parseHTML } from "@/utils/FunctionHelpers";
import { faCalendarDays, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Image, Space } from "antd";
import { useRouter } from "next-nprogress-bar";


interface DetailServiceProps {
    data?: IService;
}

export default function DetailService({ data }: DetailServiceProps) {
    const router = useRouter();
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    return (
        data ?
            <>
                <CTitle className="!text-[#313b79] !mt-0 !mb-5" level={2}>{data?.name}</CTitle>
                <CRow gutter={[32, 16]}>
                    <CCol span={16}>
                        <Image className="rounded-lg" src={data?.image} alt="Hình ảnh..." height={450} width="100%" preview={false} />
                    </CCol>
                    <CCol span={8}>
                        <CSpace className="w-full">
                            <p className="ts-18 font-[500]">Giá:</p>
                            <p className="ts-16">{customNumberPrice(data?.min_price) + " - " + customNumberPrice(data?.max_price) + " / "}<span className="opacity-70">{"(" + data?.unit + ")"}</span></p>
                        </CSpace>
                        <br />
                        <CSpace className="w-full">
                            <p className="ts-18 font-[500]">Danh mục: </p>
                            <span className="ts-16">{data?.category?.name}</span>
                        </CSpace>
                        <Space className="w-full mt-4">
                            <CButton type="primary" size="large" shape="round" onClick={() => {
                                dispatch(addService(data))
                                router.push("/dat-lich")
                            }} icon={<FontAwesomeIcon icon={faCalendarDays} />}>Đặt lịch ngay</CButton>
                        </Space>
                        <CForm form={form} layout="vertical" className="border-solid border-[1px] py-5 px-10 mt-10 rounded-2xl bg-[#f5f5f5] shadow-sm">
                            <CTitle level={3}>Để lại số điện thoại để được tư vấn miễn phí</CTitle>
                            <Form.Item name="name" label="Họ và tên:" rules={[{ required: true }]}>
                                <CInput className="h-[45px] rounded-2xl" placeholder="Nhập tên của bạn" />
                            </Form.Item>
                            <Form.Item name="phone" label="Số điện thoại:" rules={[{ required: true }]}>
                                <CInput className="h-[45px] rounded-2xl" placeholder="Nhập số điện thoại" />
                            </Form.Item>
                            <CRow justify={"center"}>
                                <CButton danger type="primary" htmlType="submit" size="large" shape="round" icon={<FontAwesomeIcon icon={faPhone} />}>Gọi cho tôi</CButton>
                            </CRow>
                        </CForm>
                    </CCol>
                </CRow>
                <p className="!text-justify text" dangerouslySetInnerHTML={parseHTML(data?.description)}></p>
            </>
            : <CTitle>Không tìm thấy dịch vụ!</CTitle>
    );
}