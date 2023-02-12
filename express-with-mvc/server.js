const http = require("http");
const express = require("express");
const router = require("./routes/usersRouter");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/users", router);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
//server
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
