import React from 'react';

import { Header, Layout, TextAlignProperty } from '../../components';

const Error = () => {
  return (
    <Layout>
      <Header 
        textAlign={TextAlignProperty.Center}
        title="Oops!"
        subtitle="Sorry, an unexpected error has occured."
      />
    </Layout>
  );
};

export default Error;