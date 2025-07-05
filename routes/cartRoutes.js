const express = require("express");
const {
  getCart,
  removeProduct,
  clearCart,
  updateQuantity,
  addToCart,
} = require("../controllers/cartController");
const { isAuth } = require("../middlewares/authmiddlewares");

const cartRoutes = express.Router();

cartRoutes.get("/", isAuth, getCart);

cartRoutes.post("/add", isAuth, addToCart);

cartRoutes.put("/", isAuth, updateQuantity);

cartRoutes.delete("/product", isAuth, removeProduct);

cartRoutes.delete("/", isAuth, clearCart);

module.exports = cartRoutes;
