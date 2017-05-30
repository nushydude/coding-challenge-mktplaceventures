import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Item = ({ item, funcRemoveItem }) => (
  <div className="item" key={item.id}>
    <div className="item__contents">
      <p>{moment(item.timestamp).format('hh:mm:ss a')}</p>
      <p>{item.name}</p>
    </div>
    <div className="item__actions">
      <button className="button button--icon" onClick={() => funcRemoveItem(item.id)}>
        X
      </button>
    </div>
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
