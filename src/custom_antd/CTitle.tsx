import { TitleProps } from "antd/es/typography/Title";
import { ReactNode } from "react";
import { Typography } from 'antd';
const { Title } = Typography;

interface CTitleProps extends TitleProps {
    children?: ReactNode;
}

const CTitle: React.FC<CTitleProps> = (props) => {
    const { children, ...rest } = props;
    return <Title {...rest}>{children}</Title>;
};

export default CTitle;