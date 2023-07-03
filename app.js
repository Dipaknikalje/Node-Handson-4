const express = require("express");
const dotenv = require("dotenv");
const loginRoute = require("./routes/loginroute");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// let storeData = [];
// app.post("/register", (req, res) => {
//   console.log(req.body);
//   const data = req.body;
//   const { name, number, email, password } = req.body;
//   storeData.push(data);
//   res.send(storeData);
// });
// app.get("/", (req, res) => {
//   res.send("Home page rendered");
// });

app.use("/user", loginRoute);

port = process.env.PORT;
app.listen(port, () => {
  try {
    console.log(`server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
