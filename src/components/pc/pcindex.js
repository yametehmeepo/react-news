import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BackTop } from 'antd';
import PCHeader from './pcheader';
import PCBody from './pcbody';
import PropTypes from 'prop-types';
import PCFooter from './pcfooter.js';
import '../../assets/css/pc.css'

export default class PCIndex extends Component {
	getChildContext(){
		return {
			pageSize: this.props.pageSize,
		}
	}
	render(){
		return (
			<Router>
				<div>
					<PCHeader />
					<PCBody />
					<PCFooter />
					<BackTop />
				</div>
			</Router>
		)
	}
}


PCIndex.childContextTypes = {
  pageSize: PropTypes.string,
}









