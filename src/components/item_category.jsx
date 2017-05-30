import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

const ItemCategory = props => (
  <div>
    <h3>{props.title}</h3>
    {props.items.map(item => (
      <Item
        key={item.id}
        item={item}
        funcRemoveItem={props.funcRemoveItem}
      />
    ))}
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
