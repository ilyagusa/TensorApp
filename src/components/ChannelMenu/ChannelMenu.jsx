import { Component, React } from 'react';

export default class ChannelMenu extends Component {
    render(){
    return ( <nav className="channel__various-group">
        <h3 className="channel__various-title">Выбери тематику:</h3>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar" src="https://sun9-14.userapi.com/impg/1fKSdBpqngBA_NytCXOdiHOGLwzgjnNEoEoEhg/QBIMczy91w0.jpg?size=700x700&quality=96&proxy=1&sign=b9fdfddb2a64686ba03d1a844cb6d522&type=album"/>
            <span className="channel__various-text" id="menu-science">Наука</span>
        </a>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar" src="https://sun9-7.userapi.com/impg/gPE1LEUjvrU-YLiGTWRSC8-c_6-AM-lX5AwQ8g/Xo4AP8Btd40.jpg?size=700x700&quality=96&proxy=1&sign=54fd5c2fa46dcbc63343f45c00bf982b&type=album"/>
            <span className="channel__various-text" id="menu-music">Музыка</span>
        </a>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar" src="https://sun9-25.userapi.com/impg/0TFzhC0aJ_n0oYIyzfh-U7X_Vu3ykwL-Gyzm9g/dV9sWGR-9ew.jpg?size=500x500&quality=96&proxy=1&sign=6f1042fc3e19329b553aa88762e64f4e&type=album"/>
            <span className="channel__various-text" id="menu-art">Искусство</span>
        </a>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar" src="https://sun9-46.userapi.com/impg/DxyuDuQ_tB9qAmdz7cVLNnT3ZKuyzOT2kVU4mw/aGmeF-Bqfz0.jpg?size=700x700&quality=96&proxy=1&sign=1518007cd26ce8dd6f30edf26ba11ef0&type=album"/>
            <span className="channel__various-text" id="menu-political">Политика</span>
        </a>
    </nav>
    )}
}