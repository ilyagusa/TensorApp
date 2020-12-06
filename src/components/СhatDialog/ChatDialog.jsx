import { Component, React } from 'react';
import ChatButton from './ChatButton';
import ChatField from './ChatFIeld';
import ReactPlayer from 'react-player'

export default class ChatDialog extends Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {
        //componentDidMount()
        fetch("http://localhost:5000/messages/data")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    gettingMessages = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/messages/get_message")
            .then(res => res.json())
            .then(
                (result) => {
                    const copy = this.state.items
                    copy.push(result[result.length - 1])
                    this.setState({
                        isLoaded: true,
                        items: copy
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>error</p>
        }
        else if (!isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <div className="chat__dialog">
                    <ChatField />
                    <ul>
                        {items.map(message => {
                            if (message.format == "Mem") {
                                return <span class="chat__dialog-message">
                                    <img class="user-image"
                                        src={message.format}
                                        alt={message.type_news} />
                                    <span class="chat__dialog-message-fill">
                                        <img class="message-image"
                                            src={message.url}
                                            alt={message.type} />
                                    </span>
                                </span>
                            }
                            else if (message.format == "Video") {
                                return <span class="chat__dialog-message">
                                    <img class="user-image"
                                        src={message.format}
                                        alt={message.type_news} />
                                    <span class="chat__dialog-message-fill">
                                        <ReactPlayer controls="true" url={message.url} />
                                    </span>
                                </span>
                            }
                        })}
                    </ul>
                    <ChatButton gettingMessages={this.gettingMessages} />
                </div >
            )
        }
    }
}