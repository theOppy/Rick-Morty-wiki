import React from 'react'
import Card from '../Card'
import "../../App.css"

import InputGroup from './InputGroup'

const Locations = () => {

  
  let[fetchData, setFetchData] = React.useState([])
  let [id, setID] = React.useState(1)
  let [data, setData] = React.useState([])
  let api = `https://rickandmortyapi.com/api/location/${id}`

  React.useEffect(()=>{
    (async function () {
     let data = await fetch(api)
      .then(res=>res.json())
      setFetchData(data)

      let a = await Promise.all(
        data.residents.map(e=>{
          return fetch(e)
          .then(res=>res.json())
        })
        )
        setData(a)
    })()

  },[api])

  console.log(fetchData)
  return (
    <div>
      <div className='container'>
        <div className='row'>
        <h1 className='text-center mt-4'>Location: <span className='text-primary'>{fetchData.name}</span></h1>
        <h3 className='text-center mt-4'>Type: <span className='text-primary'>{fetchData.type}</span></h3>


        </div>
        <div className='row'>
        <h3>Pick Location</h3>

        </div>

        <div className='row'>
          <div className='col-lg-3 col-12 mx-5'>
            <InputGroup name="Location" total={126} setID={setID}/>
          </div>
          <div className='col-lg-8 col-12 d-flex justify-content-center'>
            <div className='row'>
              <Card page="/location/" data={data}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Locations
