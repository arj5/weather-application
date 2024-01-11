import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttons from './components/Buttons'
import Search from './components/Search'
import TimeLocation from './components/TimeLocation'
import WeatherInfo from './components/WeatherInfo';
import searching from './data/weatherdata';

import { useEffect, useState } from "react";



function App() {
  const [query, setQuery] = useState({ c: "toronto" });
  const [units, setUnits] = useState({ u: "metric"});
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {


      await searching({ ...query, ...units }).then((data) => {
       
        setWeather(data);
 
    
  
      });
    };

    fetchWeather();
  }, [query, units]);



  return (
    <div className=" text-center flex justify-center border-r-4 ">
        <div className="max-w-screen-md m-4 py-5 px-32 
        bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-500 via-blue-500 
        h-fit shadow-xl shadow-gray-400">
        <Buttons setQuery={setQuery}/>
        <Search setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
          <div>

          <TimeLocation weather={weather}/>
          <WeatherInfo weather={weather}/>

  
          </div>
        )} 


      </div>
    </div>
      
    

  );
}





export default App

