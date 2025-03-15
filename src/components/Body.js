import { useState } from "react";
import resObjList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState(resObjList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurentList(
              restaurentList.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {restaurentList.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
