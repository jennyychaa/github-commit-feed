import React from 'react';

import { Header, Layout, TextAlignProperty } from '../../components';
import { SearchForm } from '../../modules';

const Search = () => {
  return (
    <Layout>
      <Header
        textAlign={TextAlignProperty.Center}
        title="Search GitHub Repository Logs..."
      />
      <SearchForm />
    </Layout>
  );
};

export default Search;