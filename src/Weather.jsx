import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kanina");

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=89744e106db172f83cfdcd8b6756e3a9`
      );
      let res = await response.json();
      console.log("res:", res);
      setCity(res.main);
    };

    getData();
  }, [search]);

  return (
    <div className="mainDiv">
      <div className="div0">
        <input
          type="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Search"
        />
      </div>

      {!city ? (
        <h1>No data found</h1>
      ) : (

        <div className="div1">
        <h1>{search}</h1>
        <h4 className="temp">Temp: {city.temp}°C</h4>
        <h4 className="temp">Pressure: {city.pressure}</h4>
        <h4 className="temp">Humidity: {city.humidity}</h4>
      </div>

      )}
    </div>
  );
};

export default Weather;
