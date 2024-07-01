import { Input, InputProps } from "antd";
import { TextAreaProps } from "antd/es/input";
import { ReactNode } from "react";

interface CInputProps extends InputProps {
    children?: ReactNode;
}

const CInput: React.FC<CInputProps> = (props) => {
    const { children, ...rest } = props;
    return <Input {...rest}>{children}</Input>;
};

interface CTextAreaProps extends TextAreaProps {
    children?: ReactNode;
}

const CTextArea: React.FC<CTextAreaProps> = (props) => {
    return <Input.TextArea {...props} />;
};

export { CInput, CTextArea };