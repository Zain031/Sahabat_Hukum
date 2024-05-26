const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const createToken = (payload) => {
  let token = jwt.sign(payload, secret);
  return token;
};

const verifyToken = (token) => {
  let payload = jwt.verify(token, secret);
  return payload;
};

const verifyWithJose = async (token) => {
const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  return await jwtVerify<{
      id
  }>(token, secret)

}

module.exports = { createToken, verifyToken, verifyWithJose };
