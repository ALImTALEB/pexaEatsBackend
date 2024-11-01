import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import {
  createCheckoutSession,
  stripeWebHookHandler,
} from "../controllers/orderController";

const orderRoutes = express.Router();

orderRoutes.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  createCheckoutSession
);

orderRoutes.post("/checkout/webhook", stripeWebHookHandler);

export default orderRoutes;
