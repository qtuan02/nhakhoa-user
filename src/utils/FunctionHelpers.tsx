import { GetProp, MenuProps } from "antd";
import { Key, ReactNode } from "react";
import { TinyColor } from '@ctrl/tinycolor';
type MenuItem = GetProp<MenuProps, 'items'>[number];

export const customItemMenu = (label?: ReactNode, key?: Key, type?: 'group'): MenuItem => {
    return { label, key, type } as MenuItem;
}; 

export const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(10).toString());