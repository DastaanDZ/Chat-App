const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes/index");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/connnectDB");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.json({
    message: "Server running at port" + PORT,
  });
});

//api endpoint

app.use("/api", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running at" + PORT);
  });
});
