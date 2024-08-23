import React, { useState } from 'react'
import { BiSearchAlt2,  BiCurrentLocation } from "react-icons/bi";

const Inputs = ( {setQuery, setUnits} ) => {

  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city});
  };

  //geolocalización
  const handleLocationClick = ()=> {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        const { latitud, longitud } = position.coords
        setQuery( {lat: latitud, lon: longitud} )
      })
    }
  }

  return (
    <div className='flex flex-col md:flex-row items-center  justify-center my-6 '>

        <div className="flex flex-row w-3/4 justify-center items-center space-x-1">
            <input 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text" 
            placeholder='Busca tu ciudad...'
            className='text-gray-500 text-xl rounded-2xl font-light p-2 capitalize focus:outline-none ' />

           <BiSearchAlt2 size={30} className='cursor-pointer transition ease-out hover:scale-125'
            onClick={handleSearchClick} />

           

           {/*  <BiCurrentLocation size={30}  className='cursor-pointer transition ease-out hover:scale-75'
            onClick={handleLocationClick}  /> */}
        </div>

       <div className='flex flex-row mt-3 '>
       <div>
            <button className='text-2xl font-medium transition ease-out hover:scale-125'
            onClick={() => setUnits('metric')}
            >°C</button>
        </div>

        <p className='text-3xl font-medium mx-1'>|</p>

        <div>
            <button className='text-2xl font-medium transition ease-out hover:scale-125'
            onClick={() => setUnits('imperial')}
            >°F</button>
        </div>
       </div>

    </div>
  )
}

export default Inputs