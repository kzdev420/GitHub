import React from "react";
import { MainHeader } from "../../components/Header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div>{children}</div>
    </>
  );
};
