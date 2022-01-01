import FoodListItem from "./FoodListItem";

const FoodList = ({ list, title }) => {
  return (
    <>
      <div className="p-4 text-2xl font-bold">{title}</div>
      <div className="p-2 rounded-lg h-96 overflow-y-auto overflow-x-hidden">
        {list.length > 0 &&
          list.map((food) => {
            return <FoodListItem key={food.foodID} food={food}></FoodListItem>;
          })}
      </div>
    </>
  );
};

export default FoodList;
