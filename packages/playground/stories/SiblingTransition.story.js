import PropTypes from 'prop-types';
import React from 'react';
import keyMirror from 'key-mirror';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { SiblingTransition } from '@appearhere/bloom';

const stories = storiesOf('SiblingTransition', module);
stories.addDecorator(withKnobs);

const Panel = ({ bg }) => <div style={{ backgroundColor: bg, height: '100vh', width: '100vw' }} />;

Panel.propTypes = {
  bg: PropTypes.string,
};

const colors = ['pink', '#ED4A27', 'rgb(85, 172, 135)'];

stories.add('Default', () => {
  const opts = keyMirror({
    [colors[0]]: null,
    [colors[1]]: null,
    [colors[2]]: null,
  });

  const value = select('Color', opts, colors[0]);

  const shouldAnimateLeft = (newRoute, oldRoute) => {
    const newIndex = colors.indexOf(newRoute);
    const oldIndex = colors.indexOf(oldRoute);

    if (newIndex > oldIndex) return true;
    return false;
  };

  return (
    <SiblingTransition route={value} shouldAnimateLeft={shouldAnimateLeft} animate>
      <Panel key={value} bg={value} />
    </SiblingTransition>
  );
});
