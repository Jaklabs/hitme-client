import React, {Component} from 'react';
import ChatList from './ChatList/ChatList'
import NewChat from './NewChat/NewChat'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'chat-list'
        }
    }
    render() {
        if (this.state.screen == 'chat-list') {
            let menu = <ChatList />;
        } else {
            let menu = <NewChat />;
        }
        return (
        <div id="sidebar">
            <header className="font-1" id="appHeader">
                <h3>Hitme</h3>
            </header>
            <section id="sidebar-menu">
                { menu }
            </section>
            <footer>
                <a href="#">New Chat</a>
            </footer>
        </div>
        )
    }
}