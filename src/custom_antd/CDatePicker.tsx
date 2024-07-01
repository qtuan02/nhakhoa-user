import { DatePicker, DatePickerProps } from "antd";
import { ReactNode } from "react";

interface CDatePickerProps extends DatePickerProps {
    children?: ReactNode;
}

const CDatePicker: React.FC<CDatePickerProps> = (props) => {
    const { children, ...rest } = props;
    return <DatePicker {...rest}>{children}</DatePicker>;
};

export default CDatePicker;