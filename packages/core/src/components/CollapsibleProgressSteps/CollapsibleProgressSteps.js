import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CollapsibleRow from '../CollapsibleRow/CollapsibleRow';

import css from './CollapsibleProgressSteps.css';

const CollapsibleProgressSteps = ({ data }) => {
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

CollapsibleProgressSteps.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CollapsibleProgressSteps;
