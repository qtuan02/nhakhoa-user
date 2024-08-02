"use client";

import CBreadcrumb from "@/custom_antd/CBreadscrumb";
import CCol from "@/custom_antd/CCol";
import CRow from "@/custom_antd/CRow";
import CTitle from "@/custom_antd/CTitle";
import Link from "next/link";
import { Typography, Image } from 'antd';
const { Title, Paragraph, Text } = Typography;

export default function IntroduceComponent() {
    const items = [
        {
            title: <Link href="/trang-chu">Trang chủ</Link>
        },
        {
            title: <Link className="!text-blue-700 font-bold" href="#">Giới thiệu</Link>
        }
    ];

    return (
        <div className="mx-32 mt-28">
            <CBreadcrumb items={items} />
            <br />
            <div className="bg-[#fff]">
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>Giới thiệu nha khoa OK-VIP</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>Người bạn trọn đời</CTitle>
                        </Typography>
                        <Paragraph>
                            Nha khoa OK-VIP là chuỗi hệ thống nha khoa chuyên môn cao với chuỗi phòng khám toàn quốc, đạt nhiều thành tích về chỉnh nha và implant, tận tụy với triết lý điều trị chăm sóc nụ cười khỏe đẹp từ gốc, ưu tiên sức khoẻ khách hàng.
                        </Paragraph>
                    </CCol>
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-1.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                </CRow>
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/04/Trang-gio%CC%9B%CC%81i-thie%CC%A3%CC%82u-banner-2.jpg.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>Đạt hạng</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>Blue Diamond Provider 2022 & 2023</CTitle>
                        </Typography>
                        <Paragraph>
                            Nha khoa Parkway đạt Top 02 Đông Nam Á về niềng răng trong suốt Invisalign, Top 01 Việt Nam về tổng số ca niềng răng. Là đối tác chiến lược của Straumann Group, đứng số 1 thế giới về thị phần và về công nghệ Implant, kỹ thuật hội chẩn và máng hướng dẫn phẫu thuật.
                        </Paragraph>
                    </CCol>
                </CRow>
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>Đi đầu</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>về số hoá nha khoa</CTitle>
                        </Typography>
                        <Paragraph>
                            Với độ phủ rộng khắp toàn quốc, đội ngũ y bác sĩ đề cao tâm đức chính trực, tận tâm với nghề và tận tụy với khách hàng, chúng tôi hiện đang đi đầu trong việc số hóa về nha khoa: scan và lưu trữ thông tin bệnh án digital, lập phác đồ điều trị bằng video, hỗ trợ lên kế hoạch điều trị bằng trí thông minh nhân tạo AI và cá nhân hóa các giải pháp điều trị bằng CAD/CAM (máy in 3D).
                        </Paragraph>
                    </CCol>
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-5.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                </CRow>
                <CRow gutter={[16, 16]} justify="space-between" className="!px-20 !py-10">
                    <CCol>
                        <Image
                            width={500} height={270}
                            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-6-1.webp"
                            alt="..."
                            preview={false}
                        />
                    </CCol>
                    <CCol span={10}>
                        <Typography>
                            <CTitle className="!text-[#313b79] !mb-0" level={2}>Triết lý</CTitle>
                            <CTitle className="!text-[#313b79] !mt-0 !mb-8" level={3}>chăm sóc nụ cười khỏe đẹp từ gốc</CTitle>
                        </Typography>
                        <Paragraph>
                            Với mục tiêu trở thành chuỗi phòng khám nha khoa của mọi gia đình Việt Nam, chúng tôi mong muốn mang đến tiêu chuẩn mới trong nha khoa đến với khách hàng, để mỗi người đều có thể làm chủ được sức khỏe răng miệng của mình, lan toả nụ cười khỏe đẹp từ gốc và bảo tồn nụ cười khỏe đẹp trong suốt cuộc đời.
                        </Paragraph>
                    </CCol>
                </CRow>
            </div>
        </div>
    );
}