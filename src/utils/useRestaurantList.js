import { useEffect, useState } from "react";
import { RESTAURENTS_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(RESTAURENTS_LIST_API);
      const json = await data.json();
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return {
    restaurantList,
    filteredRestaurantList,
    setFilteredRestaurantList,
    getRestaurants,
  };
};

export default useRestaurantList;
