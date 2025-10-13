// Pokemon type definitions

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

// Colors for each type for UI theme
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

//Api response interfaces
export interface PokemonSprite {
    front_default: string | null;
    other: {
        'official-artwork': {
            front_default: string | null;
        };
    };
}

