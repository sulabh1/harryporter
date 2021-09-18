const { Character } = require("../models");

// exports.createCharacter = async (req, res) => {
//   try {
//     const { name, house, image } = req.body;
//     const characters = await Character.create({ name, house, role, image });
//     res.status(201).json({
//       status: "success",
//       characters,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };
exports.getData = async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    res.status(201).json({
      status: "success",
      characters,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};
