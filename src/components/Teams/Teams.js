import React from "react";
import { SearchBox } from "../SearchBox";

import "./Teams.scss";

const teamList = [
  {
    id: 1,
    name: "Excellent Developer",
  },
  {
    id: 2,
    name: "Angular Developer",
  },
  {
    id: 3,
    name: "React Developer",
  },
  {
    id: 4,
    name: "Ruby on Rails Developer",
  },
  {
    id: 5,
    name: "Node Developer",
  },
];

export const Teams = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="teams">
      <div className="teams-title">
        <h6>Your Teams</h6>
      </div>
      <div className="teams-list">
        <SearchBox
          className="style_2"
          placeholder="Find a Team..."
          onChange={setSearchTerm}
        />
        {teamList
          .filter((team) =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((team) => (
            <Team key={team.id} {...team} />
          ))}
      </div>
    </div>
  );
};

const Team = ({ name }) => <div>{name}</div>;
