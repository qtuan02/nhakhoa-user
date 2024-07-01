import React, { ReactNode } from 'react';
import { Menu, MenuProps } from 'antd';

interface CMenuProps extends MenuProps {
	children?: ReactNode;
}

const CMenu: React.FC<CMenuProps> = (props) => {
	const { children, ...rest } = props;
	return <Menu {...rest}>{children}</Menu>;
};

export default CMenu;