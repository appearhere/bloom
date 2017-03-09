import React, { Component, PropTypes } from 'react';

import css from './InteractiveMarker.css';

export default class InteractiveMarker extends Component {
  static propTypes = {
    active: PropTypes.bool,
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    MarkerComponent: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    props: PropTypes.object,
  };

  handleClick = (e) => {
    const { onClick, id } = this.props;
    onClick(e, id);
  };

  render() {
    const { MarkerComponent, active, props } = this.props;
    return (
      <div className={ css.root }>
        <MarkerComponent
          { ...props }
          active={ active }
          onClick={ this.handleClick }
        />
      </div>
    );
  }
}