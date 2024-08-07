import CButton from "@/custom_antd/CButton";
import CDescriptionItem from "@/custom_antd/CDescriptionItem";
import CSpace from "@/custom_antd/CSpace";
import CTitle from "@/custom_antd/CTitle";
import { IService } from "@/interfaces/IService";
import { useAppDispatch } from "@/redux/hooks";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { customNumberPrice } from "@/utils/FunctionUiHelpers";
import { Flex, Image, List } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next-nprogress-bar";

interface ListServiceProps {
    data?: IService[];
}

export default function ListSerivce({ data }: ListServiceProps) {
    const router = useRouter();    
    const dispatch = useAppDispatch();
    const t = useTranslations("Common");

    return (
        <List
            pagination={{ position: 'bottom', align: 'end', pageSize: 10, onChange: () => { window.scrollTo({ top: 0, behavior: 'smooth' })} }}
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item onClick={() => router.push("/dich-vu/"+item.id)} key={index} className="bg-[#fff] !px-4 mt-4 border-[0.2px] shadow-sm hover:shadow-lg cursor-pointer rounded-md">
                    <List.Item.Meta
                        className="gap-4"
                        avatar={<Image src={item.image} alt="Hình ảnh..." width="100px" height="60px" preview={false} />}
                        title={<CTitle level={4} className="!text-[#313b79]">{item.name}</CTitle>}
                        description={<Flex justify="space-between" align="end"><CDescriptionItem title={t('price')} content={customNumberPrice(item.min_price)+"/"+item.unit} />
                            <p className="mr-10 text-[10px]">{t('sold')}: {item.quantity_sold}</p>
                        </Flex>}
                    />
                    <CSpace>
                        <CButton type="default" shape="round" link={"/dich-vu/"+item.id}>{t('btn_view')}</CButton>
                        <CButton type="primary" shape="round"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(addService(item))
                            router.push("/dat-lich")
                        }}
                        >{t('btn_book')}</CButton>
                    </CSpace>
                </List.Item>
            )}
        />
    );
}