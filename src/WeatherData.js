import { useState } from "react";

const WeatherData = ({ data, forecast }) => {

    // weather and forecast data as pulled from the API
   
    return (
        <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp_picture">
            { data.weather ? <img src= {`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` } alt="Current depiction of the weather" /> : null}
          </div>
          <div className="temperature">
            { data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null }
          </div>
          <div className="description">
            { data.weather ? <p>{data.weather[0].main}</p> : null }
          </div>
          <div className="temphigh_low">
            { data.main ? <p>{data.main.temp_max.toFixed()}°/</p> : null }
            { data.main ? <p className="templow">{data.main.temp_min.toFixed()}°</p> : null }
          </div>
          <div className="weather_data">
            <div className="wind_speed">
              <p>Wind Speed</p>
              {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null }
            </div>
            <div className="feels_like">
              <p>Feels like</p>
              { data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null }
            </div>
            <div className="humidity">
              <p>Humidity</p>
              { data.main ? <p>{data.main.humidity}%</p> : null }
            </div>
            <div className="pressure">
              <p>Pressure</p>
              { data.main ? <p>{data.main.pressure} mbar</p> : null }
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[0].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[0].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[1].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[1].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[2].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[2].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[3].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[3].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[4].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[4].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[5].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[5].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[5].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[6].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[6].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[6].main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="forecastInfo">
            { forecast.list ? <p>{forecast.list[7].dt_txt.toLocaleString()}</p> : null }
            { forecast.list ? <img src= {`https://openweathermap.org/img/wn/${forecast.list[7].weather[0].icon}@2x.png`} alt="Forecasted depiction of the weather" /> : null}
            { forecast.list ? <p>{ forecast.list[7].main.temp.toFixed()}°F</p> : null}
          </div>
        </div>
      </div>
    );
}

export default WeatherData;