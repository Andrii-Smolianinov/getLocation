const getLocationBtnEl = document.querySelector("#getLocation");
const locationDisplayEl = document.querySelector("#locationDisplay");
const viewCordsEl = document.querySelector("#viewCords");

getLocationBtnEl.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
  }
});

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;

  locationDisplayEl.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  viewCordsEl.textContent = `latitude: ${latitude}; longitude: ${longitude}`;
};

const displayError = (error) => {
  console.log(error);
  locationDisplayEl.textContent = "Error: " + error.message;
};
