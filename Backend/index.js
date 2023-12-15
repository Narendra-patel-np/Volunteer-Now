const express = require("express");
const { connection } = require("./db");
const {userRouter}=require("./routes/user.routes")

const app = express();
app.use(express.json());
app.use("/users",userRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Connected to DB and Server is running at ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
