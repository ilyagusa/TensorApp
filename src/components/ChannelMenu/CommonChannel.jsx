import { Component, React } from 'react';

export default class CommonChannel extends Component {
    render() {
    return (
        <div className="menu-sidebar">
            <nav className="common__channel">
                <a href="#" className="common__channel-item active">
                    <img className="common__channel-avatar"/>
                    <span className="common__channel-text">Общий канал</span>
                </a>
            </nav>
        </div>
    )}
}