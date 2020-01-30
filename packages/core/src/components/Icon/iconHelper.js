// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import css from './IconCore.css';

type Dimensions = {
  height: string,
  width: string,
}

type Props = {
  name: string,
  className?: string,
  dimensions: Dimensions,
}

export default (iconSet: Object, theme: any) =>
  class Icon extends Component<Props> {

    static defaultProps = {
      dimensions: { height: '1em', width: '1em' },
    };

    render() {
      const { className, name, dimensions } = this.props;
      const IconComponent = iconSet[name];

      const classes = classnames(
        css.root,
        theme ? theme.root : null,
        theme ? theme[name] : css[name],
        className,
      );

      /* eslint-disable react/no-danger */
      return (
        <span className={classes}>
          <IconComponent height={dimensions.height} width={dimensions.width} />
        </span>
      );
      /* eslint-enable react/no-danger */
    }
  };
