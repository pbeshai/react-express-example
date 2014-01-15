/** @jsx React.DOM */
var React = require('React');

/**
A simple component that doubles in size on click
*/
var Square = React.createClass({
  getDefaultProps: function () {
    return {
      size: 100,
      color: "#D1ECE7"
    };
  },

  getInitialState: function () {
    return {
      size: this.props.size,
    };
  },

  handleClick: function () {
    if (this.state.size === this.props.size) {
      this.setState({ size: this.props.size * 2 });
    } else {
      this.setState({ size: this.props.size });
    }
  },

  render: function () {
    return (
      <div
        onClick={this.handleClick}
        style={{
          width: this.state.size,
          height: this.state.size,
          backgroundColor: this.props.color
        }} />
    );
  }
});

module.exports.Square = Square;