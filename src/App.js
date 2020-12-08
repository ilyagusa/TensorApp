import React, { Component } from 'react';
// import CommonChannel from './components/ChannelMenu/CommonChannel';
import MenuSidebar from './components/ChannelMenu/MenuSidebar';
import ChatDialog from './components/СhatDialog/ChatDialog';
//import ReactDOM from 'react-dom';
import './reportWebVitals.js'

export default class App extends Component {

  constructor(prpos) {
    super(prpos);
    this.state = {
      active_element: "common"
    };
  }


  getActiveElement = (current_element) => {
    this.setState({
      active_element: current_element
    });

  }


  getActiveForChannel = () => {
    const a = this.state.active_element
    return a
  }


  render() {
    return (
      <div>
        <header className="header">
          <div className="header__block">
            <button className="header__menu">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <div className="header__title">
              <span className="header__title-text">Внутри Лапенко</span>
            </div>
          </div>
        </header>
        <div className="container">
          <MenuSidebar ref="menusidebar" getActiveElement={this.getActiveElement} />
          <ChatDialog ref="chatdialog" getActiveForChannel={this.getActiveForChannel} data={this.state.active_element} />
        </div>
      </div>
    );
  };
}

