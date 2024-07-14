import { Card, CardProps, Image } from "antd";
import React, { CSSProperties, ReactNode } from "react";
import { useRouter } from 'next-nprogress-bar';

interface CCardProps extends CardProps {
    image?: string;
    styleCard?: CSSProperties;
    styleImage?: CSSProperties;
    children?: ReactNode;
    link?: string;
}

const CCard: React.FC<CCardProps> = (props) => {
    const router = useRouter();
    const { styleCard, image, styleImage, children, link, ...rest } = props;
    return <Card style={styleCard} hoverable
        onClick={link ? () => router.push(link) : rest.onClick}
        cover={<Image style={styleImage} src={image} alt="Ảnh danh mục..." preview={false} />} {...rest}>
        {children}</Card>;
};

export default CCard;