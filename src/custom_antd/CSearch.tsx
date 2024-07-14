import { Input } from "antd";
import { ReactNode } from "react";
const { Search } = Input;
import { SearchProps } from 'antd/es/input/Search';

interface CSearchProps extends SearchProps {
    children?: ReactNode;
}

const CSearch: React.FC<CSearchProps> = (props) => {
    const { children, ...rest } = props;
    return <Search allowClear {...rest}>{children}</Search>;
};

export default CSearch;