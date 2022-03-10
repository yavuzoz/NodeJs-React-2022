//usestate, useeffect ve async-await kullandim. openweather apisinden veri cektim. ancak programda bir aksaklik var cözemedim. program lokal ismini girdikten cok sonra calisiyordu ama onuda cözdüm. useeffecte [location] state'ni ekleyerek cözdüm. böylelikle useeffectin ne zaman devreye girecegni belirlemis oldum.  program sorunsuz calisiyor!

import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    getWeatherList();
  }, [location]);

  const getWeatherList = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
