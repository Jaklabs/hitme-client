import React, { Component } from 'react';
import ChatLink from './ChatLink';

class ChatList extends Component {
    render() {
        let chatList = this.props.chats.map((chat, i) => {
            return (<ChatLink key={i} title={chat.title} blurb={chat.messages[chat.messages.length - 1]} />)
        });

        return (
            <div id="chatList">
                <header className="font-1" id="appHeader">
                    <h3>Hitme</h3>
                </header>
                <section id="sidebar-menu">
                    {chatList}
                </section>
                <footer>
                    <a href="#">New Chat</a>
                </footer>
            </div>
        )
    }
}

export default ChatList;