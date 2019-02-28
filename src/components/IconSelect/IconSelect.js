import React, { Component } from 'react';
require('./style.scss');

class IconSelect extends Component {
  render() {
    return (
      <React.Fragment>
        <span className="icon-select__wrapper">
          &#10004;
        </span>
      </React.Fragment>
    );
  }
}

export default IconSelect;