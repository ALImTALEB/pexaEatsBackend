import express from "express";
import multer from "multer";
import {
  createMyRestaurant,
  getMyRestaurant,
  getMyRestaurantOrders,
  updateMyRestaurant,
  updateOrderStatus,
} from "../controllers/myRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const myRestaurantRoutes = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

myRestaurantRoutes.get("/order", jwtCheck, jwtParse, getMyRestaurantOrders);

myRestaurantRoutes.patch(
  "/order/:orderId/status",
  jwtCheck,
  jwtParse,
  updateOrderStatus
);

// api/my/restaurant
myRestaurantRoutes.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  createMyRestaurant
);

myRestaurantRoutes.get("/", jwtCheck, jwtParse, getMyRestaurant);

myRestaurantRoutes.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  updateMyRestaurant
);

export default myRestaurantRoutes;
