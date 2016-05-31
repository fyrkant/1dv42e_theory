import React, {PropTypes} from "react";
import map from "lodash/map";

import Card from "material-ui/card";
import {List, ListItem} from "material-ui/List";

const UserList = ({users}) => {
  return (
    <Card style={{minWidth: 450, marginTop: 10, alignSelf: "center"}}>
      <List>
        {
          map(users, (user, index) => (
            <ListItem key={`${user.name}_${index}`}
              primaryText={user.name}
              secondaryText={user.email}
            />
            ))
        }
      </List>
    </Card>
  );
};
UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
