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

    
}