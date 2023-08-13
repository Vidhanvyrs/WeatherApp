import React from "react";
import "./Card.css";
import AuthContext from "./auth-context";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MainCard = ({ idx }) => (
  <AuthContext.Consumer>
    {(ctx) => (
      <>
        {ctx.forecastData
          .map((data, index) => {
            let message = "";
            // let imgSrc = "";
            // const date = new Date(data.dt * 1000); // Convert Unix timestamp to milliseconds
            const dayIndex = (idx + index) % 7; // Calculate day index based on idx and index
            const dayName = daysOfWeek[dayIndex]; // Get the day name from the array

            const temperatureCelsius =
              data.main && data.main.temp
                ? Math.round(data.main.temp - 273.15)
                : ""; // Check if temp property exists before accessing it
            let backgroundClass = " ";

            if (temperatureCelsius > 35) {
              message = "🌞";
              backgroundClass = "sunny";
              // imgSrc = "images/weather.jpg";
            } else if (temperatureCelsius > 10 && temperatureCelsius < 35) {
              message = "⛅";
              backgroundClass = "cloudy";
              // imgSrc = "images/weather2.jpg";
            } else {
              message = "❄";
              backgroundClass = "snowy";
              // imgSrc = "images/weather3.jpg";
            }

            return (
              <div className={`card ${backgroundClass}`} key={index}>
                <p>{dayName}</p> {/* Display the day name */}
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
          })
          .filter((_, index) => index === idx)}{" "}
        {/* Filter based on idx */}
      </>
    )}
  </AuthContext.Consumer>
);

export default MainCard;
