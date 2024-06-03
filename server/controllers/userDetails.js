const { response } = require("express");
const getUserDetailFromToken = require("../helpers/getUserDetailFromToken");

async function userDetails(req, res) {
  try {
    const token = req.cookies.token || "";

    const user = await getUserDetailFromToken(token);

    return res.status(200).json({
      message: "User data extracted",
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = userDetails;
