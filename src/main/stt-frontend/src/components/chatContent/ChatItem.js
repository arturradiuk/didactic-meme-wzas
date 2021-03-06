import React, {Component} from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                style={{animationDelay: `0.8s`}}
                className={`chatItem ${this.props.user ? this.props.user : ""}`}
            >
                <div className="chatItemContent">
                    <div className="chatMessage">{this.props.msg}</div>
                    <div className="chatMeta">
                        <span>{this.props.time}</span>
                        <span/>
                    </div>
                </div>
                <Avatar isOnline="active" image={this.props.image}/>
            </div>
        );
    }
}
