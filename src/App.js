import React, { useState, useEffect } from "react";
import "./App.css";
import AuthContext from "./auth-context";
import axios from "axios";
import Map from "./Map";
import Input from "./Input";
import Main from "./Main";

function App() {
  const [data, setData] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [location, setlocation] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [getUpdates, setGetUpdates] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState({ lat: "", lon: "" });

  useEffect(() => {
    if (data.length > 0) {
      const lat = data[0].lat;
      const lon = data[0].lon;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=50c7eef00d13b49fb4b8a0b1dbaceafb`;

      axios.get(weatherUrl).then((weatherResponse) => {
        const forecastData = weatherResponse.data.list.slice(0, 4); // Fetching 4 days of forecast
        setData(forecastData);
        setMapCoordinates({ lat, lon }); // Set the map coordinates
      });
    }
  }, [data]);

  const searchLocation = (event) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=50c7eef00d13b49fb4b8a0b1dbaceafb`;

    axios.get(url).then((response) => {
      setData(response.data);
      setSearchClicked(true);
    });
  };

  const locator = (event) => {
    setlocation(event.target.value);
  };

  const updateHandler = () => {
    setGetUpdates(true);
  };

  return (
    <AuthContext.Provider
      value={{
        locationName: data.length > 0 ? data[0].name : "",
        forecastData: data,
      }}
    >
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC:wght@700&family=Anton&family=Bangers&family=Barlow+Condensed:wght@100&family=Bungee+Spice&family=Climate+Crisis&family=Inspiration&family=Modak&family=Press+Start+2P&family=Shadows+Into+Light&family=Silkscreen&family=Smokum&family=Special+Elite&family=Vina+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <div className="search">
          <button className="cc">
            <a href="https://www.un.org/en/climatechange" target="_blank">
              🌎
            </a>
          </button>
          <span className="info-box">Know more about Climate Change</span>
          <Input val={location} onchange={locator} btn={searchLocation} />
          <div className="updater">
            <Main location={location} />
            <Map lat={mapCoordinates.lat} lon={mapCoordinates.lon} />
          </div>
          <footer>Made with ❤ for Nature&People</footer>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
