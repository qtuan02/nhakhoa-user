import { GetProp, MenuProps } from "antd";
import { Key, ReactNode } from "react";
import { TinyColor } from '@ctrl/tinycolor';
type MenuItem = GetProp<MenuProps, 'items'>[number];

export const customItemMenu = (label?: ReactNode, key?: Key, type?: 'group'): MenuItem => {
    return { label, key, type } as MenuItem;
}; 

export const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(10).toString());

export const customNumberPrice = (value: number | undefined) => {
	return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(value));
}

export const parseHTML = (html: string | undefined) => {
    return { __html: html || '' };
}

export const formatDate = (date: string | undefined) => {
    if (!date) return '';
    const parsedDate = new Date(date);
    const formatter = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return formatter.format(parsedDate);
}