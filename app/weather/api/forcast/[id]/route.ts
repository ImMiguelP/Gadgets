import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const location = params.id;
  const DATA_SOURCE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;
  const res = await fetch(DATA_SOURCE_URL);
  if (!res.ok) {
    throw new Error("Location not found");
  }
  const data = await res.json();
  return NextResponse.json(data);
}
