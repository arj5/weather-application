import React from 'react'

function Buttons({setQuery}) {
    
    const cities = [
        {id: 1, city: "Toronto"},
        {id: 2, city: "New York"},
        {id: 3, city: "London"},
    ]

  return (
    <div>
        
        <div className=' flex gap-20 items-center justify-between my-6 '>
            {cities.map((c) => (

                <button key={c.id} className='text-white font-medium text-lg transition ease-out hover:scale-125'
                onClick={()=> setQuery({ c: c.city })}>{c.city}</button>

            ))}
        </div>

    </div>
  )
}

export default Buttons