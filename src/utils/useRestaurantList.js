//import { useEffect, useState } from "react";
//import { RESTAURENTS_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  /* useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async function () {
    const data = await fetch(RESTAURENTS_LIST_API);
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }; */

  return restaurantList;
};

export default useRestaurantList;
