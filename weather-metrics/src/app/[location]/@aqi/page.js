import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";
import AQI from "./_components/AQI";

const AQIPage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved.lon) {
    return <AQI lat={latitude} lon={longitude} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default AQIPage;
