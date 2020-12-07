import { Component, React } from 'react';
import ChatButton from './ChatButton';
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


    render() {
        var avatars = new Map();
        avatars.set('Politics', 'https://sun9-46.userapi.com/impg/DxyuDuQ_tB9qAmdz7cVLNnT3ZKuyzOT2kVU4mw/aGmeF-Bqfz0.jpg?size=700x700&quality=96&proxy=1&sign=1518007cd26ce8dd6f30edf26ba11ef0&type=album')
        avatars.set('Art', 'https://sun9-25.userapi.com/impg/0TFzhC0aJ_n0oYIyzfh-U7X_Vu3ykwL-Gyzm9g/dV9sWGR-9ew.jpg?size=500x500&quality=96&proxy=1&sign=6f1042fc3e19329b553aa88762e64f4e&type=album')
        avatars.set('Science', 'https://sun9-14.userapi.com/impg/1fKSdBpqngBA_NytCXOdiHOGLwzgjnNEoEoEhg/QBIMczy91w0.jpg?size=700x700&quality=96&proxy=1&sign=b9fdfddb2a64686ba03d1a844cb6d522&type=album')
        avatars.set('Music', 'https://sun9-7.userapi.com/impg/gPE1LEUjvrU-YLiGTWRSC8-c_6-AM-lX5AwQ8g/Xo4AP8Btd40.jpg?size=700x700&quality=96&proxy=1&sign=54fd5c2fa46dcbc63343f45c00bf982b&type=album')
        var avatar_name = new Map();
        avatar_name.set('Politics', 'Марк Багдасаров')
        avatar_name.set('Art', 'Гвидон Вишневский')
        avatar_name.set('Science', 'Инженер')
        avatar_name.set('Music', 'Роза-робот')
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
                    <div class="chat__dialog-container">
                        <div class="chat__dialog-messages">
                            {items.map(message => {
                                if (message.format == "Mem") {
                                    return <span class="chat__dialog-message">
                                        <img class="user-image"
                                            src={avatars.get(message.type)}
                                            alt={message.type_news} />
                                        <p class="chat__dialog-message-text dialog-text-settings message-text">{avatar_name.get(message.type)}</p>
                                        <span class="chat__dialog-message-fill">
                                            <a href={message.url} target="_blank" ><img class="message-image"
                                                src={message.url}
                                                alt={message.format} />
                                            </a>
                                        </span>
                                    </span>
                                }
                                else if (message.format == "Video") {
                                    return <span class="chat__dialog-message">
                                        <img class="user-image"
                                            src={avatars.get(message.type)}
                                            alt={message.type_news} />
                                        <p class="chat__dialog-message-text dialog-text-settings message-text">{avatar_name.get(message.type)}</p>
                                        <span class="chat__dialog-message-fill">
                                            <ReactPlayer class="message-video" controls="true" height="200px" width="350px" url={message.url} />
                                        </span>
                                    </span>
                                }
                            })}
                        </div>
                    </div>
                        
                    <ChatButton gettingMessages={this.gettingMessages} />
                </div >
            )
        }
    }
}