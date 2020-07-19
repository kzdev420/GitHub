import React from "react";
import { Link } from "react-router-dom";

export const Search_Result = ({ data, SearchTerm }) => {
  return (
    <div className="search-result">
      {data.map((item) =>
        item.name.includes(SearchTerm) || SearchTerm == null ? (
          <div key={item.key}>
            <Link to={"/teams/" + item.key}>{item.name}</Link>
          </div>
        ) : null
      )}
    </div>
  );
};
