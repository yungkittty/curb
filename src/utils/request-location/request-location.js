const requestLocation = callback => {
  const { geolocation } = navigator;
  geolocation.getCurrentPosition(callback);
};

export default requestLocation;
