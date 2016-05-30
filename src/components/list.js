import React from "react";
import map from "lodash/map";
import data from "../data";

export default props => {
  const users = JSON.parse(data);
  return (
    <ul>
      {
        map(users, (user, index) => <li key={`${user.name}_${index}`}>{user.name}</li>)
      }
    </ul>
  );
};
