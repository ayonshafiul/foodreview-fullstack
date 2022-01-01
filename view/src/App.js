import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Register from "./routes/Register";
import NoMatch from "./routes/NoMatch";
import axios from "axios";
import { useAdmin, useUser } from "./contexts/AuthProvider";
import Restaurant from "./routes/Restaurant";
import Food from "./routes/Food";
import Search from "./routes/Search";
import AdminLayout from "./routes/AdminLayout";
import AdminLogin from "./routes/AdminLogin";
import AdminAddRestaurant from "./routes/AdminAddRestaurant";
import AdminAddFood from "./routes/AdminAddFood";

function App() {
  const { setAdminAuth } = useAdmin();
  const { setUserAuth } = useUser();
  useEffect(() => {
    async function checkAuth() {
      const adminResults = await axios.get("/api/admin/authenticated");
      if (adminResults.data.success) {
        setAdminAuth(true);
      }
      const userResults = await axios.get("/api/user/authenticated");
      if (userResults.data.success) {
        setUserAuth(true);
      }
    }
    checkAuth();
  }, [setAdminAuth, setUserAuth]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="search" element={<Search />} />
        <Route path="restaurant/:restaurantID" element={<Restaurant />} />
        <Route path="food/:foodID" element={<Food />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="login" element={<AdminLogin />} />
        <Route path="restaurants" element={<AdminAddRestaurant />} />
        <Route path="restaurants/add" element={<AdminAddRestaurant />} />
        <Route path="foods" element={<Search />} />
        <Route path="foods/add" element={<AdminAddFood />} />
      </Route>
    </Routes>
  );
}

export default App;
