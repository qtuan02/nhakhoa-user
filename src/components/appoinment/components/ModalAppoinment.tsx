import CButton from "@/custom_antd/CButton";
import CModal from "@/custom_antd/CModal";
import CSkeleton from "@/custom_antd/CSkeleton";
import { IService } from "@/interfaces/IService";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addService } from "@/redux/reducers/appoinmentReducer";
import { Flex, Image, TableColumnsType } from "antd";
import { useEffect, useState } from "react";
import CTable from "@/custom_antd/CTable";
import { customNumberPrice, removeVietnameseTones } from "@/utils/FunctionUiHelpers";
import CSearch from "@/custom_antd/CSearch";
import CTitle from "@/custom_antd/CTitle";
import { getServiceState } from "@/redux/reducers/serviceReducer";
import { servicesThunk } from "@/redux/thunks/serviceThunk";

interface IModalAppointmentProps {
    modal: boolean;
    toggle: () => void;
}

export default function ModalAppoiment({ modal, toggle }: IModalAppointmentProps) {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");
    const service = useAppSelector(getServiceState);

    useEffect(() => {
        if (service.status === "completed" || service.status === "rejected") {
            dispatch(servicesThunk());
        }
    }, [dispatch, service.status]);

    const onSearch = (value: string) => {
        setSearch(value);
    };

    const filterData = service?.data?.filter((item: IService) =>
        removeVietnameseTones(item?.name?.toLowerCase()).includes(removeVietnameseTones(search.toLowerCase()))
    );

    const columns: TableColumnsType<IService> = [
        {
            title: "#",
            dataIndex: "index",
            width: 50,
            key: "index",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            key: "image",
            width: 100,
            render: (image) => (
                <Image width={40} height={40} src={image} alt="img..." />
            )
        },
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
            width: 250,
        },
        {
            title: "Giá/Đơn vị",
            dataIndex: "min_price",
            key: "min_price",
            width: 150,
            sorter: (a: any, b: any) => a.min_price - b.min_price,
            render: (min_price, item) => <span>{customNumberPrice(min_price) + "/" + item.unit}</span>
        },
        {
            title: "Thao tác",
            key: "item",
            width: 100,
            render: (item) => <CButton type="primary" size="small" onClick={() => dispatch(addService(item))}>Chọn</CButton>
        }
    ] as TableColumnsType<IService>;

    return (
        <CModal open={modal} onCancel={() => toggle()} title={<Flex align="center" justify="space-between" className="w-[calc(100%-50px)]">
            <CTitle level={4}>Bảng dịch vụ</CTitle>
            <CSearch className="!w-[200px]" size="middle" placeholder="Tìm dịch vụ..." onSearch={onSearch} enterButton />
        </Flex>} footer={null} width={800}>
            <CSkeleton loading={service.loading}>
                <CTable
                    columns={columns}
                    dataSource={filterData?.map((item, index) => ({ ...item, index: index + 1, key: item.id }))}
                    pagination={{ defaultPageSize: 6, showSizeChanger: false }}
                />
            </CSkeleton>
        </CModal>
    );
}