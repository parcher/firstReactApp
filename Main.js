//  This adds the App component to the page. I am adding it to a container div with the #main id in index.html

var React = require('react');
var App = require('./componemts/App');

react.render(
	<App />,
	document.getElementById('main')
);