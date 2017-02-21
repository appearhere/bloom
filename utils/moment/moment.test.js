import moment from 'moment';
import { getInclusiveMomentRange } from './moment';

describe('getInclusiveMomentRange', () => {
  const dayOne = moment().startOf('day');
  const dayTwo = moment().startOf('day').add(1, 'day');
  const dayThree = moment().startOf('day').add(2, 'day');

  const momentRange = [dayOne, dayTwo, dayThree];

  it('returns an array of moments inclusive of the supplied dates', () => {
    expect(getInclusiveMomentRange(dayOne, dayThree)).toEqual(momentRange);
  });
});