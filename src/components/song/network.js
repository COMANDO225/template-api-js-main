import { Router } from "express";
import * as Controller from "./controller";

const songRouter = Router();

songRouter.get("/songs", Controller.getSongs);
songRouter.post("/songs/:id", Controller.getSong);

export default songRouter;