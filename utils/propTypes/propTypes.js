import { Children } from 'react';

export const getChildComponentValidator = ComponentClass => (props, propName, componentName) => {
  const prop = props[propName];

  let error = null;
  Children.forEach(prop, (child) => {
    if (child.type !== ComponentClass) {
      error = new Error(
        `\`${componentName}\` children should be of type \`${ComponentClass}\`.`
      );
    }
  });

  return error;
};