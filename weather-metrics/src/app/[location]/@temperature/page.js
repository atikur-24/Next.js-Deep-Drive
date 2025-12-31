import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";
import Temperature from "./_components/Temperature";

const TemperaturePage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved.lon) {
    return <Temperature lat={latitude} lon={longitude} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default TemperaturePage;
