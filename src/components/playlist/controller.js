import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPlayLists = async (req, res) => {
    // ver todas las playslits
    const playlists = await prisma.playlist.findMany();
    res.json(playlists);
}

export const getPlayListUser = async (req, res) => {
    const { userId } = req.params;
    const playLists = await prisma.playlist.findMany({
        where: {
        userId: parseInt(userId),
        },
    });
    res.json(playLists);
}

export const createPlayList = async (req, res) => {
    const { userId, songId } = req.params;
    const { name } = req.body;
    const playlist = await prisma.playlist.create({
        data: {
            name,
            userId: parseInt(userId),
            songId: parseInt(songId),
        },
    });
    res.json(playlist);
}