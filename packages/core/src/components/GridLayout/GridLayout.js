import React, { Component } from 'react';
import css from './GridLayout.css';
import PropTypes from 'prop-types';
import shortid from 'short-id';

export default class GridLayout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
      ]).isRequired,
    col: PropTypes.number,
    colGap: PropTypes.number,
    rowHeight: PropTypes.number,
  };

  static defaultProps = {
    col: 4,
    colGap: 1,
    rowHeight: 10
  };

  
  render() {
    const { col, colGap, rowHeight, children } = this.props;
    
    return (
      <div 
        className={css.container}
        style={{
          gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
          gridGap: `${colGap}rem`,
          gridAutoRows: `${rowHeight}rem`,
        }}
      >
       {children.map(item => (
         <div key={shortid.generate()} className={css.item}>
           {item}
         </div>
       ))}
      </div>  
    );
  }
}
