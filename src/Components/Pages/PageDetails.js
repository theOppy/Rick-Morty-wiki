import React from 'react'
import { useParams } from 'react-router-dom'

const PageDetails = () => {

    let {id} = useParams()
    let [dataFetch, setFetchData] = React.useState([]) 
    let api = `https://rickandmortyapi.com/api/character/${id}`

    React.useEffect(()=>{
        (async function (){
           let data = await fetch(api)
            .then(res=>res.json())
            setFetchData(data)
        })()
        
    },[api])
    console.log(dataFetch)
  return (
    <div >

      <div className='text-center my-5 '>
              <div className="fs-3 fw-bold">{dataFetch.name}</div>
            <div className="content">
            <img src={dataFetch.image} alt="wiki" className="img-fluid  mb-4 mt-2" />
              <div className="">
                <h6>Gender: {dataFetch.gender}</h6>
                <h6>Sp6cies: {dataFetch.species}</h6>
                <h6>Origin: {dataFetch.origin?.name}</h6>
                <h6>Location: {dataFetch.location?.name}</h6>

    <p>too lazy to style this character page.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PageDetails
