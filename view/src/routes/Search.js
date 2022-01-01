import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantList from "../components/RestaurantList";
import FoodList from "../components/FoodList";
import Input from "../components/Input";
import Button from "../components/Button";

const Search = (props) => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [topFoodItems, setTopFoodItems] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    const response = await axios.get("/api/restaurant/search?q=" + search);
    if (response.data.success) {
      setTopRestaurants(response.data.data);
    }
    const responseFood = await axios.get("/api/food/search?q=" + search);
    if (responseFood.data.success) {
      setTopFoodItems(responseFood.data.data);
    }
  };
  return (
    <div>
      <Input
        name="Search"
        value={search}
        setValue={setSearch}
        placeHolder="Search.."
      />
      <Button label="Search" onClickHandler={handleSearch} />

      {topRestaurants.length > 0 ? (
        <RestaurantList
          list={topRestaurants}
          title={"Search Results for restaurants"}
        />
      ) : null}

      {topFoodItems.length > 0 ? (
        <FoodList list={topFoodItems} title={"Search Results for food items"} />
      ) : null}
    </div>
  );
};

export default Search;
