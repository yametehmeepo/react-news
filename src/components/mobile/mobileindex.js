import React, { Component } from 'react';
import { BackTop } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileHeader from './mobileheader';
import MobileBody from './mobilebody';
import MobileFooter from './mobilefooter';
import '../../assets/css/mobile.css';

export default class MobileIndex extends Component {
	render(){
		return (
			<Router>
				<div>
					<MobileHeader />
					<MobileBody />
					<MobileFooter />
					<BackTop />
				</div>
			</Router>
		)
	}
}