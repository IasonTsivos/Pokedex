// Pokemon Type definitions
export type PokemonType = 
  | 'fire' 
  | 'water' 
  | 'grass' 
  | 'electric' 
  | 'dragon' 
  | 'psychic' 
  | 'ghost' 
  | 'dark' 
  | 'steel' 
  | 'fairy';

export const POKEMON_TYPES: PokemonType[] = [
  'fire',
  'water', 
  'grass',
  'electric',
  'dragon',
  'psychic',
  'ghost',
  'dark',
  'steel',
  'fairy'
];

// Type colors for UI theme
export const TYPE_COLORS: Record<PokemonType, string> = {
  fire: '#FF6D6D',
  water: '#6DB7FF', 
  grass: '#78C850',
  electric: '#FFD86F',
  dragon: '#7038F8',
  psychic: '#F85888',
  ghost: '#705898',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};

// API Response interfaces
export interface PokemonSprite {
  front_default: string | null;
  other: {
    'official-artwork': {
      front_default: string | null;
    };
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonTypeSlot {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}


// Main Pokemon interface from PokéAPI
export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprite;
  stats: PokemonStat[];
  types: PokemonTypeSlot[];
}

// Simplified Pokemon interface for UI
export interface SimplePokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprite: string;
  stats: {
    name: string;
    value: number;
  }[];
}

// API list response
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

// Type-specific list response
export interface TypeResponse {
  id: number;
  name: string;
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
    slot: number;
  }[];
}