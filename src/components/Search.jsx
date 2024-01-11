import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons"


function Search({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const doSearch = () => {

    if (city !== '') setQuery({c: city})
  }

  const changeUnits = (event) => {
    const curUnit = event.currentTarget.name;
    
    if (units.u !== curUnit) setUnits({ u: curUnit });

  }

  const currentLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat, lon,});
      
    });
  }
};

  return (
    <div className='flex flex-row justify-center my-6 gap-3'>

        <div className=' flex flex-row w-3/4 items-center justify-center space-x-4'>

            <input type="text" placeholder='Enter City' name='searchInput' value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded' />

           
        </div>

            <UilSearch onClick={doSearch} size={25} className='my-2 justify-center w-10 text-white transition ease-out hover:scale-125'/>
            <UilLocationPoint onClick={currentLocation} size={25} className='my-2 w-10 text-white transition ease-out hover:scale-125'/>


  

        <div className='pl-10 flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' 
            className='text-xl text-white bg-blue-500 hover:bg-blue-900 font-bold pl-3 py-2 px-4 rounded-l transition ease-out'
            onClick={changeUnits}>°C</button>

            <button name='imperial' 
            className='text-xl text-white bg-blue-500 hover:bg-blue-900 font-bold py-2 px-4 rounded-r border-l-2 transition ease-out'
            onClick={changeUnits}>°F</button>
        </div>

    
        <div>

    </div>
    
    </div>
    
  )
}

export default Search