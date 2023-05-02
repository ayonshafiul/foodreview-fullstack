import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantList from "../components/RestaurantList";
import FoodList from "../components/FoodList";

const AdminRestaurants = (props) => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [popularRestaurants, setPopularRestaurants] = useState([]);
  const [topFoodItems, setTopFoodItems] = useState([]);
  const [popularFoodItems, setPopularFoodItems] = useState([]);
  useEffect(() => {
    async function getTopRestaurants() {
      const response = await axios.get("/api/restaurant/toprated");

      if (response.data.success) {
        setTopRestaurants(response.data.data);
      }
      const responsePopular = await axios.get("/api/restaurant/popular");

      if (responsePopular.data.success) {
        setPopularRestaurants(responsePopular.data.data);
      }

      const responseFood = await axios.get("/api/food/toprated");

      if (responseFood.data.success) {
        setTopFoodItems(responseFood.data.data);
      }

      const responseFoodPopular = await axios.get("/api/food/popular");

      if (responseFoodPopular.data.success) {
        setPopularFoodItems(responseFoodPopular.data.data);
      }
    }
    getTopRestaurants();
  }, []);
  return (
    <div>
      <RestaurantList list={topRestaurants} title={"Top restaurants"} />
      <RestaurantList list={popularRestaurants} title={"Popular restaurants"} />
      <FoodList list={topFoodItems} title={"Top rated food items"} />
      <FoodList list={popularFoodItems} title={"Most popular food items"} />
    </div>
  );
};

export default AdminRestaurants;
