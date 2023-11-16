"use client";

import React, { useState } from "react";

import { WeatherType } from "../../types";
import Current from "./components/Current";
import ForecastDetails from "./components/ForecastDetails";
import WeekForecast from "./components/WeekForecast";
import InputSearch from "./components/InputSearch";
import day from "../../public/images/day.jpg";
import night from "../../public/images/night.jpg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./components/Hero";

const Weather = () => {
  const [data, setData] = useState<WeatherType | null>(null);
  const [celsius, setCelsius] = useState(true);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

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
        setError("Enter a Valid City");
        setData(null);
      }
    }
  };

  let content;
  if (!data && error === "") {
    content = <Hero />;
  } else if (error !== "") {
    content = (
      <div>
        <h1>City Not Found</h1>
        <h2>{error}</h2>
      </div>
    );
  } else {
    content = (
      <div className="grid grid-rows-3 grid-flow-col w-full lg:max-h-[80vh] lg:h-[80vh] pr-8">
        <div
          className="row-span-2 col-span-2 bg-day bg-cover mb-6 rounded-2xl"
          style={{
            backgroundImage: `url(${
              data?.current.is_day === 0 ? night.src : day.src
            })`,
            backgroundSize: "cover",
          }}
        >
          {data && <Current data={data} celsius={celsius} />}
        </div>
        <div className="col-span-2">
          {data && <ForecastDetails data={data} celsius={celsius} />}
        </div>
        <div className="row-span-3 pl-8 ">
          {data && <WeekForecast data={data} celsius={celsius} />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen items-center p-6">
      <InputSearch
        handleSearch={handleSearch}
        setLocation={setLocation}
        setCelsius={setCelsius}
        celsius={celsius}
      />
      {content}
    </div>
  );
};

export default Weather;
