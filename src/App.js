import React, { Component } from 'react';
// import CommonChannel from './components/ChannelMenu/CommonChannel';
import MenuSidebar from './components/ChannelMenu/MenuSidebar';
import ChatDialog from './components/СhatDialog/ChatDialog';
//import ReactDOM from 'react-dom';
import './reportWebVitals.js'

export default class App extends Component {



  
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
          <MenuSidebar />
          <ChatDialog />
        </div>
      </div>
    );
  };
}

