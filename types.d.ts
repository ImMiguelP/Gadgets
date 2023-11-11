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
  };
  forecast?: {
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
        };
      }
    ];
  };
};
