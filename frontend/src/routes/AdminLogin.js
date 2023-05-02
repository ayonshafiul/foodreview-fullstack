import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useAdmin } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAdminAuth } = useAdmin();
  const navigate = useNavigate();

  async function login() {
    if (email === "" || password === "") {
      window.alert("Email or password cannot be empty");
      return;
    }
    const response = await axios.post("/api/admin/login", {
      email: email,
      password: password,
    });
    console.log(response);
    if (response.data.success) {
      setAdminAuth(true);
      navigate("/admin/restaurants/add");
    } else {
      window.alert(response.data.token);
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

export default AdminLogin;
