export const apiUrl = process.env.REACT_APP_API_URL || 'https://bonfire-api.herokuapp.com/';

// Time-based cache buster
export const getApiCacheBuster = () => {
  return Math.trunc(Date.now() / (1000 * 60));
};
