require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./middlewares/auth");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const foodRouter = require("./routes/food");
const restaurantRouter = require("./routes/restaurant");

const server = express();

server.use(express.json());
server.use(cookieParser());
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

server.use("/api/", userRouter);
server.use("/api/", adminRouter);
server.use("/api/", foodRouter);
server.use("/api/", restaurantRouter);

server.listen(PORT, () => {
  console.log("Server is running on port 8080");
});
