const express = require("express");

const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description add book
 * @method GET /add-book
 */
route.get("/add-book", services.add_book);

/**
 * @description update book
 * @method GET /update-book
 */
route.get("/update-book", services.update_book);

// API
route.post("/api/book", controller.create);
route.get("/api/book", controller.find);
route.put("/api/book/:id", controller.update);
route.delete("/api/book/:id", controller.delete);

module.exports = route;
