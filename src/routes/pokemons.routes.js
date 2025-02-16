import { Router } from "express";
import {
  createPokemon,
  getPokemons,
  getPokemonsById,
  updatePokemon,
  deletePokemon,
} from "../controller/pokemons.controller.js";

const router = Router();

router.get("/pokemons", getPokemons);

router.get("/pokemons/:id", getPokemonsById);

router.post("/pokemons", createPokemon);

router.put("/pokemons/:id", updatePokemon);

router.delete("/pokemons/:id", deletePokemon);

export default router;
