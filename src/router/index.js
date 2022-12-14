import { UserRouter, SongRouter, PlayListRouter } from "../components";
// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [
  ["/api/v1", UserRouter],
  ["/api/v1", SongRouter],
  ["/api/v1", PlayListRouter],
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
