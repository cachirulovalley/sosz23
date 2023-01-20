$(document).ready(function(){
  // Map
  var layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  });
  var map = L.map('the-map', {
      scrollWheelZoom: false,
      center: [41.659472,-0.907274],
      zoom: 15
  });
  L.marker([41.659472,-0.907274]).addTo(map);
  map.addLayer(layer);
});
