import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <textarea
          placeholder="Биография"
          onChange={(e) => this.setState({ bio: e.target.value })}
        />
        <input
          placeholder="Возраст"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset()
            this.props.onAdd({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            });
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default AddUser;
