import React, { Component } from 'react';
import { BackTop } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileHeader from './mobileheader';
import MobileBody from './mobilebody';
import MobileFooter from './mobilefooter';
import PropTypes from 'prop-types';
import '../../assets/css/mobile.css';

export default class MobileIndex extends Component {
	getChildContext(){
		return {
			pageSize: this.props.pageSize,
		}
	}
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


MobileIndex.childContextTypes = {
	pageSize: PropTypes.string,
}








