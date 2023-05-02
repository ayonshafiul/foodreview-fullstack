const FoodDetails = ({ food }) => {
  let { foodName, foodDescription, foodPrice, rating, ratingCount } = food;
  return (
    <div className="m-4 p-4 rounded-lg">
      <div className="text-center text-3xl font-bold m-4">{foodName}</div>
      <div className="text-center text-xl italic m-2">{foodDescription}</div>
      <div className="text-center text-xl italic m-2">Tk. {foodPrice}</div>
      <div className="text-center font-bold">&#9734; {rating}/10</div>
      <div className="text-center text-sm m-1">
        {ratingCount} user review(s)
      </div>
    </div>
  );
};

export default FoodDetails;
