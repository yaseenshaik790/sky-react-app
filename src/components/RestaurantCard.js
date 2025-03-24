import { useContext } from "react";
import { FOOD_IMAGE } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="biriyani"
        src={FOOD_IMAGE + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{avgRating}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
      <h5>{loggedInUser}</h5>
    </div>
  );
};

// It take RestaurantCard as input and returns RestaurantCardWithPromoted
export const withRestaurantCardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-gray-600 text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
