import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
  user = this.props.user;
  render() {
    return (
      <div className="user" key={this.user.id}>
        <IoCloseCircleSharp className="delete-icon"/>
        <IoHammerSharp className="edit-icon"/>
        <h3>
          {this.user.firstName} {this.user.lastName}
        </h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? "Счастилив :)" : "Грустит :("}</b>
      </div>
    );
  }
}

export default User;
