import React, { Component } from 'react';
import css from './GridLayout.css';
import PropTypes from 'prop-types';
import shortid from 'short-id';

export default class GridLayout extends Component {
  static propTypes = {
    grid: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      }),
    ).isRequired,
    gridItemComponent: PropTypes.any,
    limit: PropTypes.number,
    col: PropTypes.number,
    colGap: PropTypes.number,
    rowHeight: PropTypes.number,
  };

  static defaultProps = {
    grid: [],
    gridItemComponent: 'div',
    limit: 16,
    col: 4,
    colGap: 1,
    rowHeight: 10
  };

  
  render() {
    const { grid, limit } = this.props;
    const { col, colGap, gridItemComponent, rowHeight } = this.props;
    return (
      <div 
        className={css.container}
        style={{
          gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
          gridGap: `${colGap}rem`,
          gridAutoRows: `${rowHeight}rem`,
        }}
      >
        {grid.slice(0, limit).map(item => (
          <div key={shortid.generate()} className={css.item}>
            <gridItemComponent {...item} key={`logo-${item.key}`} />
          </div>
        ))}
      </div>  
    );
  }
}
