import { Request, Response } from "express";
import File from "../classes/File";

export default class CourseController {
  public async push(req: Request, res: Response): Promise<void> {
    const {nome} = req.params;
    const nomes = await File.append(course);
    nomes.push(nome);
    await File.append(nomes.join("\r\n"));
    res.send(nomes);
  }

  public async pop(_: Request, res: Response): Promise<void> {
    const nomes = await Arquivo.ler();
    const nome = nomes.pop();
    if (!nome) {
      res.send("Pilha vazia");
      return;
    }
    await Arquivo.escrever(nomes.join("\r\n"));
    res.send(nome);
  }
}
