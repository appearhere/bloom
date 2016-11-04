export default function replaceClassname(svg, classNamesMap) {
  return Object.keys(classNamesMap)
    .reduce((acc, key) => {
      const regex = new RegExp(key, 'g');
      return acc.replace(regex, classNamesMap[key]);
    }, svg)
    .trim();
}