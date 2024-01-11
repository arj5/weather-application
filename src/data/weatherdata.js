


const searching = async (info) =>{


    // console.log(info.lon, info.lat, info.c, info.u);
    let url = ``;
    if (info.c){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${info.c}&units=${info.u}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

    }
    else{
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${info.lat}&lon=${info.lon}&units=${info.u}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

    }


    // console.log(url)
  
    let units = info.u;
    let res = await fetch(url);
    let data = await res.json();
    
    const {
        coord: {lat, lon}, 
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        timezone,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, timezone, country, sunrise, sunset, details, icon, speed, units }

};

    
const getWeatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;



export { getWeatherIcon };

export default searching;
