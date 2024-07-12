import { Card, CardProps, Col, ColProps, Image } from "antd";
import React, { ReactNode } from "react";

interface CCardProps extends CardProps {
    image?: string;
    children?: ReactNode;
}

const CCard: React.FC<CCardProps> = (props) => {
    const { image, children, ...rest } = props;
    return <Card style={{ border: "solid 1px black" }} hoverable cover={<Image src={image} alt="Ảnh danh mục..." preview={false} />} {...rest}>
        {children}
     </Card>;
};

export default CCard;