import React, { PropTypes, Component, cloneElement } from 'react';
import cx from 'classnames';

import Control from '../Control/Control';
import ControlGroup from '../ControlGroup/ControlGroup';
import ControlIcon from '../Control/ControlIcon';

import css from './ControlLayer.css';

import { DEFAULT_ZOOM } from '../../../constants/mapbox';

export default class ControlLayer extends Component {
  static propTypes = {
    className: PropTypes.string,
    controlGroupClassName: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    const { children: { zoom } } = props;

    this.state = {
      zoom: zoom || DEFAULT_ZOOM,
    };
  }

  handleZoomOut = () => {
    this.setState(({ zoom }) => ({ zoom: zoom - 1 }));
  };

  handleZoomIn = () => {
    this.setState(({ zoom }) => ({ zoom: zoom + 1 }));
  };

  handleMoveEnd = (...args) => {
    const { children: child } = this.props;
    const { onMoveEnd: childOnMoveEnd } = child.props;
    const { zoom } = args[1];

    this.setState({ zoom });
    if (typeof childOnMoveEnd === 'function') childOnMoveEnd(...args);
  };

  render() {
    const { children: child, className, controlGroupClassName } = this.props;
    const { zoom } = this.state;

    return (
      <div className={ cx(css.root, className) }>
        <ControlGroup className={ cx(css.controlGroup, controlGroupClassName) }>
          <Control onClick={ this.handleZoomIn }>
            <ControlIcon name="plus" />
          </Control>
          <Control onClick={ this.handleZoomOut }>
            <ControlIcon name="minus" />
          </Control>
        </ControlGroup>
        { cloneElement(child, {
          zoom,
          onMoveEnd: this.handleMoveEnd,
        }) }
      </div>
    );
  }
}