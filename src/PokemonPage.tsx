import { ChangeEvent, useState } from 'react'
import { AttribueList } from './AttributeList'
import Axios from 'axios'

import './PokemonPage.css'

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<string>('')
  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonID, setPokemonID] = useState<string>('')
  const [pokemonDescription, setPokemonDescription] = useState<string>('')
  const [pokemonType, setPokemonType] = useState<string>('')
  const [pokemonImage, setPokemonImage] = useState<string>('')
  const [pokemonColor, setPokemonColor] = useState<string>('')

  const sendPokemonRequest = (pokemon: string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    Axios.get(url).then((pokemon) => {
      setPokemonName(pokemon.data.name)
      setPokemonID(pokemon.data.id)
      setPokemonType(pokemon.data.types[0].type.name)
      setPokemonImage(pokemon.data.sprites.front_default)
    })
    const descriptionURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    Axios.get(descriptionURL).then((pokemon) => {
      console.log(pokemon)
      setPokemonDescription(pokemon.data.flavor_text_entries[2].flavor_text)
      setPokemonColor(pokemon.data.color.name)
    })
    document.documentElement.style.setProperty('background-color', pokemonColor)
  }
  return (
    <>
      <div className='form'>
        <div className='searchInput'>
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>): void =>
              setPokemon(event.target.value)
            }
            placeholder='Pokemon Name or ID...'
          />
          <button onClick={() => sendPokemonRequest(pokemon)}> Search </button>
        </div>
        <AttribueList
          name={pokemonName}
          id={pokemonID}
          type={pokemonType}
          description={pokemonDescription}
          image={pokemonImage}
        />
      </div>
    </>
  )
}
