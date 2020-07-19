import React from "react";
import { Repositries } from "../Repositries";
import { Teams } from "../Teams";

import "./LeftSidebar.scss";

export const LeftSidebar = ({ user }) => {
  return (
    <div className="leftsidebar">
      <Repositries />
      <Teams />
    </div>
  );
};
