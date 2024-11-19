import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
    },
    process.env.TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.TOKEN_SECRET_EXPIRY,
    }
  );
};

export const authenticateToken = (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1]; // Check both cookie and header
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user; // Save the user information in request for later use
    next();
  });
};
