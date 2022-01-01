import RestaurantListItem from "./RestaurantListItem";

const RestaurantList = ({ list, title }) => {
  return (
    <>
      <div className="p-4 text-2xl font-bold">{title}</div>
      <div className="p-2 rounded-lg h-96 overflow-y-auto overflow-x-hidden">
        {list.length > 0 &&
          list.map((restaurant) => {
            return (
              <RestaurantListItem
                key={restaurant.restaurantID}
                restaurant={restaurant}
              ></RestaurantListItem>
            );
          })}
      </div>
    </>
  );
};

export default RestaurantList;
