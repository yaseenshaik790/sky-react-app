import { FOOD_IMAGE } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="biriyani"
        src={FOOD_IMAGE + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{avgRating}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurentCard;
