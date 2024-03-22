const express = require("express");
const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoute);

//get
app.get("/", (req, res) => {
  res.send("Hello !!!");
});

//connect to DB i.e. moongoose atlas
mongoose
  .connect(
    "mongodb+srv://aqibdotjs:zSy6XhsmKJTodWhi@backenddb.hyiktzk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
