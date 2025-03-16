import { useState } from "react";
import { CLOUD_LOGO_URL } from "../utils/constants";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={CLOUD_LOGO_URL}></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
