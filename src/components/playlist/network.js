import { Router } from "express";
import * as Controller from "./controller";

const playListRouter = Router();

playListRouter.get("/playlists", Controller.getPlayLists);
playListRouter.get("/playlists/:userId", Controller.getPlayListUser);
playListRouter.post("/playlists/:userId/:songId", Controller.createPlayList);

export default playListRouter;