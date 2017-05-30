import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import * as actions from './../actions';

class ItemsList extends Component {

  componentDidMount() {
    this.props.actionFetchData();
  }

  renderItems() {
    if (this.props.items.length === 0) {
      return <p>Loading...</p>;
    }

    const itemsList = (
      this.props.items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{moment(item.timestamp).format('YYYY-MM-DD h:mm:ss a')}</p>
        </div>
      ))
    );

    return itemsList;
  }

  render() {
    return (
      <div>
        <h2>Items list</h2>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.data.items,
});

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, actions)(ItemsList);
