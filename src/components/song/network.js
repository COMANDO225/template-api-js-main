import { Router } from "express";
import * as Controller from "./controller";

const songRouter = Router();

songRouter.get("/songs", Controller.getSongs);
songRouter.get("/songs/:id", Controller.getSong);
songRouter.post("/songs", Controller.createSong);

export default songRouter;