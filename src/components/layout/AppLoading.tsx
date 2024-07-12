import { Spin } from "antd";

export default function AppLoading() {
    return (
        <div className='w-full h-screen flex items-center justify-center z-10'>
			<Spin size='large'></Spin>
		</div>
    );
}