import React, {Component} from 'react';

export default class ChatLink extends Component {
    render() {
        return (
        <div className="chatListItem font-1">
            <a href="#">
                <h5 className="font-3">{this.props.title}</h5>
                <div className="font-3">{this.props.blurb}</div>
            </a>
        </div>
        )
    }
}