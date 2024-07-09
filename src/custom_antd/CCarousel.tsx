import { Carousel, CarouselProps } from "antd";
import styled from "styled-components";
import React, { ReactNode } from "react";

interface CCarouselProps extends CarouselProps {
    children?: ReactNode;
}

const StyledCarousel = styled(Carousel)`
    .slick-dots li {
        background-color: #cccccc; /* Màu của các nút chờ */
    }
    .slick-dots li.slick-active {
        background-color: #007bff; /* Màu của nút chuyển trang đang được chọn */
    }
`;
const CCarousel: React.FC<CCarouselProps> = (props) => {
    const { children, ...rest } = props;

    return (
        <StyledCarousel {...rest}>
            {children}
        </StyledCarousel>
    );
};

export default CCarousel;
