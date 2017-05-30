import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Item = ({ item, funcRemoveItem }) => (
  <div key={item.id}>
    <p>{item.name}</p>
    <p>{moment(item.timestamp).format('YYYY-MM-DD h:mm:ss a')}</p>
    <button onClick={() => funcRemoveItem(item.id)}>
      Remove
    </button>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  funcRemoveItem: PropTypes.func.isRequired,
};

export default Item;
