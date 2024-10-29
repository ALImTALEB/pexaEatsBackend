import express from "express";
import { param } from "express-validator";
import { searchRestaurants } from "../controllers/restaurantController";

const restaurantRoutes = express.Router();

// api/restaurant/search/london
restaurantRoutes.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City is parameter must be a valid string"),
  searchRestaurants
);

export default restaurantRoutes;
