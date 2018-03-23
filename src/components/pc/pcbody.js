import React, { Component } from 'react';
import PCTopContent from './pctopcontent.js';
import PCDetails from './pcnewsdetails.js';
import PCShehui from './pcshehui.js';
import PCGuonei from './pcguonei.js';
import PCGuoji from './pcguoji.js';
import PCYule from './pcyule.js';
import PCTiyu from './pctiyu.js';
import PCKeji from './pckeji.js';
import PCShishang from './pcshishang.js';
import { Route, Switch} from 'react-router-dom';


export default class PCBody extends Component {
	render(){
		return (
				<Switch>
					<Route exact path="/" component={PCTopContent} />
					<Route path="/details/:uniquekey" component={PCDetails} />
					<Route path="/shehui" component={PCShehui} />
					<Route path="/guonei" component={PCGuonei} />
					<Route path="/guoji" component={PCGuoji} />
					<Route path="/yule" component={PCYule} />
					<Route path="/tiyu" component={PCTiyu} />
					<Route path="/keji" component={PCKeji} />
					<Route path="/shishang" component={PCShishang} />
				</Switch>
		)
	}
}