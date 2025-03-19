import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    /* setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);
    setResMenuCards(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    ); */
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {avgRating} Ratings, {costForTwoMessage} , {cuisines.join(",")}
      </p>
      <h1>Menu List</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} {"- Rs."} {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
