import { useState, useEffect } from "react";
import { PokemonsResponse } from "@/components/pokemons";

export const useGetAllPokemons = (limit: number = 20, offset: number = 0) => {
  const [pokemons, setPokemons] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const data: PokemonsResponse = await response.json();

        const pokemonsList = data.results.map((pokemon) => ({
          id: pokemon.url.split("/").at(-2)!,
          name: pokemon.name,
        }));

        setPokemons(pokemonsList);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [limit, offset]);

  return { pokemons, loading };
};
