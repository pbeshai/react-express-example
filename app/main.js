/**
This is the main file run used by browserify and is run in the browser.
*/

var React = require('react');
var HomePage = require('./pages/home').HomePage;

var mountNode = document.getElementById("react-main-mount");
React.renderComponent(new HomePage({ size: 200 }), mountNode);
