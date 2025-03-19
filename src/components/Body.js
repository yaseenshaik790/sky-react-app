import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURENTS_LIST_API } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async function () {
    const data = await fetch(RESTAURENTS_LIST_API);
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

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
