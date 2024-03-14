export const API_KEY = "AIzaSyBE9ml7lXbn5Qiyx7InNBwCgfuoVYw--Z4";

// Convert value K,M,T unit
export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
