import React from 'react';
import { Message } from './Message'

export class MessageList extends React.Component {
	render() {
		const messageList = this.props.messages.map((message, i) => {
			return <Message key={i} author={message.author} you={message.you} content={message.content} />
		});

		return (<div className="messages">{messageList}</div>);
	}
}
