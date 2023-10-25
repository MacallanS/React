import React from "react";

class EditUser extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      this.setState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
      });
    }
  }

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="First Name"
          value={this.state.first_name}
          onChange={(e) => this.handleInputChange(e, "first_name")}
        />
        <input
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={(e) => this.handleInputChange(e, "last_name")}
        />
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.handleInputChange(e, "email")}
        />
        <input
          placeholder="Url on image"
          value={this.state.avatar}
          onChange={(e) => this.handleInputChange(e, "avatar")}
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
            if (this.props.user) {
              userAdd.id = this.props.user.id;
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

export default EditUser;
