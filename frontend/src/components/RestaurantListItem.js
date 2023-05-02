import { Link } from "react-router-dom";

const RestaurantListItem = ({ restaurant }) => {
  const {
    restaurantID,
    restaurantName,
    restaurantDescription,
    rating,
    ratingCount,
  } = restaurant;
  return (
    <Link to={`/restaurant/${restaurantID}`}>
      <div className="m-4 p-4 rounded-xl shadow-lg">
        <div className="text-xl">{restaurantName}</div>
        <div>{restaurantDescription}</div>
        <div>
          {rating} / 10 ({ratingCount})
        </div>
      </div>
    </Link>
  );
};

export default RestaurantListItem;
