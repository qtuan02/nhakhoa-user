"use client";
import React from 'react';
import { Result } from 'antd';
import CButton from '@/custom_antd/CButton';

export default function AppNotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Không tìm thấy trang!"
            extra={<CButton type="primary" back={true}>Trở về</CButton>}
        />
    );
}
