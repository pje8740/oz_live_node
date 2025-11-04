const jwt = require("jsonwebtoken");

const user = {
  id: 123,
  username: "testuser",
};

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, "your-secret", {
    expiresIn: "1h",
  });

  return token;
}

const token = generateToken(user);
console.log(`Generated JwT: ${token}`);

try {
  const decoded = jwt.verify(token);
  console.log("Decoded JWT", decoded);
  console.log(
    "info : ",
    new Date(decoded.iat * 1000),
    new Date(decoded.exp * 1000)
  );
} catch (error) {
  console.error("Invalid token", error.message);
}
