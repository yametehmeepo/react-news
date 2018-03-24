import React, { Component } from 'react';
//import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc/pcindex.js';
import MobileIndex from './components/mobile/mobileindex.js';
import Storage from './assets/js/storage.js';
import './assets/css/reset.css';
import 'antd/dist/antd.css';
import './App.css';  

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLogined: Storage.fetch().register || false,
      nickname: Storage.fetch().nickname || '',
    }
  }
  getChildContext(){
    return {
      isLogined: this.state.isLogined,
      nickname: this.state.nickName
    }
  }
  componentDidMount(){
    PubSub.subscribe('STORAGE', (msg,storageObj)=>{
      this.setState({
        isLogined: storageObj.register,
        nickname: storageObj.nickname
      })
      //console.log("isLogined: "+storageObj.register);
      //console.log("nickname: "+storageObj.nickname);
    });
  }
  componentWillUnmount(){
    PubSub.unsubscribe('STORAGE');
  }
  render() {
    return (
      <div className="app">
      	<MediaQuery query="(min-device-width: 1224px)">
      		<PCIndex />
      	</MediaQuery>
      	<MediaQuery query="(max-device-width: 1224px)">
      		<MobileIndex />
      	</MediaQuery>
	  </div>
    );
  }
}

export default App;

App.childContextTypes = {
  isLogined: PropTypes.bool,
  nickname: PropTypes.string
}




