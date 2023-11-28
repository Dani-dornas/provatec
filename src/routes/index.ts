import { Router, Request, Response } from "express";
import uf from "./uf";

const routes = Router();

routes.use("/uf", uf);

routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;
