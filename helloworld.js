let flemingmap;

function initMap() {
  flemingmap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.34, lng: -78.74 },
    zoom: 8,
  });
}
