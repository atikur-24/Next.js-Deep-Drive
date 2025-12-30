const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },

  // Asia
  {
    location: "Tokyo",
    latitude: 35.6828387,
    longitude: 139.7594549,
  },
  {
    location: "Seoul",
    latitude: 37.5666791,
    longitude: 126.9782914,
  },
  {
    location: "Kuala Lumpur",
    latitude: 3.1516964,
    longitude: 101.6942371,
  },
  {
    location: "Mumbai",
    latitude: 19.0759837,
    longitude: 72.8776559,
  },

  // Middle East
  {
    location: "Dubai",
    latitude: 25.2048493,
    longitude: 55.2707828,
  },
  {
    location: "Riyadh",
    latitude: 24.7135517,
    longitude: 46.6752957,
  },

  // Europe
  {
    location: "Paris",
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
  {
    location: "Berlin",
    latitude: 52.5170365,
    longitude: 13.3888599,
  },
  {
    location: "Moscow",
    latitude: 55.7504461,
    longitude: 37.6174943,
  },

  // Americas
  {
    location: "Los Angeles",
    latitude: 34.052235,
    longitude: -118.243683,
  },
  {
    location: "São Paulo",
    latitude: -23.5506507,
    longitude: -46.6333824,
  },
  {
    location: "Mexico City",
    latitude: 19.4326296,
    longitude: -99.1331785,
  },

  // Oceania
  {
    location: "Sydney",
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: "Melbourne",
    latitude: -37.8136276,
    longitude: 144.9630576,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const foundLocation = data.find((item) => item.location.toLowerCase() === location.toLowerCase());

  return foundLocation || {};
}

export { getLocationByName, getLocations };
