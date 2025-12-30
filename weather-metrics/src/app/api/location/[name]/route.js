import { getLocationByName } from "@/app/lib/location-util";

export async function GET(request, { params: { name } }) {
  const locationData = getLocationByName(name);

  return Response.json(locationData);
}
