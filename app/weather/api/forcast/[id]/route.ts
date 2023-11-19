import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { WEATHER_API_KEY } = process.env;
  try {
    const location = params.id;
    const DATA_SOURCE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=9&aqi=yes&alerts=yes`;

    const res = await fetch(DATA_SOURCE_URL);

    if (!res.ok) {
      const errorMessage = `Error fetching ${DATA_SOURCE_URL}: ${res.statusText}`;
      console.error(errorMessage);
      return NextResponse.error();
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("An error occurred in the server-side code:", error);
    return NextResponse.error();
  }
}
