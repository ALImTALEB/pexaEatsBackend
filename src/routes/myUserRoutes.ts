import express from "express";
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const myUserRoutes = express.Router();

// api/my/user
myUserRoutes.get("/", jwtCheck, jwtParse, getCurrentUser);
myUserRoutes.post("/", jwtCheck, createCurrentUser);
myUserRoutes.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  updateCurrentUser
);

export default myUserRoutes;
