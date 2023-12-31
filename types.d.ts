export type WeatherType = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    is_day: number;
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
    wind_dir: string;
    wind_mph: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          condition: {
            icon: string;
            text: string;
          };
          maxtemp_c: number;
          mintemp_c: number;
          maxtemp_f: number;
          mintemp_f: number;
          daily_chance_of_rain: number;
        };
      }
    ];
  };
};

export interface TodoType {
  id: string;
  text: string;
  priority: string;
  date: Date | number;
  completed: boolean;
  createdAt: Date;
}

export interface TaskPopover {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  priority: string | null;
  setPriority: React.Dispatch<React.SetStateAction<string | null>>;
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  closePopover: boolean;
  setClosePopover: React.Dispatch<React.SetStateAction<boolean>>;
}
