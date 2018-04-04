  var map =  new GMaps({
  div: '.map',
  lat: 38.74385,
  lng: -9.1,
zoom: 12
});
map.addMarker({
  lat: 38.7436057,
  lng: -9.15,
  title: 'Lisbon',
  infoWindow: {
  content: '<p>Our Lisbon HQ</p>'
}
});