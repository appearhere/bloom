import HexgridHeatmap from 'hexgrid-heatmap';
import { MARKER_LAYER, HEATMAP_LAYER } from '../../constants/mapbox';

const initializeHeatmap = (mapbox, settings) => {
  const { colorStops, intensity, spread } = settings;
  const heatmap = new HexgridHeatmap(mapbox, HEATMAP_LAYER, MARKER_LAYER);

  heatmap.setIntensity(intensity);
  heatmap.setSpread(spread);
  heatmap.setColorStops(colorStops);

  return heatmap;
};

export default initializeHeatmap;
