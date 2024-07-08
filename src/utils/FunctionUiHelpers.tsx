import { Dispatch, SetStateAction } from "react";
import React from 'react';
import { FilterConfirmProps } from 'antd/es/table/interface';
import CButton from "@/custom_antd/CButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { CInput } from "@/custom_antd/CInput";
import CSpace from "@/custom_antd/CSpace";

export const TOAST_SUCCESS: any = (value: string) => {
    return toast.success(value);
}

export const TOAST_WARNING: any = (warning: string) => {
    return toast.warning(warning);
}

export const TOAST_ERROR: any = (error: string) => {
    return toast.error(error || "Đã có lỗi xảy ra");
}

const handleSearch = (selectedKeys: string[], confirm: (param?: FilterConfirmProps) => void) => {
    confirm();
};

const handleReset = (clearFilters: () => void, confirm: (param?: FilterConfirmProps) => void) => {
    clearFilters();
    confirm();
};

export const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
    }: {
        setSelectedKeys: Dispatch<SetStateAction<string[]>>;
        selectedKeys: string[];
        confirm: (param?: FilterConfirmProps) => void;
        clearFilters: () => void;
    }) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <CInput
                placeholder={"Nhập nội dung..."}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => handleSearch(selectedKeys, confirm)}
                style={{ marginBottom: 8, display: 'block' }}
            />
            <CSpace>
                <CButton
                    type='primary'
                    onClick={() => handleSearch(selectedKeys, confirm)}
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    size='small'
                    style={{ width: 90 }}
                >
                    Tìm
                </CButton>
                <CButton
                    type='primary'
                    onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                    icon={<FontAwesomeIcon icon={faRotateRight} />}
                    size='small'
                    danger
                    style={{ width: 90 }}
                >
                    Tải lại
                </CButton>
            </CSpace>
        </div>
    ),
    filterIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
    onFilter: (value: string, record: Record<string, any>) => 
        (record[dataIndex] || '').toString().toLowerCase().includes(value.toLowerCase()),
    render: (text: string) => text,
});