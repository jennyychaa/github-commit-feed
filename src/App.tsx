import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Error, Feed, Search } from './pages';
import { ErrorHandler } from './modules';

function App() {
  return (
    <ErrorHandler>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:user/:repo" element={<Feed />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ErrorHandler>
  );
}

export default App;
