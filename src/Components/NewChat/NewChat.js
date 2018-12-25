import React, { Component } from 'react';

export default class NewChat extends Component {
    render() {
        return (
            <div id="newChat">
                <h3>Create a Chat</h3>
                <form>
                    <label for="new-chat-title">Give it a name: </label>
                    <input id="new-chat-title" placeholder="Name your chat"></input>
                    <p>Add three people: </p>
                    <input id="member-1" placeholder="Username"></input>
                    <input id="member-2" placeholder="Username"></input>
                    <input id="member-3" placeholder="Username"></input>
                </form>
            </div>
        )
    }
}