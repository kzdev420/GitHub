import React from "react";
import { LeftSidebar } from "../../components/LeftSidebar";
import { Activity } from "../../components/Activity";

import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="homepage row">
      <div className="col-2">
        <LeftSidebar />
      </div>
      <div className="activities col-7">
        <Activity />
      </div>
      <div className="col-3">Left Side Bar</div>
    </div>
  );
};
