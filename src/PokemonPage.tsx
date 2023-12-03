import { ChangeEvent, useState, useEffect } from 'react'
import { AttribueList } from './AttributeList'
import Axios from 'axios'

import './PokemonPage.css'

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<string>('')
  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonID, setPokemonID] = useState<string>('')
  const [pokemonDescription, setPokemonDescription] = useState<string>('')
  const [pokemonGeneration, setPokemonGeneration] = useState<string>('')
  const [pokemonType, setPokemonType] = useState<string>('')
  const [pokemonImage, setPokemonImage] = useState<string>('')
  const [pokemonColor, setPokemonColor] = useState<string>('')

  const sendPokemonRequest = async (pokemon: string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    await Axios.get(url).then((pokemon) => {
      setPokemonName(pokemon.data.name)
      setPokemonID(pokemon.data.id)
      setPokemonType(pokemon.data.types[0].type.name)
      setPokemonImage(pokemon.data.sprites.front_default)
    })

    const generationURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    await Axios.get(generationURL).then((pokemon) => {
      setPokemonGeneration(pokemon.data.generation.name)
    })

    const descriptionURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    await Axios.get(descriptionURL).then((pokemon) => {
      setPokemonDescription(pokemon.data.flavor_text_entries[2].flavor_text)
      setPokemonColor(pokemon.data.color.name)
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPokemon(event.target.value)
  }

  const handleButtonClick = () => {
    sendPokemonRequest(pokemon.toLowerCase())
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter') {
      sendPokemonRequest(pokemon.toLowerCase())
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty('background-color', pokemonColor)
  }, [pokemonColor])

  return (
    <>
      <div className='form'>
        <div className='searchInput'>
          <input
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='Pokemon Name or ID...'
          />
          <button onClick={handleButtonClick}>Search</button>
        </div>
        <AttribueList
          name={pokemonName}
          id={pokemonID}
          type={pokemonType}
          generation={pokemonGeneration}
          description={pokemonDescription}
          image={pokemonImage}
        />
      </div>
    </>
  )
}
