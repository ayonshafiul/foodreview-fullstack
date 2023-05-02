import { Link } from "react-router-dom";

const FoodListItem = ({ food }) => {
  const { foodID, foodName, foodDescription, foodPrice, rating, ratingCount } =
    food;
  return (
    <Link to={`/food/${foodID}`}>
      <div className="m-4 p-4 rounded-xl shadow-lg">
        <div className="text-xl">{foodName}</div>
        <div>{foodDescription}</div>
        <div>Tk. {foodPrice}</div>
        <div>
          {rating} / 10 ({ratingCount})
        </div>
      </div>
    </Link>
  );
};

export default FoodListItem;
