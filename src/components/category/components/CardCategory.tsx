import CButton from "@/custom_antd/CButton";
import CCard from "@/custom_antd/CCard";
import CCol from "@/custom_antd/CCol";
import CDescriptionItem from "@/custom_antd/CDescriptionItem";
import CRow from "@/custom_antd/CRow";
import CTitle from "@/custom_antd/CTitle";
import { ICategory } from "@/interfaces/ICategory";
import { useAppDispatch } from "@/redux/hooks";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { customNumberPrice } from "@/utils/FunctionHelpers";
import { useRouter } from "next-nprogress-bar";

interface CardCategoryProps {
    data?: ICategory;
}

export default function CardCategory({ data }: CardCategoryProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    return (
        <>
            <CTitle className="!text-[#313b79] !pb-2" level={2}>{data?.name}</CTitle>
            <p className="!text-justify ts-16">{data?.description}</p>
            <br /><br />
            <CTitle className="!text-[#313b79] !pb-2" level={2}>Dịch vụ</CTitle>
            <CRow gutter={[16, 16]}>
                {data?.services?.map((s, index) =>
                    <CCol span={6} key={index}>
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
                    </CCol>
                )}
            </CRow>
        </>
    );
}