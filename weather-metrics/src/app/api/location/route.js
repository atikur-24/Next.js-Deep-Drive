import { getLocations } from "@/lib/location-util";

export async function GET() {
  const locationData = getLocations();

  return Response.json(locationData);
}
