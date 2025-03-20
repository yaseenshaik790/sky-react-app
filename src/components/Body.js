import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const {
    restaurantList,
    filteredRestaurantList,
    setFilteredRestaurantList,
    getRestaurants,
  } = useRestaurantList();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

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
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
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

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurantList(
              filteredRestaurantList.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
