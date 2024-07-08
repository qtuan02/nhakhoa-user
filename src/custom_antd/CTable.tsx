import { Table, TableProps } from 'antd';
import React from 'react';

interface CTableProps extends TableProps<any> {}

const CTable: React.FC<CTableProps> = (props) => {
	return <Table {...props} />;
};

export default CTable;