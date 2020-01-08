import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import css from './IconCore.css';

export default (iconSet, theme) =>
  class Icon extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      className: PropTypes.string,
      dimensions: PropTypes.objectOf({
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }),
    };

    static defaultProp = {
      dimensions: { height: 16, width: 16 },
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
