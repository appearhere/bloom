import { LONDON } from './coordinates';

export const DEFAULT_MAX_ZOOM = 17.9;
export const DEFAULT_ZOOM = 11;
export const DEFAULT_CENTER = LONDON;

export const CLUSTER_RADIUS = 50;
export const CLUSTER_MAX_ZOOM = 18;

export const MARKER_SOURCE = 'markers';
export const MARKER_LAYER = 'marker-layer';
export const HIGHLIGHTED_MARKER_LAYER = 'highlighted-marker-layer';
export const CLUSTER_LAYER = 'cluster-layer';
export const HIGHLIGHTED_CLUSTER_LAYER = 'highlighted-cluster-layer';
export const HEATMAP_LAYER = 'heatmap-layer';

/**
 * The latitude offset when calculating the next map center, this offset ensures that the active
 * marker content is centred vertically
 *
 * The value is the maximum offset applied when the zoom level is 0 i.e. the furthest possible zoom
 */
export const MOVE_TO_MARKER_MAX_LAT_OFFSET = 40;

export const DEFAULT_MARKER_CONFIG = {
  type: 'symbol',
  layout: {
    textFont: ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    textSize: 14,
  },
  paint: {
    'text-color': '#FFFFFF',
  },
};

export const DEFAULT_HEATMAP_COLOR_STOPS = [
  [0, 'rgba(216, 237, 197, 0.1)'],
  [5, 'rgba(0, 169, 207, 0.5)'],
  [10, 'rgba(23, 133, 187, 0.6)'],
  [20, 'rgba(29, 33, 121, 0.6)'],
];

export const DEFAULT_HEATMAP_INTENSITY = 15;
export const DEFAULT_HEATMAP_SPREAD = 0.3;
