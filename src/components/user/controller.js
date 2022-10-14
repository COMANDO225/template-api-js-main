import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getUsuarios = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.json({ message: "Error al obtener usuarios", error });
    }
}

export const registrarUsuario = async (req, res) => {
    const { name, email, password } = req.body;
    // validamos que el correo no exista p manito
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (user) return res.status(400).json({ message: "El usuario ya existe" });
    // si no existe, lo creamos masna
    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        res.status(201).json({ message: "Usuario registrado correctamente causa" });
    } catch (error) {
        res.status(400).json({ message: "Error al registrar usuario", error });
    }
}

export const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) return res.status(400).json({ message: "El usuario no existe, como el amor de ella" });
        if (user.password !== password)
            return res.status(400).json({ message: "Contraseña incorrecta :(" });

        res.status(200).json({ message: `Bienvenido manito ${user.name}` });

    } catch (error) {
        res.status(400).json({ message: "Error al iniciar sesión uu", error });
    }
}