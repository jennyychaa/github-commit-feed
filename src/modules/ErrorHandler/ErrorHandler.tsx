import React, { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
// import { get } from 'lodash';

// import Page404 from "./Page404";

const ErrorHandler = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  console.log(location);

  return <>{children}</>;
};

export default ErrorHandler;
