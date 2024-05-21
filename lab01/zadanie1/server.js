const express = require("express");
const basicAuth = require("express-basic-auth");

const app = express();

app.use(
  basicAuth({
    users: { username: "minecraft" },
    unauthorizedResponse: { message: "You are not authenticated" },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// curl -X GET \
//   http://localhost:3000/ \
//   -H 'Authorization: Basic dXNlcm5hbWU6eW91cnBhc3N3b3Jk'
