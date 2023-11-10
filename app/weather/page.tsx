"use client";

import React, { useState } from "react";
import Header from "./components/header";
import { WeatherType } from "../../types";

const Weather = () => {
  const [data, setData] = useState<WeatherType | null>(null);
  const [celsius, setCelsius] = useState(true);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const res = await fetch(`weather/api/forcast/${location}`);
        if (!res.ok) {
          throw new Error("Location not found");
        }
        const data = await res.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (err) {
        setError("Location not found");
        setData(null);
      }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center p-6">
      <Header
        handleSearch={handleSearch}
        setLocation={setLocation}
        setCelsius={setCelsius}
        celsius={celsius}
      />
      {data?.current ? (
        celsius ? (
          <div>{data.current.temp_c}</div>
        ) : (
          <div>{data.current.temp_f}</div>
        )
      ) : null}
    </div>
  );
};

export default Weather;
