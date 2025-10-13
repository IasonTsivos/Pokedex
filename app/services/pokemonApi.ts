import { Pokemon, SimplePokemon, TypeResponse, PokemonType, POKEMON_TYPES } from '@/app/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

class PokemonApiService {
    private cache = new Map<string, any>();

    private async cachedFetch<T>(url: string): Promise<T> {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    this.cache.set(url, data);
    return data;
    }

    // Get pokemon by type
    async getPokemonByType(type: PokemonType, limit = 20, offset = 0): Promise<SimplePokemon[]>{
        const url = `${BASE_URL}/type/${type}`;
        const TypeResponse: TypeResponse = await this.cachedFetch(url);

        const pokemonUrls = TypeResponse.pokemon
            .slice(offset,offset + limit)
            .map(p => p.pokemon.url);

        const pokemonPromises = pokemonUrls.map(async (url) => {
            const pokemon: Pokemon = await this.cachedFetch(url);
            return this.transformPokemon(pokemon);
        });

        return Promise.all(pokemonPromises);
    }

    //Get the count of pokemon for a type
    async getPokemonCountByType(type: PokemonType): Promise<number>{
        const url = `${BASE_URL}/type/${type}`;
        const TypeResponse: TypeResponse = await this.cachedFetch(url);
        return  TypeResponse.pokemon.length;
    }

    //Get all pokemon of our supported types
    async getAllSupportedPokemon(): Promise<SimplePokemon[]> {
        const allPokemonPromises = POKEMON_TYPES.map(type => this.getPokemonByType(type));
        const allPokemonArrays = await Promise.all(allPokemonPromises);

        const allPokemon = allPokemonArrays.flat();
        const uniquePokemon = allPokemon.filter((pokemon, index, self) => 
            index === self.findIndex(p => p.id === pokemon.id));

        return uniquePokemon.sort((a, b) => a.id - b.id);
    }

    // Transform pokemon to our simplified version
    private transformPokemon(pokemon: Pokemon): SimplePokemon {
        // Get only supported types
        const types = pokemon.types
        .map(typeSlot => typeSlot.type.name)
        .filter( name => POKEMON_TYPES.includes(name as PokemonType)) as PokemonType[];
        // Get sprite image
        const sprite = pokemon.sprites.other?.['official-artwork']?.front_default || 
                   pokemon.sprites.front_default || 
                   '';
        // First Letter UpperCAse
        const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

        return {
            id: pokemon.id,
            name: capitalize(pokemon.name),
            types,
            sprite,
            stats: pokemon.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
            }))
            };
    }

    
}

export const pokemonApi = new PokemonApiService();