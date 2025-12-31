import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";
import Wind from "./_components/Wind";

const WindPage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved.lon) {
    return <Wind lat={latitude} lon={longitude} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WindPage;
