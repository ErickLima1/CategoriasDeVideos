import "reflect-metadata";
import express, { Router } from "express";
import { config as dotenvConfig } from "dotenv";
import { routes } from "./router";

// Carregar as variáveis de ambiente do arquivo .env antes de importar "./database"
dotenvConfig();

import "./database";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Servidor Esta Rodando Na Porta ${PORT}`);
});
