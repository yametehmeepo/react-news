import React, { Component } from 'react';
import PCHeader from './pcheader';
import PCFooter from './pcfooter.js';
import '../../assets/css/pc.css'

export default class PCIndex extends Component {
	render(){
		return (
			<div>
				<PCHeader />
				<PCFooter />
			</div>
		)
	}
}