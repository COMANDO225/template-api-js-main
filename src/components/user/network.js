import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

userRouter.get("/users", Controller.getUsuarios);
userRouter.post("/users", Controller.registrarUsuario);
userRouter.post("/users/login", Controller.loginUsuario);

export default userRouter;