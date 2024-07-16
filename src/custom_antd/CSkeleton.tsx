import React, { ReactNode } from 'react';
import { Skeleton, SkeletonProps } from 'antd';

interface CSkeletonProps extends SkeletonProps {
	children?: ReactNode;
	rows?: number;
}

const CSkeleton: React.FC<CSkeletonProps> = (props) => {
	const { children, rows, ...rest } = props;
	return <Skeleton {...rest} paragraph={{ rows: rows || 8 }}>{children}</Skeleton>;
};

export default CSkeleton;