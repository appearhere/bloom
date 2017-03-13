import { canUseDOM } from 'exenv';

const mapboxgl = canUseDOM ? require('mapbox-gl/dist/mapbox-gl') : {};

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBwZWFyaGVyZSIsImEiOiJvUlJ0MWxNIn0.8_mzlmxdekKy99luyV4T7w';

export default mapboxgl;