import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import pokemonRoutes from "./routes/pokemons.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(pokemonRoutes);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
