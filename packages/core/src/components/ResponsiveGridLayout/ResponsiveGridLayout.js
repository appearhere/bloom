import React, { Component } from 'react';
import css from './ResponsiveGridLayout.css';
import PropTypes from 'prop-types';

export default class ResponsiveGridLayout extends Component {
  static propTypes = {
    grid: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      }),
    ).isRequired,
    GridItemComponent: PropTypes.any,
    gridSize: PropTypes.number,
    colGap: PropTypes.number,
    rowHeight: PropTypes.number,
  };

  static defaultProps = {
    grid: [],
    GridItemComponent: 'div',
    gridSize: 16,
    colGap: 1,
    rowHeight: 4,
  };

  constructor(props) {
    super(props);

    const { grid, limit } = props;

    this.state = {
      grid: grid.slice(0, limit)
    };
  }

  componentWillReceiveProps(props) {
    const { grid, limit } = props;

    this.setState({
      grid: grid.slice(0, limit)
    });
  }

  
  render() {
    const { grid } = this.state;
    const { colGap, GridItemComponent, gridSize, rowHeight } = this.props;
    return (
      <div 
        className={css.container}
        style={{
            gridGap: `${colGap}rem`,
            gridTemplateColumns: `repeat(auto-fill, minmax(${gridSize}rem, 1fr))`,
            gridAutoRows: `${rowHeight}rem`,
        }}
      >
        {grid.slice(0, this.props.limit).map((item, i) => (
          <div key={i} className={css.item}>
            <GridItemComponent {...item} key={`logo-${item.key}`} />
          </div>
        ))}
      </div>  
    );
  }
}
