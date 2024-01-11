import React from 'react'


const moment = require('moment');

function TimeLocation({ weather: { name, country, timezone, dt }  }) {

  // javascript Date()

  // const d = new Date()
  // const time=d.getTime()
  // const offset= d.getTimezoneOffset() * 60000
  // const utc = time + offset
  // const city = utc + (1000 * timezone)
  // const loc_time = new Date(city)
  // const info = { weekday: "long", year: "numeric", month: "long", day: "numeric"};
  // {loc_time.toLocaleDateString("en",info)} | {loc_time.toLocaleTimeString()}

  // using moment.js 

  let t = moment.utc(dt,'X').add(timezone,'seconds').format('dddd, MMMM Do YYYY | h:mm:ss a');


  return (
    <div>

        <div className='flex flex-col items-center justify-center my-6'>

            <p className='text-white font-extralight text-xl '>{t}</p>
            <p name="location" className='text-white font-medium text-3xl '>{name}, {country}</p>

        

        </div>


    </div>
  )
}

export default TimeLocation