export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude${lat}&longitude=${lon}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getLocationLatLonList = async () => {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/location`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getLocationLatLong = async (location) => {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/location/${location}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getResolvedLatLon = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatLon = await getLocationLatLong(location);

  if (locationLatLon.latitude && locationLatLon.longitude) {
    const lat = locationLatLon.latitude;
    const lon = locationLatLon.longitude;

    return { lat, lon };
  }
};
