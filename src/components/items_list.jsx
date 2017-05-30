import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import * as actions from './../actions';

import ItemCategory from './item_category';

class ItemsList extends Component {

  componentDidMount() {
    this.props.actionFetchData();
  }

  generateCategories() {
    const categorised = this.props.items.reduce((categories, item) => {
      const formattedTimestamp = moment(item.timestamp).format('YYYY-MM-DD');
      if (!categories[formattedTimestamp]) {
        categories[formattedTimestamp] = [];
      }
      categories[formattedTimestamp].push(item);
      return categories;
    }, {});

    return categorised;
  }

  renderItems() {
    if (this.props.items.length === 0) {
      return <p>Loading...</p>;
    }

    const categories = this.generateCategories();

    const itemsList = Object.keys(categories).map(category => (
      <ItemCategory
        key={category}
        title={category}
        items={categories[category]}
        funcRemoveItem={this.props.actionRemoveItem}
      />
    ));
    return itemsList;
  }

  render() {
    return (
      <div>
        <h2>Items list</h2>
        <button onClick={() => this.props.actionFetchData()}>
          Fetch new data
        </button>
        <button onClick={() => this.props.actionAddItem()}>
          Add New Item
        </button>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.data.items,
});

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      timestamp: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
  actionRemoveItem: PropTypes.func.isRequired,
  actionAddItem: PropTypes.func.isRequired,
  actionFetchData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(ItemsList);
