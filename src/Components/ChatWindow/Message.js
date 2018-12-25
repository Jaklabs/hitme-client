import React from 'react';

export class Message extends React.Component {
	render() {
		return (
			<div className="message-block">
				<div className={"message-bubble" + (this.props.you ? " you" : "")}>
					<strong>{this.props.author}: </strong>
					<span>{this.props.content}</span>
				</div>
			</div>
		)
	}
}