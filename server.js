const express = require("express");
const app = express();

const port = 5000;
const connectDb = require("./config/db");
const userRouter = require("./routes/userRouter");

connectDb();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("server is running");
});
