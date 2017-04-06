import { LONDON } from './coordinates';

export const DEFAULT_MAX_ZOOM = 17.9;
export const DEFAULT_ZOOM = 11;
export const DEFAULT_CENTER = LONDON;

export const CLUSTER_RADIUS = 60;
export const CLUSTER_MAX_ZOOM = 18;

export const MARKER_SOURCE = 'markers';
export const MARKER_LAYER = 'marker-layer';
export const CLUSTER_LAYER = 'cluster-layer';

/**
 * The latitude offset when calculating the next map center, this offset ensures that the active
 * marker content is centred vertically
 *
 * The value is the maximum offset applied when the zoom level is 0 i.e. the furthest possible zoom
 */
export const MOVE_TO_MARKER_MAX_LAT_OFFSET = 40;