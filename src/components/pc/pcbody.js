import React, { Component } from 'react';
import PCcarousel from './pccarousel.js';

export default class PCBody extends Component {
	render(){
		return (
			<div className="content clearfix">
				<div className="leftContainer">
					<PCcarousel />
				</div>
			</div>
		)
	}
}