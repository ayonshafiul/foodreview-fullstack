import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

const AdminAddRestaurant = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  async function insert() {
    const response = await axios.post("/api/restaurant/insert", {
      restaurantName: name,
      restaurantDescription: description,
    });
    if (response.data.success) {
      window.alert("inserted");
      setName("");
      setDescription("");
    } else {
      console.log(response.data);
    }
  }
  return (
    <>
      <Input name="Restaurant Name" value={name} setValue={setName} />
      <Input
        name="Restaurant Description"
        value={description}
        setValue={setDescription}
      />
      <Button onClickHandler={insert} label="insert" />
    </>
  );
};

export default AdminAddRestaurant;
