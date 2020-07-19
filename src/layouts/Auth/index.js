import React from "react";

import { SecondaryHeader } from "../../components/Header";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <SecondaryHeader />
      <div>{children}</div>
    </>
  );
};
