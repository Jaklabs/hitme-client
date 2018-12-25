import React, { Component } from 'react';
import axios from 'axios';

export class RedButton extends Component {
	deleteStuff(event) {
		console.log("Clickeded it!");
		event.preventDefault();
		axios.delete('/chats/clear');
	}
	render() {
		return <button onClick={this.deleteStuff} className="btn btn-danger">Delete Everything</button>
	}
}
