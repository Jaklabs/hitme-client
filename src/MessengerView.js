import React, { Component } from 'react';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import Sidebar from './Components/Sidebar.js';
import Login from './Components/Login/Login';
class MessengerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatID: '01234',
      userID: '56789'
    }
  }
  render() {
    return (
      <div id="messengerView">
        <Sidebar chats={this.state.chats}/>
        <ChatWindow chatID={this.state.chatID}/>
        {/* <Login /> */}
      </div>
    )
  }
}

export default MessengerView;
