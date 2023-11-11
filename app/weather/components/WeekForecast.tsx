import React from "react";
import { WeatherType } from "../../../types";
import Image from "next/image";

interface CurrentProps {
  celsius: boolean;
}

const WeekForecast: React.FC<{
  data: WeatherType;
  celsius: CurrentProps;
}> = ({ data, celsius }) => {
  console.log(data.forecast?.forecastday);
  return (
    <div className="">
      <p className="text-xs text-secondary-foreground/50">7-DAY FORECAST</p>
      <div className="flex flex-row w-full">
        {/* {data.forecast?.forecastday.slice(2).map((day, index) => (
          <div
            key={index}
            className="text-center flex flex-col border border-red-500 items-center font-semibold text-xs gap-1 w-full"
            role="group"
            aria-label={`Forecast for ${new Date(day.date).toLocaleString(
              "en-US",
              { weekday: "short" }
            )}`}
          >
            <p className="">
              {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
            </p>
            <Image
              width={50}
              height={50}
              src={day.day.condition.icon.replace(/^\/\//, "https://")}
              alt={day.day.condition.text}
              aria-label={day.day.condition.text}
            />
            <div className="flex-grow flex-shrink-0 px-2 text-xs space-y-3">
              <p className="flex-grow">
                {day.day.condition.text.replace(/possible/gi, "")}
              </p>

              <p className="mb-2 text">
                <span
                  aria-label={`Maximum temperature: ${day.day.maxtemp_f.toFixed()} degrees Fahrenheit`}
                >
                  {celsius
                    ? day.day.maxtemp_c.toFixed()
                    : day.day.maxtemp_f.toFixed()}
                  °
                </span>
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default WeekForecast;
