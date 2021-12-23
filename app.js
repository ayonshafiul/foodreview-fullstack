require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const authRouter = require("./routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");

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

server.use("/api/", authRouter);

server.listen(PORT, () => {
  console.log("Server is running on port 8080");
});
