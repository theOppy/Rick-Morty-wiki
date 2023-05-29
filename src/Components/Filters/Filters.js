import React from 'react'
import Gender from './Gender'
import Species from './Species'
import Status from './Status'

const Filters = ({setStatus, setPageNumber, setSpecies, species, setGender}) => {


  return (
    <div>
      <div className='justify-content-center fs-3 fw-bold my-3'>Filters</div>

      <div style={{cursor: 'pointer'}} className={`justify-content-center text-decoration-underline fs-5 text-primary`} onClick={()=>{
         setGender("")
         setSpecies("")
         setStatus("")
      }}>Clear Filters</div>

<div className='my-5'>

      <div className="accordion justify-content-center mt-4 mr-4" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} species={species}/>
        <Gender setGender={setGender} />
</div>
  
</div>
    </div>
  )
}

export default Filters
