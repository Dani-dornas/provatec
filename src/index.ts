import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
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

// define a rota para o pacote /routes
app.use(routes);
