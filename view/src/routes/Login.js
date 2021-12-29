import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    if (email === "" || password === "") {
      window.alert("Email or password cannot be empty");
      return;
    }
    const response = await axios.post(
      "/api/user/login",
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
  }
  return (
    <>
      <Input name="email" value={email} setValue={setEmail} />
      <Input
        name="password"
        value={password}
        setValue={setPassword}
        inputType="password"
      />
      <Button onClickHandler={login} label="login" />
    </>
  );
};

export default Login;
