import React from "react";

// Class Component is class which extends React.Component
// It uses render() to return JSX

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          IncreaseCount
        </button>
        <h1>Name : {name}</h1>
        <h1>Adddress : {location}</h1>
        <h1>Contact : @yaseen</h1>
      </div>
    );
  }
}

export default UserClass;
