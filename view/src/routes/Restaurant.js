import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails";
import ReviewList from "../components/ReviewList";
import Input from "../components/Input";
import Button from "../components/Button";
import Rating from "react-rating";
import FoodList from "../components/FoodList";

const Restaurant = () => {
  const { restaurantID } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [foodItems, setFoodItems] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function handleRating(value) {
    setRating(value);
  }
  async function postReview() {
    const reviewResult = await axios.post(
      `/api/restaurant/review/${restaurantID}`,
      {
        rating,
        review,
      }
    );
    if (reviewResult.data.success) {
      setReview("");
      setRefresh((prev) => !prev);
    }
  }
  useEffect(() => {
    async function getData() {
      const foodResult = await axios.get(
        `/api/food/get/restaurant/${restaurantID}`
      );

      const restaurantResult = await axios.get(
        `/api/restaurant/get/${restaurantID}`
      );
      const reviewResult = await axios.get(
        `/api/restaurant/review/${restaurantID}`
      );
      if (restaurantResult.data.success) {
        setRestaurant(restaurantResult.data.data[0]);
      }

      if (reviewResult.data.success) {
        setReviews(reviewResult.data.data);
      }

      if (foodResult.data.success) {
        setFoodItems(foodResult.data.data);
      }
    }
    getData();
  }, [restaurantID, refresh]);
  return (
    <div>
      <RestaurantDetails restaurant={restaurant} />

      {foodItems.length > 0 ? (
        <FoodList list={foodItems} title={"Food Items"} />
      ) : (
        "This restaurant currently doesn't have any food items"
      )}

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

export default Restaurant;
