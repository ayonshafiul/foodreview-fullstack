const Review = ({ review }) => {
  console.log(review);
  return (
    <div className="rounded-lg p-4 mt-4 shadow-md">
      <div className="italic text-sm text-gray-500 m-2">
        &#9734; {review.rating} / 10
      </div>
      <div className="">
        <span className="text-2xl font-bold">&#8220;</span>
        {"  "}
        {review.review}
      </div>
    </div>
  );
};

export default Review;
