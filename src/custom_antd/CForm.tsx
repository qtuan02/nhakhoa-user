import { Form, FormItemProps, FormProps } from "antd";
import { ReactNode } from "react";

interface CFormProps extends FormProps {
    children?: ReactNode;
}

const CForm: React.FC<CFormProps> = (props) => {
    const { children, ...rest } = props;
    return <Form {...rest}>{children}</Form>;
};


interface CFormItemProps extends FormItemProps {
	children?: ReactNode;
}

const CFormItem: React.FC<CFormItemProps> = (props) => {
	const { children, ...rest } = props;
	return <Form.Item {...rest}>{children}</Form.Item>;
};

export { CForm, CFormItem };