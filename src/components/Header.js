import { useEffect, useState } from "react";
import { CLOUD_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("usEffect() rendered!");
  }, [userLogin]);
  console.log("Header rendered!");

  return (
    <div className="header">
      <div className="logo">
        <img src={CLOUD_LOGO_URL}></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li style={{ color: onlineStatus ? "green" : "red" }}>
            {onlineStatus ? "Online" : "Offline"}
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              userLogin === "Login"
                ? setUserLogin("Logout")
                : setUserLogin("Login");
            }}
          >
            {userLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
