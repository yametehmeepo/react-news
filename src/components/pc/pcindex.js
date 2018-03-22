import React, { Component } from 'react';
//import { Row, Col } from 'antd';
import PCHeader from './pcheader';
import PCBody from './pcbody';
import PCFooter from './pcfooter.js';
import '../../assets/css/pc.css'

export default class PCIndex extends Component {
	render(){
		return (
			<div>
				<PCHeader />
				<PCBody />
				<PCFooter />
			</div>
		)
	}
}