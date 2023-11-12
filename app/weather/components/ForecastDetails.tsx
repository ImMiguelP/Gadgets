import React from "react";
import { WeatherType } from "../../../types";
import {
  BsThermometerHalf,
  BsWind,
  BsCloudRainFill,
  BsFillSunFill,
  BsDroplet,
} from "react-icons/bs";
interface CurrentProps {
  data: WeatherType;
  celsius: boolean;
}

interface WeatherInfoProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}

const ForecastDetails = ({ data, celsius }: CurrentProps) => {
  const chanceOfRain = data.forecast?.forecastday.map((day, index) => {
    return day.day.daily_chance_of_rain;
  })[0];

  const WeatherInfo = ({ icon, label, value }: WeatherInfoProps) => (
    <div className="flex flex-row text-start text-secondary-foreground/40 gap-2 text-md">
      {icon}
      <div className="flex flex-col">
        <span className="text-md pb-2">{label}</span>
        <div className="text-start text-2xl text-secondary-foreground/80">
          {value}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full p-6 bg-card rounded-2xl">
      <p className="text-xs pb-4 text-secondary-foreground/50 ">
        AIR CONDITIONS
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-row gap-1 text-secondary-foreground/40 text-md">
          <BsThermometerHalf />
          <div className="flex flex-col">
            <span className="text-sm pb-2">Feels Like</span>
            {celsius ? (
              <div className="text-2xl text-secondary-foreground/80">
                {data.current.feelslike_c}°
              </div>
            ) : (
              <div className="text-2xl">{data.current.feelslike_f}°</div>
            )}
          </div>
        </div>
        <WeatherInfo
          icon={<BsWind />}
          label="Wind Speed"
          value={data.current.wind_mph}
        />
        <WeatherInfo
          icon={<BsWind />}
          label="Wind Direction"
          value={data.current.wind_dir}
        />
        <WeatherInfo
          icon={<BsCloudRainFill />}
          label="Chance of Rain"
          value={chanceOfRain}
        />
        <WeatherInfo
          icon={<BsDroplet />}
          label="Humidity"
          value={data.current.humidity}
        />
        <WeatherInfo
          icon={<BsFillSunFill />}
          label="UV Index"
          value={data.current.uv}
        />
      </div>
    </div>
  );
};

export default ForecastDetails;
