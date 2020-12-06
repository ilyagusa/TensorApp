import { Component, React } from 'react';

export default class ChatButton extends Component {
    render() {
        return(
            <div className="container__button">
                <div className="message-button">
                    <form onSubmit={this.props.gettingMessages}>
                    <button  className="button">Хочу мемас</button>
                    </form>
                    <button className="button">Хочу новости</button>
                    <button className="button">Хочу прочее</button>
                </div>
            </div>
        )
    }
}