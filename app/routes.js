var React = require('react');
var HomePage = require('./pages/home').HomePage;

// helper function for rendering a view with React
function reactRender(res, componentClass, props) {
  var component = new componentClass(props);

  React.renderComponentToString(component, function (str) {
    res.render('layout', { reactOutput: str });
  });
}

function home(req, res) {
  reactRender(res, HomePage, { size: 200 });
}

function init(app) {
  app.get('/', home);
}

module.exports.init = init;