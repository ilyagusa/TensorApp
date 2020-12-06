import { Component, React } from 'react';

export default class ChannelMenu extends Component {
    render(){
    return ( <nav className="channel__various-group">
        <h3 className="channel__various-title">Выбери тематику</h3>
        <li href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Наука</span>
        </li>
        <li href="#" className="channel__various-item active"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Криминал</span>
        </li>
        <li href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Свеженькое</span>
        </li>
        <li href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Мимими</span>
        </li>
        <li href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Искусство</span>
        </li>
    </nav>
    )}
}