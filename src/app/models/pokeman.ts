export interface AllPokeman {
  pokemon: Pokemon[];
}

export interface Pokemon {
  name: String;
  number: String,
  description: String,
  image: String,
  sprites: Sprites;
}

export interface Sprites {
  back_default: String
  back_shiny: String,
  front_default: String,
  front_shiny: String
}
