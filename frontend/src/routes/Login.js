import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useUser } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserAuth } = useUser();
  const navigate = useNavigate();

  async function login() {
    if (email === "" || password === "") {
      window.alert("Email or password cannot be empty");
      return;
    }
    const response = await axios.post("/api/user/login", {
      email: email,
      password: password,
    });
    if (response.data.success) {
      setUserAuth(true);
      navigate("/");
    }
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
