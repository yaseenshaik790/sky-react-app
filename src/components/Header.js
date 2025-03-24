import { useContext, useEffect, useState } from "react";
import { CLOUD_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("usEffect() rendered!");
  }, [userLogin]);
  console.log("Header rendered!");

  return (
    <div className="flex justify-between bg-pink-100 shadow-indigo-100">
      <div className="w-25">
        <img src={CLOUD_LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-6 text-gray-800 font-semibold p-4 m-5">
          <li
            className="text-green-600 font-bold"
            style={{ color: onlineStatus ? "green" : "red" }}
          >
            {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="hover:text-pink-600 cursor-pointer">
            <Link to="">Home</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer">
            <a href="about">About Us</a>
          </li>
          <li className="hover:text-pink-600 cursor-pointer">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer">Cart</li>
          <button
            className="px-4 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              userLogin === "Login"
                ? setUserLogin("Logout")
                : setUserLogin("Login");
            }}
          >
            {userLogin}
          </button>
          <li className="hover:text-pink-600 cursor-pointer">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
