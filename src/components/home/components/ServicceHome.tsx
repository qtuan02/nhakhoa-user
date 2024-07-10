import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  padding: 40px 20px 20px; // Add top padding to create space below the category section
  text-align: center;
`;

const ServiceTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ServiceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; // Space between items
`;

const ServiceItem = styled.div`
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 10px; // Add margin to ensure spacing between rows
`;

const ServiceImageWrapper = styled.div`
  width: 100%;
  height: 150px; // Adjust height as needed
  overflow: hidden;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceLabel = styled.div`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const services = [
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Niềng răng trong suốt Invisalign' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Niềng răng mắc cài tiết kiệm' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Nha trẻ em' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Trồng răng Implant' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Lấy cao răng' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Dịch vụ 6' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Dịch vụ 7' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Dịch vụ 8' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Dịch vụ 9' },
  { image: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Dịch vụ 10' },
];

export default function ServiceHome ()  {
  return (
    <ServiceContainer>
      <ServiceTitle>Chăm sóc sức khỏe răng miệng toàn diện</ServiceTitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceImageWrapper>
              <ServiceImage src={service.image} alt={service.label} />
            </ServiceImageWrapper>
            <ServiceLabel>{service.label}</ServiceLabel>
          </ServiceItem>
        ))}
      </ServiceGrid>
    </ServiceContainer>
  );
};


