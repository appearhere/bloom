import React, { Component } from 'react';
import css from './GridLayout.css';
import PropTypes from 'prop-types';

export default class GridLayout extends Component {
  static propTypes = {
    grid: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      }),
    ).isRequired,
    GridItemComponent: PropTypes.any,
    limit: PropTypes.number,
    col: PropTypes.number,
    colGap: PropTypes.number,
    rowHeight: PropTypes.number,
  };

  static defaultProps = {
    grid: [],
    GridItemComponent: 'div',
    limit: 16,
    col: 4,
    colGap: 1,
    rowHeight: 10
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
    const { col, colGap, GridItemComponent, rowHeight } = this.props;
    return (
      <div 
        className={css.container}
        style={{
          gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
          gridGap: `${colGap}rem`,
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
