import React, { ReactNode } from 'react';
import { Space, SpaceProps } from 'antd';

interface CSpaceProps extends SpaceProps {
	children?: ReactNode;
}

const CSpace: React.FC<CSpaceProps> = (props) => {
	const { children, ...rest } = props;
	return <Space {...rest}>{children}</Space>;
};

export default CSpace;