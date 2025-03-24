import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCatogory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {avgRating} Ratings , {costForTwoMessage} , {cuisines.join(",")}
      </p>
      {categories.map((catagory, index) => (
        <RestaurantCatogory
          key={catagory?.card?.card?.title}
          data={catagory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
