import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';;

const ButtonContainer = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: #87CEFA;
  padding: 16px 24px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:focus,
  &:hover {
    background-color: #00BFFF;
  }
`;

const Button = ({ children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <ButtonContainer {...props}>{children}</ButtonContainer>
  );
};

export default Button;