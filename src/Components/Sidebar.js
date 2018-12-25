import React, {Component} from 'react';
import ChatList from './ChatList/ChatList'
import NewChat from './NewChat/NewChat'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.switchView = this.switchView.bind(this);
        this.state = {
            view: 'chatList',
            chats: [
              {title: "chat 1", id: '1', members: ['Alice', 'Bob', 'Charlie', 'Me'], messages: ['Hi', 'Ho']},
              {title: "chat 2", id: '2', members: ['Alice', 'Bob', 'Charlie', 'Me'], messages: ['Hi', 'Ho']},
              {title: "chat 3", id: '3', members: ['Alice', 'Bob', 'Charlie', 'Me'], messages: ['Hi', 'Ho']}
            ]
        }
    }

    switchView = (event) => {
        let newView = (this.state.view === 'chatList' ? 'newChat' : 'chatList');
        this.setState({ view: newView });
    }

    render() {
        let sidebarMenu = (this.state.view === 'chatList' ? <ChatList chats={this.state.chats}/> : <NewChat />);

        return (
        <div id="sidebar">
            <header className="font-1" id="appHeader">
                <h3>Hitme</h3>
            </header>
            <section id="sidebar-menu">
                { sidebarMenu }
            </section>
            <footer>
                <a href="#" onClick={this.switchView}>New Chat</a>
            </footer>
        </div>
        )
    }
}