import { Component, React } from 'react';
// import ChannelMenu from './ChannelMenu';
// import CommonChannel from './CommonChannel';

 export default class  MenuSidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeElement: null
        }
    }

    toggleActive(key) {
        this.setState({activeElement: key})
        console.log(key)
    }

    isActiveElement(key) {
        if (this.state.activeElement === key) {
            return "channel__various-item active"
        } else {
            return "channel__various-item"
        }
    }

    render() {
     return(
        <div class="menu-sidebar">
            <nav class="channel__various-group">
                <a href="#" className={this.isActiveElement("common")} onClick={() => {this.toggleActive("common")}}>
                    <img class="channel__various-avatar"/>
                    <span class="channel__various-text">Общий канал</span>
                </a>
                <h3 class="channel__various-title">Выбери тематику</h3>
                <a href="#" className={this.isActiveElement("science")} onClick={() => {this.toggleActive("science")}}> 
                    <img className="channel__various-avatar" src="https://sun9-14.userapi.com/impg/1fKSdBpqngBA_NytCXOdiHOGLwzgjnNEoEoEhg/QBIMczy91w0.jpg?size=700x700&quality=96&proxy=1&sign=b9fdfddb2a64686ba03d1a844cb6d522&type=album"/>
                    <span className="channel__various-text">Наука</span>
                </a>
                <a href="#" className={this.isActiveElement("music")} onClick={() => {this.toggleActive("music")}}> 
                    <img className="channel__various-avatar" src="https://sun9-7.userapi.com/impg/gPE1LEUjvrU-YLiGTWRSC8-c_6-AM-lX5AwQ8g/Xo4AP8Btd40.jpg?size=700x700&quality=96&proxy=1&sign=54fd5c2fa46dcbc63343f45c00bf982b&type=album"/>
                    <span className="channel__various-text">Музыка</span>
                </a>

                <a href="#" className={this.isActiveElement("art")} onClick={() => {this.toggleActive("art")}}> 
                    <img className="channel__various-avatar" src="https://sun9-25.userapi.com/impg/0TFzhC0aJ_n0oYIyzfh-U7X_Vu3ykwL-Gyzm9g/dV9sWGR-9ew.jpg?size=500x500&quality=96&proxy=1&sign=6f1042fc3e19329b553aa88762e64f4e&type=album"/>
                    <span className="channel__various-text">Искусство</span>
                </a>
                <a href="#" className={this.isActiveElement("politics")} onClick={() => {this.toggleActive("politics")}}> 
                    <img className="channel__various-avatar" src="https://sun9-46.userapi.com/impg/DxyuDuQ_tB9qAmdz7cVLNnT3ZKuyzOT2kVU4mw/aGmeF-Bqfz0.jpg?size=700x700&quality=96&proxy=1&sign=1518007cd26ce8dd6f30edf26ba11ef0&type=album"/>
                    <span className="channel__various-text">Политика</span>
                </a>
            </nav>
        </div>
    )}
}
