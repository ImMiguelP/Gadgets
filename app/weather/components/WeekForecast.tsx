import React from "react";
import { WeatherType } from "../../../types";
import Image from "next/image";
import { Separator } from "../../src/components/ui/separator";

interface CurrentProps {
  data: WeatherType;
  celsius: boolean;
}

const WeekForecast = ({ data, celsius }: CurrentProps) => {
  return (
    <div className="h-full  p-8 bg-card rounded-2xl">
      <p className="text-xs pb-4 text-secondary-foreground/50">
        7-DAY FORECAST
      </p>
      <div className="flex flex-col w-full h-full justify-around pb-4">
        {data.forecast?.forecastday.slice(2).map((day, index, array) => (
          <div key={index} className="flex flex-col space-y-5">
            <div
              className="flex items-center font-semibold text-xs justify-between"
              aria-label={`Forecast for ${new Date(day.date).toLocaleString(
                "en-US",
                { weekday: "short" }
              )}`}
            >
              <p className="">
                {new Date(day.date).toLocaleString("en-US", {
                  weekday: "short",
                })}
              </p>

              <div className="flex items-center w-full ">
                <div className="flex flex-col items-end w-full">
                  <Image
                    width={50}
                    height={50}
                    src={day.day.condition.icon.replace(/^\/\//, "https://")}
                    alt={day.day.condition.text}
                    aria-label={day.day.condition.text}
                  />
                </div>
                <p className="w-full">
                  {day.day.condition.text.replace(/possible/gi, "")}
                </p>
              </div>
              <div className="flex-shrink-0 px-2 text-xs">
                {celsius ? (
                  <p>
                    {day.day.maxtemp_c.toFixed()}°
                    <span className="text-secondary-foreground/50">
                      /{day.day.mintemp_c.toFixed()}°
                    </span>
                  </p>
                ) : (
                  <p>
                    {day.day.maxtemp_f.toFixed()}°
                    <span className="text-secondary-foreground/50">
                      /{day.day.mintemp_f.toFixed()}°
                    </span>
                  </p>
                )}
              </div>
            </div>
            {index !== array.length - 1 && (
              <Separator className="bg-primary/80" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
