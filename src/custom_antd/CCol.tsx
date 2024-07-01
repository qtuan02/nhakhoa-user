import { Col, ColProps } from "antd";
import React, { ReactNode } from "react";

interface CColProps extends ColProps {
    children?: ReactNode;
}

const CCol: React.FC<CColProps> = (props) => {
    const { children, ...rest } = props;
    return <Col {...rest}>{children}</Col>;
};

export default CCol;