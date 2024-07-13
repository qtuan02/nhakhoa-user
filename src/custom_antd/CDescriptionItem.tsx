import React, { ReactNode } from "react";

interface DescriptionItemProps {
    title?: string;
    content?: ReactNode;
}

const CDescriptionItem: React.FC<DescriptionItemProps> = (props) => {
    const { title, content } = props;
    return (
        <div className="site-description-item-profile-wrapper">
            <p className="site-description-item-profile-p-label">{title}:</p>
            {content}
        </div>
    );
};

export default CDescriptionItem;