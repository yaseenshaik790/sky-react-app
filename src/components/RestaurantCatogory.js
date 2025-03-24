import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogory = ({ data, showItems, setShowIndex }) => {
  const [showItemList, setShowItemList] = useState(false);

  const handleItemList = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleItemList}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default RestaurantCatogory;
