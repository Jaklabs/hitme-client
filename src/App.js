import React, { Component } from 'react';
import './App.css';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import ChatList from './Components/ChatList/ChatList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatID: '01234',
      userID: '56789',
      chats: [
        {title: "chat 1", id: '1', members: ['Alice', 'Bob', 'Charlie', 'Me'], messages: ['Hi', 'Ho']},
        {title: "chat 2", id: '2', members: ['Alice', 'Bob', 'Charlie', 'Me'], messages: ['Hi', 'Ho']},
        {title: "chat 3", id: '3', members: ['Alice', 'Bob', 'Charlie', 'Me'], messages: ['Hi', 'Ho']}
      ]
    }
  }
  render() {
    return (
      <div id="appContainer">
        <ChatList chats={this.state.chats}/>
        <ChatWindow chatID={this.state.chatID}/>
      </div>
    )
  }
}

export default App;
