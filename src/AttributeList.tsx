interface Pokemon {
  name: string
  id: string
  type: string
  generation: string
  description: string
  image: string
}

export const AttribueList = (props: Pokemon) => {
  return (
    <div className='attributeList'>
      <img src={props.image}></img>
      <div className='attribute'>
        <input
          type='text'
          id='generation'
          readOnly={true}
          placeholder={props.generation}
        />
        <label htmlFor='Type'>Gen.</label>
      </div>
      <div className='attribute'>
        <input type='text' id='ID' readOnly={true} placeholder={props.id} />
        <label htmlFor='ID'>ID</label>
      </div>
      <div className='attribute'>
        <input type='text' id='Name' readOnly={true} placeholder={props.name} />
        <label htmlFor='Name'>Name</label>
      </div>
      <div className='attribute'>
        <input type='text' id='Type' readOnly={true} placeholder={props.type} />
        <label htmlFor='Type'>Type</label>
      </div>
      <p>{props.description}</p>
    </div>
  )
}
