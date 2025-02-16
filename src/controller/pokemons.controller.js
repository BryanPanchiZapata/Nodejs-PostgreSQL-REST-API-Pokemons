import { pool } from "../db.js";

export const getPokemons = async (req, res) => {
  const { rows } = await pool.query("select * from pokemons");
  return res.json(rows);
};

export const getPokemonsById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("select * from pokemons where id=$1", [id]);
  if (rows.length === 0) {
    return res.status(404).json({ message: "Pokemon not found" });
  }
  return res.json(rows[0]);
};

export const createPokemon = async (req, res) => {
  try {
    const data = req.body;
    const { rows } = await pool.query(
      "insert into pokemons(nombre, tipo, poder) values($1, $2, $3) returning *",
      [data.nombre, data.tipo, data.poder]
    );
    return res.json(rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Pokemon already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePokemon = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "update pokemons set nombre=$1, tipo=$2, poder=$3 where id=$4 returning *",
    [data.nombre, data.tipo, data.poder, id]
  );
  return res.json(rows[0]);
};

export const deletePokemon = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query(
    "delete from pokemons where id=$1 returning *",
    [id]
  );
  if (rowCount === 0) {
    return res.status(404).json({ message: "Pokemon not found" });
  }
  return res.sendStatus(204);
};
