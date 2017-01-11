const TRACK_FLOOR = 2;

const getPaginationTrack = (currentPage, totalPages, minimumTrackLength = 3) => {
  const arr = [];
  let startPoint;
  let trackLength = minimumTrackLength;

  const startOfTrack = currentPage <= trackLength;
  const endOfTrack = (currentPage + trackLength) > totalPages;

  if (startOfTrack) {
    trackLength += 1;
    startPoint = TRACK_FLOOR;
  } else if (endOfTrack) {
    trackLength += 1;
    startPoint = (totalPages - trackLength);
  } else {
    const padding = Math.floor(trackLength / 2);
    startPoint = currentPage - padding;
  }

  for (let page = startPoint; page < trackLength + startPoint; page += 1) {
    if (page >= totalPages) break;

    arr.push(page);
  }

  return arr;
};

export default getPaginationTrack;