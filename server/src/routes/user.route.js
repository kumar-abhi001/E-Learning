import { Router } from "express";

const userRouter = Router();

userRouter.route('/register').get(userRegister);