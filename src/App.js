import React, { useState } from "react";
import WeatherData from "./WeatherData";
import SearchBar from "./SearchBar";
import axios from 'axios';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState({})
  const [isClicked, setisClicked] = useState(false)

  const geocoder = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_API_KEY}`

  // function that takes user input and converts it to latitude and longitude coordinates in order to retrieve weather data from API

  async function searchWeather() {
    setisClicked(true)
    try {
      const geoData = await axios.get(geocoder)

        const lat = geoData.data[0].lat
        const lon = geoData.data[0].lon

   // gets the current weather with other pertinent details 

      await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    console.log({location})

   // gets a weather forecast of 3 hour intervals

      await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setForecast(response.data)
        console.log(response.data)
      })
    } catch {
      console.error()
      alert('There was a problem returning weather info. Please format your search in this way: City, State (US only), Country');
    }
  }

  // function to handle keypresses in the searchbar

  function handleChange(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="App">
      <SearchBar location={location} setLocation={setLocation} onChange={handleChange} onClick={searchWeather}/>
      {isClicked && <WeatherData location={location} data={data} forecast={forecast}/>}
    </div>
  );
}

export default App;
