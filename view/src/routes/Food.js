import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodDetails from "../components/FoodDetails";
import ReviewList from "../components/ReviewList";
import Input from "../components/Input";
import Button from "../components/Button";
import Rating from "react-rating";

const Food = () => {
  const { foodID } = useParams();
  const [food, setfood] = useState({});
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function handleRating(value) {
    setRating(value);
  }
  async function postReview() {
    const reviewResult = await axios.post(`/api/food/review/${foodID}`, {
      rating,
      review,
    });
    if (reviewResult.data.success) {
      setReview("");
      setRefresh((prev) => !prev);
    }
  }
  useEffect(() => {
    async function getData() {
      const foodResult = await axios.get(`/api/food/get/${foodID}`);
      const reviewResult = await axios.get(`/api/food/review/${foodID}`);
      if (foodResult.data.success) {
        setfood(foodResult.data.data[0]);
      }

      if (reviewResult.data.success) {
        setReviews(reviewResult.data.data);
      }
    }
    getData();
  }, [foodID, refresh]);
  return (
    <div>
      <FoodDetails food={food} />

      <div className="flex items-center justify-center mt-4">
        <Rating stop={10} initialRating={1} onClick={handleRating} />
      </div>
      <div className="text-center mb-2">Your rating: {rating} / 10</div>
      <Input
        name="review"
        placeholder="Type a review"
        value={review}
        setValue={setReview}
        showLabel={false}
      />
      <Button label="review" onClickHandler={postReview} />
      <ReviewList list={reviews} />
    </div>
  );
};

export default Food;
