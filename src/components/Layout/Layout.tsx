import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 32px;
`;

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Background>
      <Container>
        {children}
      </Container>
    </Background>
  );
};

export default Layout;