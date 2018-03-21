import React, { Component } from 'react';
//import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc/pcindex.js';
import MobileIndex from './components/mobile/mobileindex.js';
import './assets/css/reset.css';
import 'antd/dist/antd.css';
import './App.css';  

class App extends Component {
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
