import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import MobileTopContent from './mobiletopcontent.js';
import MobileNewsDetails from './mobilenewsdetails.js';


export default class MobileBody extends Component {
	render(){
		return (
			<Switch>
				<Route exact path="/" component={MobileTopContent} />
				<Route path="/details/:uniquekey" component={MobileNewsDetails} />
			</Switch>
		)
	}
}