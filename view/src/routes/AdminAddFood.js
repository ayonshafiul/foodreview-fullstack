import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

const AdminAddFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantID, setRestauranID] = useState(-1);

  useEffect(() => {
    async function get() {
      const response = await axios.get("/api/restaurant/get");
      setRestaurants(response.data.data);
    }
    get();
  }, []);
  async function insert() {
    const response = await axios.post("/api/food/insert/" + restaurantID, {
      foodName: name,
      foodDescription: description,
      foodPrice: price,
    });
    if (response.data.success) {
      window.alert("inserted");
      setName("");
      setDescription("");
      setPrice("");
    } else {
      console.log(response.data);
    }
  }
  return (
    <>
      <Input name="food Name" value={name} setValue={setName} />
      <Input
        name="food Description"
        value={description}
        setValue={setDescription}
      />
      <select
        value={restaurantID}
        onChange={(event) => {
          console.log(event.target.value);
          setRestauranID(parseInt(event.target.value));
        }}
      >
        {restaurants.map((r) => {
          return (
            <option
              key={r.restaurantName + r.restaurantID}
              value={r.restaurantID}
            >
              {r.restaurantName}
            </option>
          );
        })}
      </select>
      <Input name="Price" value={price} setValue={setPrice} />
      <Button onClickHandler={insert} label="insert" />
    </>
  );
};

export default AdminAddFood;
