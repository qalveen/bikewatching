// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

<body>
  <h1>🚴🏼‍♀️ Bikewatching</h1>
  <p>A site that tracks bike rides and observations around the city.</p>
  <div id="map"></div>
</body>

import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// ✅ Replace this with your actual token
mapboxgl.accessToken = 'pk.eyJ1IjoicWFsdmVlbiIsImEiOiJjbWh6aHJzZG8wb3Y1MmpwdDYxY2toMnJ4In0.aja8f41lM9sV1dxYGuO55Q';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude] — Cambridge/Boston
  zoom: 12, // Initial zoom
  minZoom: 5,
  maxZoom: 18,
});

console.log('Map initialized:', map);
