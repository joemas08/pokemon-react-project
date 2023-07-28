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
        <label htmlFor='Type'>Gen.</label>
        <br />
        <input
          type='text'
          id='generation'
          readOnly={true}
          placeholder={props.generation}
        />
      </div>
      <div className='attribute'>
        <label htmlFor='ID'>ID</label>
        <br />
        <input type='text' id='ID' readOnly={true} placeholder={props.id} />
      </div>
      <div className='attribute'>
        <label htmlFor='Name'>Name</label>
        <br />
        <input type='text' id='Name' readOnly={true} placeholder={props.name} />
      </div>
      <div className='attribute'>
        <label htmlFor='Type'>Type</label>
        <br />
        <input type='text' id='Type' readOnly={true} placeholder={props.type} />
      </div>
      <p>{props.description}</p>
    </div>
  )
}
