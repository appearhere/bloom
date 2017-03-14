import isArray from 'lodash/fp/isArray';
import { isLngLat } from '../propTypeValidations/lngLat';

const toRadians = degrees => (degrees * Math.PI) / 180;
const toDegrees = radians => radians * (180 / Math.PI);

const boundaryCenter = (boundry) => {
  const correctSize = isArray(boundry) && boundry.length === 2;
  if (!correctSize || !boundry.every(isLngLat)) {
    throw new Error('boundaryCenter expected a boundy (pair of lngLats)');
  }

  const [lng1, lat1] = boundry[0];
  const [lng2, lat2] = boundry[1];

  const lat1Rad = toRadians(lat1);
  const lat2Rad = toRadians(lat2);
  const lng1Rad = toRadians(lng1);
  const dLng = toRadians(lng2 - lng1);

  // maths
  // based on http://www.movable-type.co.uk/scripts/latlong.html#midpoint
  // explained here: http://mathforum.org/library/drmath/view/51822.html
  /* eslint-disable no-mixed-operators */
  const bX = Math.cos(lat2Rad) * Math.cos(dLng);
  const bY = Math.cos(lat2Rad) * Math.sin(dLng);
  const centerLat = Math.atan2(
    Math.sin(lat1Rad) + Math.sin(lat2Rad),
    Math.sqrt((Math.cos(lat1Rad) + bX) * (Math.cos(lat1Rad) + bX) + bY * bY)
  );
  const centerLng = lng1Rad + Math.atan2(bY, Math.cos(lat1Rad) + bX);
  /* eslint-enable no-mixed-operators */

  return [toDegrees(centerLng), toDegrees(centerLat)];
};

export default boundaryCenter;