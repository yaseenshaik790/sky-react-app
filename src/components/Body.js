import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withRestaurantCardPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    restaurantList,
    filteredRestaurantList,
    setFilteredRestaurantList,
    getRestaurants,
  } = useRestaurantList();

  const [searchText, setSearchText] = useState("");

  const { userName, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withRestaurantCardPromoted(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!onlineStatus) {
    return (
      <h1>
        Looks like something went wrong! Pls check your internet connection
      </h1>
    );
  }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search p-4 m-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(event) => {
              if (event.target.value === "") {
                getRestaurants();
              }
              setSearchText(event.target.value);
            }}
          ></input>
          <button
            className="px-3 py-1 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              const filteredRest = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="px-4 py-1  bg-gray-200 rounded-lg"
            onClick={() => {
              setFilteredRestaurantList(
                filteredRestaurantList.filter((res) => res.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex items-center">
          <label className="items-center"> User Name </label>
          <input
            value={userName}
            className="p-1 border border-b-gray-400"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
