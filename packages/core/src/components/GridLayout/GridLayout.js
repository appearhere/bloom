// @flow
import * as React from 'react';
import css from './GridLayout.css';
import shortid from 'shortid';

type Props = {
  children: Array<React.Node>,
  col: number,
  colGap: number,
  rowHeight: number,
}
export default class GridLayout extends React.Component<Props> {

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
