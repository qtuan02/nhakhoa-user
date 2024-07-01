import { Modal, ModalProps } from "antd";
import React, { ReactNode } from "react";

interface CModalProps extends ModalProps {
    children?: ReactNode;
}

const CModal: React.FC<CModalProps> = (props) => {
    const { children, ...rest } = props;
    return <Modal {...rest}>{children}</Modal>;
};

export default CModal;