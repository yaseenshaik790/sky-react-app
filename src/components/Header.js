import { useEffect, useState } from "react";
import { CLOUD_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");

  // If no dependency Array => useEffect called on every render
  //If dependency array is empty =[] => useEffect called on initial render(just once)
  //If dependency array with value => useEffect called on userLogin updated.
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
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
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
