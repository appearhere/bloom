import isArray from 'lodash/fp/isArray';
import { isLngLat } from '../propTypeValidations/lngLat';

export default (list) => {
  if (!isArray(list) || !list.length) throw new Error('minLngLatBounds expected a non empty array');

  let minLng;
  let minLat;
  let maxLng;
  let maxLat;

  list.forEach((lngLat) => {
    if (!isLngLat(lngLat)) throw new Error(`Unexpected lngLat: ${lngLat}`);

    const lng = lngLat[0];
    const lat = lngLat[1];
    if (typeof minLng === 'undefined' || lng < minLng) minLng = lng;
    if (typeof minLat === 'undefined' || lat < minLat) minLat = lat;
    if (typeof maxLng === 'undefined' || lng > maxLng) maxLng = lng;
    if (typeof maxLat === 'undefined' || lat > maxLat) maxLat = lat;
  });

  return [[minLng, minLat], [maxLng, maxLat]];
};