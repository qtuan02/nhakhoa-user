import { Button, ButtonProps } from "antd";
import React, { ReactNode } from "react";

interface CButtonProps extends ButtonProps {
    children?: ReactNode;
}

const CButton: React.FC<CButtonProps> = (props) => {
    const { children, ...rest } = props;
    return <Button {...rest}>{children}</Button>;
};

export default CButton;