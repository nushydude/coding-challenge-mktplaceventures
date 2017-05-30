import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="header-container__title__sub">{this.props.subtitle}</h2>;
    }
    return null;
  }

  render() {
    return (
      <div className="header">
        <div className="header__content">
          <div>
            <h1>{this.props.title}</h1>
            {this.renderSubtitle()}
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  subtitle: null,
};


Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
