import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Search_Result } from "./Search_Result";

import "./SearchBox.scss";

export const SearchBox = ({
  onChange,
  placeholder = "Enter ...",
  inputStyle,
}) => {
  const handlechange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className="search-box">
      <Form inline>
        <FormControl
          type="text"
          placeholder={placeholder}
          className={"mr-sm-2"}
          style={inputStyle}
          onChange={(e) => handlechange(e)}
        />
      </Form>
      {/* <Search_Result data={data} SearchTerm={searchTerm} /> */}
    </div>
  );
};
