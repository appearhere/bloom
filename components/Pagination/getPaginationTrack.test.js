import getPaginationTrack from './getPaginationTrack';

describe('When current page is first page', () => {
  it('produces [2, 3, 4, 5]', () => {
    const track = getPaginationTrack(1, 10);
    expect(track).toEqual([2, 3, 4, 5]);
  });
});

describe('When current page is second page', () => {
  it('produces [2, 3, 4, 5]', () => {
    const track = getPaginationTrack(2, 10);
    expect(track).toEqual([2, 3, 4, 5]);
  });
});

describe('When current page is third page', () => {
  it('produces [2, 3, 4, 5]', () => {
    const track = getPaginationTrack(3, 10);
    expect(track).toEqual([2, 3, 4, 5]);
  });
});

describe('When current page is forth page', () => {
  it('produces [3, 4, 5]', () => {
    const track = getPaginationTrack(4, 10);
    expect(track).toEqual([3, 4, 5]);
  });
});

describe('When current page is fifth page', () => {
  it('produces [4, 5, 6]', () => {
    const track = getPaginationTrack(5, 10);
    expect(track).toEqual([4, 5, 6]);
  });
});

describe('When current page is eight page', () => {
  it('produces [6, 7, 8, 9]', () => {
    const track = getPaginationTrack(8, 10);
    expect(track).toEqual([6, 7, 8, 9]);
  });
});

describe('When current page is last page', () => {
  it('produces [6, 7, 8, 9]', () => {
    const track = getPaginationTrack(10, 10);
    expect(track).toEqual([6, 7, 8, 9]);
  });
});

describe('When current page is penultimate page', () => {
  it('produces [6, 7, 8, 9]', () => {
    const track = getPaginationTrack(9, 10);
    expect(track).toEqual([6, 7, 8, 9]);
  });
});

describe('When current page is seventh page', () => {
  it('produces [6, 7, 8]', () => {
    const track = getPaginationTrack(7, 10);
    expect(track).toEqual([6, 7, 8]);
  });
});

describe('When trackLength is >= than totalPages and current page is first', () => {
  it('produces [2]', () => {
    const track = getPaginationTrack(1, 3);
    expect(track).toEqual([2]);
  });

  it('produces []', () => {
    const track = getPaginationTrack(1, 1);
    expect(track).toEqual([]);
  });
});