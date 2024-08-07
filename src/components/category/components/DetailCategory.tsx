import CButton from "@/custom_antd/CButton";
import CCard from "@/custom_antd/CCard";
import CCol from "@/custom_antd/CCol";
import CDescriptionItem from "@/custom_antd/CDescriptionItem";
import CRow from "@/custom_antd/CRow";
import CTitle from "@/custom_antd/CTitle";
import { ICategory } from "@/interfaces/ICategory";
import { useAppDispatch } from "@/redux/hooks";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { customNumberPrice } from "@/utils/FunctionUiHelpers";
import { useTranslations } from "next-intl";
import { useRouter } from "next-nprogress-bar";

interface DetailCategoryProps {
    data?: ICategory;
}

export default function DetailCategory({ data }: DetailCategoryProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const t = useTranslations("Common");

    return (
        <>
            <CTitle className="!text-[#313b79] !pb-2" level={2}>{data?.name}</CTitle>
            <p className="!text-justify ts-16">{data?.description}</p>
            <br /><br />
            <CTitle className="!text-[#313b79] !pb-2" level={2}>{t('service')}</CTitle>
            <CRow gutter={[16, 16]}>
                {data?.services?.map((s, index) =>
                    <CCol span={6} key={index}>
                        <CCard image={s.image} styleImage={{ height: 200 }} onClick={() => router.push("/dich-vu/"+s.id)}>
                            <div className="h-32">
                                <CTitle level={4}>{s.name}</CTitle>
                                <CRow justify={"space-between"} align="bottom">
                                    <CDescriptionItem title="Giá" content={customNumberPrice(s.min_price) + "/" + s.unit} />
                                    <p className="text-[10px]">{t('sold')}: {s.quantity_sold}</p>
                                </CRow>
                                <CRow justify={"space-between"} className="mt-5">
                                    <CButton type="default" size="middle" shape="round" link={"/dich-vu/"+s.id}>{t('btn_detail')}</CButton>
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
                    </CCol>
                )}
            </CRow>
        </>
    );
}