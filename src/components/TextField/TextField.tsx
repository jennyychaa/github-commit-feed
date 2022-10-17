import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FieldContainer = styled.div`
  margin-bottom: 24px;
`;

const Input = styled.input`
  max-width: 535px;
  width: 100%;
  border: 1px solid #787878;
  border-radius: 4px;
  padding: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const TextField = ({ label, name, placeholder }: TextFieldProps) => {
  return (
    <FieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} placeholder={placeholder} type="text"></Input>
    </FieldContainer>
  );
};

export default TextField;