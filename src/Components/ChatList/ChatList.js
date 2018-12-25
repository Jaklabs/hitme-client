import React, { Component } from 'react';
import ChatLink from './ChatLink';

class ChatList extends Component {
    render() {
        let chatList = this.props.chats.map((chat, i) => {
            return (<ChatLink key={i} title={chat.title} blurb={chat.messages[chat.messages.length - 1]} />)
        });

        return (
            <div id="chatList">
                {chatList}                
            </div>
        )
    }
}

export default ChatList;