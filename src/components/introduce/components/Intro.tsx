import React from 'react';
import { Typography, Row, Col, Image, Breadcrumb } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function IntroComponent() {
  return (
    <div style={{ padding: '20px 20px', backgroundColor: '#fff', maxWidth: '1200px', margin: '0 auto' }}>
      <Row>
        <Col span={24}>
          <Typography>
            <Title level={2} style={{ color: '#1D2A4B', marginBottom: '10px' }}>Giới thiệu nha khoa Parkway</Title>
            <Text style={{ fontSize: '24px', color: '#1D2A4B', display: 'block', marginBottom: '20px' }}>Người bạn trọn đời</Text>
          </Typography>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle">
        <Col span={12}>
          <Paragraph style={{ fontSize: '16px', color: '#4F4F4F', marginBottom: '0' }}>
            Nha khoa Parkway là chuỗi hệ thống nha khoa chuyên môn cao với chuỗi phòng khám toàn quốc, 
            đạt nhiều thành tích về chỉnh nha và implant, tận tụy với triết lý điều trị chăm sóc nụ cười khỏe đẹp từ gốc, 
            ưu tiên sức khoẻ khách hàng.
          </Paragraph>
        </Col>
        <Col span={12}>
          <Image
            src="https://nhakhoaparkway.com/wp-content/uploads/2024/03/Hinh-1.webp"
            alt="Clinic"
            preview={false}
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
    </div>
  );
}
