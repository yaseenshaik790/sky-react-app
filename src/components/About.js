import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

/* const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h1>Food delivery App!</h1>
      <User name={"Yaseen "} location={"Bangalore"}></User>
      <UserClass name={"Shaik"} location={"Hyderabad"}></UserClass>
    </div>
  );
}; */

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy location",
        avatarUrl: "dummy image",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yaseenshaik790");
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatarUrl: json.avatar_url,
      },
    });
    console.log(json);
  }

  render() {
    const { name, location, avatarUrl } = this.state.userInfo;
    return (
      <div>
        <h1>About Us</h1>
        <h1>Food delivery App!</h1>
        <h1>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </h1>
        <img src={avatarUrl}></img>
        <UserClass name={name} location={location}></UserClass>
      </div>
    );
  }
}

export default About;
