import React from 'react'
import "../../App.css"
import Card from "../../Components/Card"
import InputGroup from './InputGroup';

const Episodes = () => {
    let [id, setID] = React.useState(1);

    let api = `https://rickandmortyapi.com/api/episode/${id}`

    let [dataFetch, setDataFetch] = React.useState([])
    let [data, setData] = React.useState([])

    React.useEffect(()=>{
        (async function () {
            let datas = await fetch(api)
            .then(res => res.json())
            setDataFetch(datas)

            let a = await Promise.all(
                datas.characters.map(e=>{
                    return fetch(e)
                    .then(res=> res.json())
                })
            );
                setData(a)

        })()
    }, [api])
  return (

    
    <div>
      <div className='container'>
        <div className='row'>
            <h1 className='text-center mt-4'>Episode Name: <span className='text-primary'>{data.name === "" ? "Unknown" : dataFetch.name}</span></h1>
            <h4 className='text-center my-4'>Air Date: <span className='text-primary'>{dataFetch.air_date}</span></h4>

        </div>
        <div className='row'>
            <h3>Pick Episode: </h3>
            </div>
            <div className='row'>

            <div className='col-lg-3 col-12 mx-5'>
            <InputGroup name="Episode" total={51} setID={setID}/>
            </div>
                
            <div className='col-lg-8 col-12'>
                <div className='row'>
                    <Card page="/episode/" data={data} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes
