import { Component, React } from 'react';

export default class ChatButton extends Component {
    render() {
        return(
            <div className="container__button">
                <div className="message-button">
                    <form onSubmit={this.props.gettingMessages}>
                    <button  className="button dialog-text-settings button-text">Хочу мемас</button>
                    </form>
                    <button className="button dialog-text-settings button-text">Хочу новости</button>
                    <button className="button dialog-text-settings button-text">Хочу прочее</button>
                </div>
            </div>
        )
    }
}