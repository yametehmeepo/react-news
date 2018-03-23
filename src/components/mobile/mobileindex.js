import React, { Component } from 'react';
import MobileHeader from './mobileheader';
import MobileBody from './mobilebody';
import MobileFooter from './mobilefooter';
import '../../assets/css/mobile.css';

export default class MobileIndex extends Component {
	render(){
		return (
			<div>
				<MobileHeader />
				<MobileBody />
				<MobileFooter />
			</div>
		)
	}
}