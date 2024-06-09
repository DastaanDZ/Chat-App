const getUserDetailFromToken = require("../helpers/getUserDetailFromToken");

async function userDetails(req, res) {
  console.log("IN USER DETAILS");
  try {
    const token = req.cookies.token || "";

    console.log("TOKEN", token);

    const user = await getUserDetailFromToken(token);

    console.log("USER", user);

    return res.status(200).json({
      message: "User data extracted",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = userDetails;
