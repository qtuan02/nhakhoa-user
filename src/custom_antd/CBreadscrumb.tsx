import { Breadcrumb, BreadcrumbProps } from 'antd';
import React, { ReactNode } from 'react';

interface CBreadcrumbProps extends BreadcrumbProps {
	items: {
		title: string | ReactNode;
	}[];
}

const CBreadcrumb: React.FC<CBreadcrumbProps> = (props) => {
	const { items } = props;
	return (
		<Breadcrumb
			items={items}
			className='mb-2'
		/>
	);
};

export default CBreadcrumb;