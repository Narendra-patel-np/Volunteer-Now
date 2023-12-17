const express = require("express");
const { connection } = require("./db");
const {userRouter}=require("./routes/user.routes");
const {oppoRouter} = require("./routes/oppo.routes");
const cors = require("cors");
require("dotenv").config()
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users",userRouter);
app.use("/volunteer",oppoRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log('Connect to the MogoDB');
  } catch (error) {
    console.log(error);
  }
  console.log(`Connected to DB and Server is running at ${process.env.PORT}`);
});
///