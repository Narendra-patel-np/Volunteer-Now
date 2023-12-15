const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (decoded) {
        console.log(decoded);
        next();
      } else {
        res.send({ msg: "Incorrect Credential" });
      }
    });
  } else {
    res.send({ msg: "You are not authorised" });
  }
};

module.exports = { auth };
