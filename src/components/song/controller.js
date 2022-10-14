import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSongs = async (req, res) => {
    try {
        const songs = await prisma.song.findMany();
        res.status(200).json(songs);
    } catch (error) {
        res.json({ message: "Error al obtener canciones", error });
    }
}

export const getSong = async (req, res) => {
    try {
        // nos traemos el params del req
        const { id } = req.params;
        const song = await prisma.song.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(song);
    } catch (error) {
        res.json({ message: "Error al obtener canción causa uu", error });
    }
}

export const createSong = async (req, res) => {

    try {
        const { name, artist, album, year, genre, duration } = req.body;
        const song = await prisma.song.create({
            data: {
                name,
                artist,
                album,
                year,
                genre,
                duration
            },
        });
        res.status(201).json(song);
    } catch (error) {
        res.status(400).json({ message: "Error al crear canción causa", error });
    }
}