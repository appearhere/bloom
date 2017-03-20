import cx from 'classnames';

const mergeObjectStrings = (ca, cb) => {
  const classNames = Object.assign({}, ca, cb);

  Object.keys(classNames).forEach((key) => {
    classNames[key] = cx(ca[key], cb[key]);
  });

  return classNames;
};

export default mergeObjectStrings;