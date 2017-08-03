const getValidIndex = (index, arrLength, modifier) => {
  if (index < 0) {
    if (arrLength % modifier !== 0) {
      return getValidIndex(index + arrLength, arrLength, modifier);
    }

    return arrLength + index;
  } else if (index >= arrLength) {
    if (arrLength % modifier !== 0) {
      return getValidIndex(index - arrLength, arrLength, modifier);
    }

    return index - arrLength;
  }

  return index;
};

export default getValidIndex;
