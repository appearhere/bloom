//@flow
import * as React from 'react';

import mergeObjectStrings from '../../utils/mergeObjectStrings/mergeObjectStrings';
import InputField from '../Form/InputField/InputField';
import css from './FunnelInputField.css';

type Classnames = {
  root: string,
  meta: string,
  label: string,
  valueReplay: string,
  placeholder: string,
  description: string,
}

type Props = {
  classNames: Classnames,
}

const FunnelInputField = ({ classNames, ...rest }: Props) => {
  const classes = mergeObjectStrings(css, classNames);

  return <InputField {...(rest: any)} classNames={classes} />;
};

FunnelInputField.defaultProps = {
  classNames: {},
};

export default FunnelInputField;
