const getUserDetailFromToken = require("../helpers/getUserDetailFromToken");
const UserModel = require("../models/UserModel");

async function updateUser(req, res) {
  try {
    const token = req.cookies.token || "";

    const user = getUserDetailFromToken(token);

    const { name, profile_pic } = req.body;

    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      {
        name: name,
        profile_pic: profile_pic,
      }
    );

    console.log("updated user", updateUser);

    const userInfo = await UserModel.findById(user._id);

    console.log("UPDATES succesfully", userInfo);

    return res.json({
      message: "User updated successfully",
      data: userInfo,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || err,
      error: true,
    });
  }
}

module.exports = updateUser;
