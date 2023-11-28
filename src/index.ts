import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Course } from "./classes";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
const corsOptions = {
  methods: "GET",
};
app.use(cors(corsOptions));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.get("/course/:name/:credit", function(req:Request,res:Response){
  const {name,credit} = req.params;
  const course = new Course(name,parseInt(credit));
  console.log(course);
  res.send(course);
});
