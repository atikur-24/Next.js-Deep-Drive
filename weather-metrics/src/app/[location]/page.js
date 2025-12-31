import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";
import LocationInfo from "./_components/LocationInfo";

const LocationHomePage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default LocationHomePage;
