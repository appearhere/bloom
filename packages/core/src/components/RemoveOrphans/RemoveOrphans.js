import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const RemoveOrphans = ({ text }) => {
  return (<span
    dangerouslySetInnerHTML={{ __html: text.replace(/ ([^ ]*)$/,'&nbsp;$1') }}
  />);
};

RemoveOrphans.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RemoveOrphans;
