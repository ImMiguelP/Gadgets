import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const location = params.id;
  const DATA_SOURCE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=9&aqi=yes&alerts=yes`;
  const res = await fetch(DATA_SOURCE_URL);
  if (!res.ok) {
    throw new Error(`Error fetching ${DATA_SOURCE_URL}: ${res.statusText}`);
  }
  const data = await res.json();
  return NextResponse.json(data);
}
