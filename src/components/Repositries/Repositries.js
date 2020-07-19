import React from "react";
import { Repositry } from "../Repositry";

import "./Repositries.scss";

const repositry_list = [
  {
    id: 1,
    name: "Ruby on Rails",
    status: "public",
    url: "/repositries/1",
  },
  {
    id: 2,
    name: "Python & Django",
    status: "public",
    url: "/repositries/1",
  },
  {
    id: 3,
    name: "Node & React",
    status: "private",
    url: "/repositries/1",
  },
  {
    id: 4,
    name: "Laravel & Vue",
    status: "private",
    url: "/repositries/1",
  },
];

export const Repositries = () => {
  return (
    <div className="repositries">
      <div className="repositries-hearder row">
        <div className="repositries-hearder-title col-6">
          <h6>Repositries</h6>
        </div>
        <div className="repositries-hearder-newbutton col-6">
          <button className="btn btn-sm btn-success">New</button>
        </div>
      </div>

      <div className="repositries-list">
        {repositry_list.map((data) => (
          <Repositry key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
