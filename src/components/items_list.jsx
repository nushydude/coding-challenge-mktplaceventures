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
        // tricking eslint.
        // creating a copy of the categories for each item would not
        // be performant.
        // categories[formattedTimestamp] = [];
        Object.assign(categories, { [formattedTimestamp]: [] });
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
        <button className="button button--m-right" onClick={() => this.props.actionFetchData()}>
          Fetch new data
        </button>
        <button className="button" onClick={() => this.props.actionAddItem()}>
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
