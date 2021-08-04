import React from 'react';
import { UserContext } from './userData';

class UserMenu extends React.Component {
  render() {
    console.log(this.context)
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.userData.name}`}</span>
        <img
          alt="User Avatar"
          src={this.context.userData.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
