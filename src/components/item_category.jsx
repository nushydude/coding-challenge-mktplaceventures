import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Item from './item';

const ItemCategory = props => (
  <div className="category">
    <div className="category__header">
      <h3>{props.title}</h3>
      <p className="category__stats">{props.items.length} items</p>
    </div>
    <div className="category__body">
      <FlipMove maintainContainerHeight>
        {props.items.map(item => (
          <div className="item-wrapper" key={item.id}>
            <Item
              item={item}
              funcRemoveItem={props.funcRemoveItem}
            />
          </div>
        ))}
      </FlipMove>
    </div>
  </div>
);

ItemCategory.defaultProps = {
  items: [],
};

ItemCategory.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      timestamp: PropTypes.instanceOf(Date).isRequired,
    }),
  ),
  funcRemoveItem: PropTypes.func.isRequired,
};

export default ItemCategory;
