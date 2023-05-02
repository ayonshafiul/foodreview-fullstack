import Review from "./Review";

const ReviewList = ({ list, title }) => {
  return (
    <>
      <div className="p-4 text-2xl font-bold">{title}</div>
      <div className="p-2 rounded-lg">
        {list.length > 0 &&
          list.map((review) => {
            return (
              <Review
                key={review.userID + "r" + review.restaurantID}
                review={review}
              ></Review>
            );
          })}
      </div>
    </>
  );
};

export default ReviewList;
