import { Button, ButtonProps, Tooltip } from "antd";
import React, { ReactNode } from "react";
import { useRouter } from 'next-nprogress-bar';

interface CButtonProps extends ButtonProps {
    children?: ReactNode;
    tooltip?: string;
    link?: string;
    back?: boolean;
}

const CButton: React.FC<CButtonProps> = (props) => {
    const router = useRouter();
	const { children, tooltip, link, back, ...rest } = props;
    return (
        <Tooltip title={tooltip}>
            <Button
                {...rest}
                onClick={back ? () => router.back() : link ? () => router.push(link) : rest.onClick}
            >
                {children}
            </Button>
        </Tooltip>
    );
};

export default CButton;