import { Router, Request, Response } from "express";
import UfController from "../controllers/UfController";

const routes = Router();

routes.get("/couse/:name", CourseController.listByUf);
routes.get("/ibge/:ibge", UfController.listByIbge);

routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;
