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

    // GETTER FOR SINGLE pokemon from name or ID
    async getPokemon(nameOrId: string | number): Promise<SimplePokemon> {
        const url = `${BASE_URL}/pokemon/${nameOrId}`;
        const pokemon: Pokemon = await this.cachedFetch(url);

        return this.transformPokemon(pokemon);
    }
}

