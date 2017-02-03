// https://gist.github.com/MoOx/1eb30eac43b2114de73a
const cleanups = {
  // some useless stuff for us
  // that svgo doesn't remove
  title: /<title>.*<\/title>/gi,
  desc: /<desc>.*<\/desc>/gi,
  comment: /<!--.*-->/gi,
  defs: /<defs>.*<\/defs>/gi,

  // remove hardcoded dimensions
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,

  // remove fill
  fill: / +fill="(none|#[0-9a-f]+)"/gi,

  // remove stroke
  stroke: / +stroke="(none|#[0-9a-f]+)"/gi,

  // Sketch.app shit
  sketchMSShapeGroup: / +sketch:type="MSShapeGroup"/gi,
  sketchMSPage: / +sketch:type="MSPage"/gi,
  sketchMSLayerGroup: / +sketch:type="MSLayerGroup"/gi,
};

// https://github.com/PactCoffee/loggins/blob/master/components/Icon/icons.js#L16-L22
const svgClean = (svg) => Object.keys(cleanups)
  .reduce((acc, key) => acc.replace(cleanups[key], ''), svg)
  .trim();

export default svgClean;