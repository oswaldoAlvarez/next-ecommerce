"use client";

import { useGetAllPokemons } from "@/hooks";
import { PokemonCard } from "./components/PokemonCard.component";

export const PokemonGrid = () => {
  const { pokemons, loading } = useGetAllPokemons(200);

  if (loading)
    return (
      <div className="flex justify-center h-screen items-center text-2xl font-bold">
        Cargando...
      </div>
    );

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small>estático</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
    </div>
  );
};
