import React from 'react';
import { Typography, Row, Col, Image } from 'antd';
import '../../../styles/antd.css'; 
const { Title, Paragraph, Text } = Typography;

export default function IntroComponent() {
  return (
    <div className="intro-container">
      <Row>
        <Col span={24}>
          {/* Optional: Breadcrumb or additional content */}
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle">
        <Col span={12}>
          <Typography>
            <Title level={2} className="main-title">Giới thiệu nha khoa OK-VIP</Title>
            <Text className="subtitle">Người bạn trọn đời</Text>
          </Typography>
          <Paragraph className="intro-paragraph">
            Nha khoa OK-VIP là chuỗi hệ thống nha khoa chuyên môn cao với chuỗi phòng khám toàn quốc, 
            đạt nhiều thành tích về chỉnh nha và implant, tận tụy với triết lý điều trị chăm sóc nụ cười khỏe đẹp từ gốc, 
            ưu tiên sức khoẻ khách hàng.
          </Paragraph>
        </Col>
        <Col span={12} className="image-container">
          <Image
            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-1.webp"
            alt="Clinic"
            preview={false}
            className="main-image"
          />
        </Col>
      </Row>
    </div>
  );
}
