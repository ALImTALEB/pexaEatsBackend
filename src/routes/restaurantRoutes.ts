import express from "express";
import { param } from "express-validator";
import {
  getRestaurant,
  searchRestaurants,
} from "../controllers/restaurantController";

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

restaurantRoutes.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId is parameter must be a valid string"),
  getRestaurant
);

export default restaurantRoutes;
