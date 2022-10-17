import React from 'react';
import styled from 'styled-components';

export enum TextAlignProperty {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

interface HeaderProps {
  textAlign?: TextAlignProperty;
  title: string;
  subtitle?: string;
}

const HeaderContainer = styled.div<Pick<HeaderProps, 'textAlign'>>`
  margin-bottom: 48px;
  text-align: ${(props) => props.textAlign ?? TextAlignProperty.Left};
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
`;

const Header = ({ textAlign, title, subtitle }: HeaderProps) => {
  return (
    <HeaderContainer textAlign={textAlign}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderContainer>
  );
};

export default Header;