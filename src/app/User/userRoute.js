import express from "express"
import app from "../../../config/express";
import { getUsers } from "./userController";

const userRouter = express.Router();
userRouter.route('/').get(getUsers);

export default userRouter;
