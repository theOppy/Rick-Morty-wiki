import React from 'react'

const Species = ({setSpecies}) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet"

  ]
  return (
    <div>
      <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {species.map(e=>{
          return <button value={e} onClick={(e)=>{
            setSpecies(e.target.value)
          }} className='btn btn-primary mx-3 my-2'>{e}</button>
        })}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Species
