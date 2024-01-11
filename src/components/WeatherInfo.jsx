import React from 'react'

import { UilArrowUp, UilArrowDown, UilTemperature, 
    UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";

import { getWeatherIcon } from '../data/weatherdata';


const moment = require('moment');

function WeatherInfo({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone, dt} }) {

 
    
    const info = { timeStyle: 'short', hour12: true };
   

    // console.log(timezone, dt, sunrise, sunriseTime, sunriseTime.toTimeString('en-US', info))

    // console.log(moment.utc(sunrise, 'X').add(timezone, 'seconds').format('HH:mm a'))

    const sunriseTime = moment.utc(sunrise, 'X').add(timezone, 'seconds').format('h:mm a')
    const sunsetTime = moment.utc(sunset, 'X').add(timezone, 'seconds').format('h:mm a')


  return (
    <div className= 'pb-5'>
        
        {/* current weather image */}
        <div className='flex items-start justify-center text-xl text-white '>
            <img src={getWeatherIcon(icon)} alt="icon" className='w-36 ' />

        </div>

        {/* temp Feels like high and low */}
        <div className='flex flex-col  items-center justify-center   text-white'>
            <p className='text-8xl font-medium'>{temp.toFixed()}°</p>
            <p className='font-medium text-xl'>{details}</p>

            <div className='flex flex-row text-xl pt-3'> 
                <UilTemperature size={26}/> Feels Like: <span className='ml-1'>{feels_like.toFixed()}°</span>
            </div>

            <div className='font-light flex flex-row'>
                
            <UilArrowUp size={23}/> High: <span className='ml-1'>{temp_max.toFixed()}°</span>
           <UilArrowDown size={23}/> Low: <span className='ml-1'>{temp_min.toFixed()}°</span>
            </div>

           

        </div>
 
        {/* extra info: Humidity, wind, sunrise, sunset */}

        <div className='flex lg:flex-row max-sm:flex-col flex-l items-center justify-center space-x-1 text-sm py-3   text-white '>
            
            <UilTear size={17} /><p className='font-light'>Humidity:</p>  <span className=''>{humidity}%</span>

            <p className='font-light max-md:invisible'>|</p>

            <UilWind size={17}  /> <p> Wind: </p> <span className=''>{speed.toFixed()} km/h</span>

            <p className='font-light max-md:invisible'>|</p>

            <UilSun size={17} className=""/> <p className='font-light'>Rise:</p> <span className=''>{sunriseTime}</span>

            <p className='font-light max-md:invisible'>|</p>

            <UilSunset size={17} className=""/> <p className='font-light'>Set:</p>  <span className=''>{sunsetTime}</span>


        </div>



    </div>
  )
}

export default WeatherInfo