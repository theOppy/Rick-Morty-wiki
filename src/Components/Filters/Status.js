import React from 'react'

const Status = ({setStatus, setPageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"]
  return (
    <div>
      
      <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Status
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
            {status.map((e)=>{
                return <button className='btn btn-primary mx-3 my-2' value={e} onClick={(e)=>{
                    setStatus(e.target.value)
                    setPageNumber(1)
                }}>{e}</button>
            })}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Status
