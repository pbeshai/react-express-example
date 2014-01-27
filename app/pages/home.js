/** @jsx React.DOM */
var React = require('react');
var Square = require('../elements/square').Square;

// A very simple page with a square on it.
var HomePage = React.createClass({
  getDefaultProps: function () {
    return {
      size: 100
    }
  },

  render: function () {
    return (
      <Square size={this.props.size} />
    );
  }
});

module.exports.HomePage = HomePage;