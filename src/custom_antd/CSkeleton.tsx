import React, { ReactNode } from 'react';
import { Skeleton, SkeletonProps } from 'antd';

interface CSkeletonProps extends SkeletonProps {
	children?: ReactNode;
}

const CSkeleton: React.FC<CSkeletonProps> = (props) => {
	const { children, ...rest } = props;
	return <Skeleton {...rest} paragraph={{ rows: 8 }}>{children}</Skeleton>;
};

export default CSkeleton;