import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";
import Weather from "./_components/Weather";

const WeatherPage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved.lon) {
    return <Weather lat={latitude} lon={longitude} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WeatherPage;
