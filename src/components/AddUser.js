import React from "react";

class AddUser extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="First Name"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Last Name"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          placeholder="Url on image"
          onChange={(e) => this.setState({ avatar: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            const userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              avatar: this.state.avatar,
            };
            if (user) {
              userAdd.id = user.id;
            }
            this.props.onAdd(userAdd);
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
