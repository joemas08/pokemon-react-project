import { ChangeEvent, useState } from 'react'

import './App.css'

function App() {
  const [searchPokemon, setSearchPokemon] = useState<string>('')

  return (
    <div className='form'>
      <div className='searchInput'>
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>): void =>
            setSearchPokemon(event.target.value)
          }
        />
        <button onClick={() => console.log(searchPokemon)}> Submit </button>
      </div>
      <div className='attributeList'>
        <label htmlFor='Name'>Name:</label>
        <input type='text' id='Name' />
      </div>
    </div>
  )
}

export default App
