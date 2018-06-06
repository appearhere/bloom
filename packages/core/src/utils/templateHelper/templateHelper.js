const templateHelper = (strings, ...keys) => ((...values) => {
  const dict = values[values.length - 1] || {};
  const result = [strings[0]];
  keys.forEach((key, i) => {
    const value = Number.isInteger(key) ? values[key] : dict[key];
    result.push(value, strings[i + 1]);
  });
  return result.join('');
});

export default templateHelper;
