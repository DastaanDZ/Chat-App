const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const getUserDetailFromToken = async (token) => {
  if (!token) {
    return {
      message: "Session expired",
      logout: true,
    };
  }

  console.log("in get user detail");
  console.log("TOKEN", token);

  const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);

  console.log("Decode", decode);

  const user = await UserModel.findById(decode.id).select("-password");

  console.log("User", user);

  return user;
};

module.exports = getUserDetailFromToken;
