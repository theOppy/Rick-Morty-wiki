import React from 'react'

const Gender = ({setGender}) => {
  let gender = ["female", "male", "genderless", "unknown"]
  return (
    <div>
       <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {gender.map(e=>{
          return <button className='btn btn-primary my-2 mx-3' value={e} onClick={(e)=>{
            setGender(e.target.value)
          }}>{e}</button>
        })}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Gender
