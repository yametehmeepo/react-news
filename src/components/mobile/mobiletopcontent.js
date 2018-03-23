import React, { Component } from 'react';
import { Tabs } from 'antd';
import MobileCarousel from './mobilecarousel.js';
import MobileList from './mobilenewslist.js';

const TabPane = Tabs.TabPane;
export default class MobileTopContent extends Component {
	render(){
		return (
			<div>
				<div className="mobileNav">
					<Tabs 
						defaultActiveKey='1' 
						size="small"
						tabPosition="top"
					>
						<TabPane tab="头条" key="1">
							<MobileCarousel />
							<MobileList type="top" count={12}/>
						</TabPane>
						<TabPane tab="社会" key="2">
							<MobileList type="shehui" count={12}/>
						</TabPane>
						<TabPane tab="国内" key="3">
							<MobileList type="guonei" count={12}/>
						</TabPane>
						<TabPane tab="国际" key="4">
							<MobileList type="guoji" count={12}/>
						</TabPane>
						<TabPane tab="娱乐" key="5">
							<MobileList type="yule" count={12}/>
						</TabPane>
						<TabPane tab="体育" key="6">
							<MobileList type="tiyu" count={12}/>
						</TabPane>
						<TabPane tab="科技" key="7">
							<MobileList type="keji" count={12}/>
						</TabPane>
						<TabPane tab="时尚" key="8">
							<MobileList type="shishang" count={12}/>
						</TabPane>
					</Tabs>
				</div>
			</div>
		)
	}
}