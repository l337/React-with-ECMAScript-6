import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
	}

	connect() {
		alert(this.id);
	}

	render() {
		return <h1>Hello World from React</h1>;
	}
};

module.exports = App;