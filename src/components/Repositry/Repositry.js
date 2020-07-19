import React from "react";
import { Link } from "react-router-dom";
import { FiLock, FiTv } from "react-icons/fi";

export const Repositry = ({ data }) => {
  return (
    <div className="repositry">
      <Link to={data.url}>
        {data.status !== "public" ? <FiLock /> : <FiTv />}
        {data.name}
      </Link>
    </div>
  );
};
