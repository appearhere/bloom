//@flow
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import CollapsibleRow from '../CollapsibleRow/CollapsibleRow';

import css from './CollapsibleProgressSteps.css';

type Props = {
  data: Array<Object>
}

const CollapsibleProgressSteps = ({ data }: Props) => {
  const [steps, setSteps] = useState(data);

  useEffect(() => {
    setSteps(data);
  }, [data]);

  const handleClick = (index) => {
    const newSteps = [...steps];
    steps[index].opened = !steps[index].opened;
    setSteps(newSteps);
  };

  return (
    <div className={css.progressSteps}>
      {steps.map((item, index) => (
        <CollapsibleRow
          className={cx(css.step, {[css.opened]: item.opened})}
          key={index}
          onClick={() => handleClick(index)}
          opened={item.opened}
          body={item.body}
          title={item.title}
          marginBottom={false}
          border={false}
        />
      ))}
    </div>
  );
};

export default CollapsibleProgressSteps;
