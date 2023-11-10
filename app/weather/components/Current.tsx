import React from "react";
import { WeatherType } from "../../../types";
import Image from "next/image";

interface CurrentProps {
  celsius: boolean;
}

const Current: React.FC<{ data: WeatherType; celsius: CurrentProps }> = ({
  data,
  celsius,
}) => {
  const weatherIcon = data.current
    ? data.current.condition.icon.replace(/^\/\//, "https://")
    : null;

  console.log(weatherIcon);
  return (
    <div className="flex flex-col w-full xl:w-6/12">
      <div className="flex flex-row justify-between">
        <div className="p-6">
          <h1 className="text-3xl font-semibold">{data.location.name}</h1>
          <p className="text-sm mt-2 text-secondary-foreground/50">
            {data.location.localtime}
          </p>
          <div className="pt-[100px] text-5xl font-semibold">
            {celsius ? (
              <div>{data.current.temp_c}°</div>
            ) : (
              <div>{data.current.temp_f}°</div>
            )}
          </div>
        </div>
        {weatherIcon && (
          <Image
            width={250}
            height={250}
            src={weatherIcon}
            alt="Weather Icon"
            className="m-6"
            style={{ objectFit: "fill" }}
          />
        )}
      </div>
    </div>
  );
};

export default Current;
