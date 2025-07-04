const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    name: "viratkohli",
    message: "RCB Forever",
  });
});

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("mongoDB connection error:", err);
  });
