import React from "react";
import "./Card.css";
import AuthContext from "./auth-context";

const MainCard = () => (
  <AuthContext.Consumer>
    {(ctx) => (
      <>
        {ctx.forecastData.map((data, index) => {
          let message = "";
          // let imgSrc = "";

          const temperatureCelsius =
            data.main && data.main.temp
              ? Math.round(data.main.temp - 273.15)
              : ""; // Check if temp property exists before accessing it

          if (temperatureCelsius > 35) {
            message = "🌞";
            // imgSrc = "images/weather.jpg";
          } else if (temperatureCelsius > 10 && temperatureCelsius < 35) {
            message = "⛅";
            // imgSrc = "images/weather2.jpg";
          } else {
            message = "❄";
            // imgSrc = "images/weather3.jpg";
          }

          return (
            <div className="card" key={index}>
              <p>
                {temperatureCelsius
                  ? `🌡️ ${temperatureCelsius}°C ${message}`
                  : "Temperature data not available"}
              </p>
              <p>
                💧{" "}
                {data.main && data.main.humidity
                  ? data.main.humidity
                  : "Humidity data not available"}
              </p>
              <p>
                🌬️{" "}
                {data.wind && data.wind.speed
                  ? data.wind.speed
                  : "Wind speed data not available"}
              </p>
              <p>
                {data.weather && data.weather.length > 0
                  ? data.weather[0].description
                  : "Weather data not available"}
              </p>
            </div>
          );
        })}
      </>
    )}
  </AuthContext.Consumer>
);

export default MainCard;
