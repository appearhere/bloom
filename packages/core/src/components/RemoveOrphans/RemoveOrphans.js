// @flow

import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  text: string,
}

const RemoveOrphans = ({ text }: Props) => {
  return (<span
    dangerouslySetInnerHTML={{ __html: text.replace(/ ([^ ]*)$/,'&nbsp;$1') }}
  />);
};

export default RemoveOrphans;
