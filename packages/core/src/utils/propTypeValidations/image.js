export default (props, propName, descriptiveName, location) => {
  const name = descriptiveName || 'ANONYMOUS';

  if (!props.videoProps) {
    const type = typeof props[propName];
    const expected = 'string';

    if (type !== expected) {
      return new Error(
        `Invalid ${location} \`${propName}\` of type \`${type}\` ` +
          `supplied to \`${name}\`, expected \`${expected}\`.`,
      );
    }
  }

  return null;
}
