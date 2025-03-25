import { Pokemon } from "@/components/pokemons";
import { Metadata } from "next";

interface IPokemonPage {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: IPokemonPage): Promise<Metadata> {
  const { id } = await Promise.resolve(params);

  const { id: pokemonId, name } = await getPokemon(id);

  return {
    title: `#${pokemonId} - ${name}`,
    description: `Página del pokémon ${name}`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((resp) => resp.json());

  console.log("se cargo: ", pokemon.name);

  return pokemon;
};

export default async function PokemonPage({ params }: IPokemonPage) {
  const { id } = await Promise.resolve(params);

  const { name } = await getPokemon(id);

  return (
    <div>
      <h1>Pokemon {id}</h1>
      <div>{JSON.stringify(name)}</div>
    </div>
  );
}
