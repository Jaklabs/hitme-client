import React, { Component } from 'react';

import { MessageList } from './MessageList';
import { TextForm } from './TextForm';
//import { RedButton } from './Components/RedButton';

import axios from 'axios';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatID: '0000',
      messages: [/*
        { author: 'Alice', content: 'Hey guys!', you: false},
        { author: 'Bob', content: 'Wassup!', you: false},
        { author: 'Charlie', content: 'Whas boppin?', you: false},
        { author: 'You', content: 'Hi.', you: true}*/
      ]
    };
  }

  componentDidMount() {
    axios.get('/chats/' + this.state.chatID, res => {
      var messages = res.data;
      this.setState({ messages: messages });
    });

    socket.on('chat', chat => {
      this.setState(prevState => ({
        messages: [...prevState.messages, chat]
      }));
      console.log(this.state.messages)
    })

  }
  

  render() {
    return(
      <div id="chatWindow">
        {/*<RedButton />*/}
        <header id="chatHeader" className="font-1">
            <h2>Chat 1</h2>
        </header>
        <MessageList messages={this.state.messages}/>
        <TextForm 
          messages={this.state.messages} 
          chatID={this.state.chatID}
        />
        
      </div>
    )
  }
}

export default ChatWindow;
