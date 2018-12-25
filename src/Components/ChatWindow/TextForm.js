import React from 'react';
import axios from 'axios';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

export class TextForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
	 	console.log('Change detected!');
		this.setState({ message: event.target.value });
	}
	handleSubmit(event) {
		console.log('Submit detected!');	
		
		event.preventDefault();
		let chat = {
			content: this.state.message,
			author: 'Anon'
		};
		socket.emit('chat', chat);

		axios.put('/chats' + this.props.chatID, (res) => {
			console.log(res);
			document.getElementById('text-box').value = '';
		});
	}
	
	render() {
		const { message } = this.state;
		return (
			<form onSubmit={this.handleSubmit} className="form-inline" id="message-form">
				<div className="form-group" >
					<div className="input-group">
						<input
							value={message}
							type="text"
							className="form-control" 
							id="text-box" 
							placeholder="Write a message" 
							onChange={this.handleChange} />

						<button className="btn" type="submit" id="send-btn">Send</button>
					</div>
				</div>
			</form>
		);
	}
}