import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; // Allow wrapping for responsive design
  margin-top: 40px; // Adjust this value to control the space between the categories and the banner
`;

const CategoryItem = styled.div`
  margin: 10px 30px; // Increase spacing between items
  text-align: center;
  flex: 1; // Ensure items are evenly distributed
  max-width: 120px; // Control max width for each item
`;

const IconWrapper = styled.div`
  background-color: #f0f2f5; // Adjust this color to match the background color of the icons in the image
  border-radius: 50%;
  width: 90px; // Fixed width
  height: 90px; // Fixed height
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; // Center the icon wrapper
`;

const Icon = styled.img`
  width: 50px; // Thay đổi kích thước phù hợp
  height: 50px; // Thay đổi kích thước phù hợp
`;

const Label = styled.span`
  display: block;
  margin-top: 10px;
  font-weight: bold;
  text-align: center; // Center the text
`;

const categories = [
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Đặt lịch hẹn' },
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Tìm bác sĩ' },
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Ưu đãi' },
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Giá tốt' },
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Phòng khám' },
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-03.svg', label: 'Niềng răng' },
  { icon: 'https://nhakhoaparkway.com/wp-content/uploads/2024/01/Bo%CC%A3%CC%82-icon-website-07.svg', label: 'Kiến thức' },
];

export default function CateogoryHome(){
  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <CategoryItem key={index}>
          <IconWrapper>
            <Icon src={category.icon} alt={category.label} />
          </IconWrapper>
          <Label>{category.label}</Label>
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
};


