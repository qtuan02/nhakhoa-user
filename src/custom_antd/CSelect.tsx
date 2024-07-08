import { Select, SelectProps } from "antd";
import { ReactNode } from "react";

interface CSelectProps extends SelectProps {
    children?: ReactNode;
}

const CSelect: React.FC<CSelectProps> = (props) => {
    const { children, ...rest } = props;
    return <Select {...rest}>{children}</Select>;
};

export default CSelect;