import { Layout, LayoutProps } from "antd";
import React, { ReactNode } from "react";

interface CLayoutProps extends LayoutProps {
    children?: ReactNode;
}

const CLayout: React.FC<CLayoutProps> = (props) => {
    const { children, ...rest } = props;
    return <Layout {...rest}>{children}</Layout>;
};

export default CLayout;