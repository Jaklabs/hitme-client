import React, { Component } from 'react';
import './App.css';
// import MessengerView from './MessengerView';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import Sidebar from './Components/Sidebar.js';
import Login from './Components/Login/Login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatID: '01234',
      userID: '56789'
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar chats={this.state.chats}/>
        <ChatWindow chatID={this.state.chatID}/>
      </div>
    )
  }
}

export default App;
