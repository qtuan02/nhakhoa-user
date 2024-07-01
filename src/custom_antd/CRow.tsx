import { Row, RowProps } from "antd";
import React, { ReactNode } from "react";

interface CRowProps extends RowProps {
    children?: ReactNode;
}

const CRow: React.FC<CRowProps> = (props) => {
    const { children, ...rest } = props;
    return <Row {...rest}>{children}</Row>;
};

export default CRow;