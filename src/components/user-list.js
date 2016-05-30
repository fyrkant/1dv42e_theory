import React, {PropTypes} from "react";
import map from "lodash/map";

const UserList = ({users}) => {
  console.log(users.length);
  return (
    <ul>
      {
        map(users, (user, index) => (
          <li key={`${user.name}_${index}`}>
            <strong>Name: </strong>{user.name} <br />
            <strong>Address: </strong>{user.address}
          </li>
          ))
      }
    </ul>
  );
};
UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
