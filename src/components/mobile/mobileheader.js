import React, { Component } from 'react';

export default class PCHeader extends Component {
	render(){
		return (
			<header className="mobileheader">
				<a href="/">
					<img src={require('../../assets/img/logo2.png')} alt="logo"/>
					<span>ReactNews</span>
				</a>
			</header>
		)
	}
}