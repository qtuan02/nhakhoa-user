import { Select, SelectProps } from "antd";
import { SelectProps as SelectOptionProps } from "antd";
import { ReactNode } from "react";


interface CSelectProps extends SelectProps {
    children?: ReactNode;
}

const CSelect: React.FC<CSelectProps> = (props) => {
    const { children, ...rest } = props;
    return <Select {...rest}>{children}</Select>;
};


interface CSelectOptionProps extends SelectOptionProps {
	children?: ReactNode;
}

const CSelectOption: React.FC<CSelectOptionProps> = (props) => {
	const { children, ...rest } = props;
	return <Select.Option {...rest}>{children}</Select.Option>;
};

export { CSelect, CSelectOption };