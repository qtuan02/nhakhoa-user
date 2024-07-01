import { CarouselProps } from "antd";
import React, { ReactNode } from "react";

interface CCarouselProps extends CarouselProps {
    children?: ReactNode;
}

const Carousel: React.FC<CCarouselProps> = (props) => {
    const { children, ...rest } = props;
    return <Carousel {...rest}>{children}</Carousel>;
};

export default Carousel;