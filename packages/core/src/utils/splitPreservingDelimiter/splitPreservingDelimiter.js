const splitPreservingDelimiter = (string, delimiter) => string
  .replace(new RegExp(delimiter, 'gi'), `,${delimiter},`)
  .split(',');

export default splitPreservingDelimiter;
