import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
export default class MobileBody extends Component {
	render(){
		return (
			<div>
				<div className="mobileNav">
					<Tabs 
						defaultActiveKey='1' 
						size="small"
						tabPosition="top"
					>
						<TabPane tab="头条" key="1">100</TabPane>
						<TabPane tab="社会" key="2">101</TabPane>
						<TabPane tab="国内" key="3">102</TabPane>
						<TabPane tab="国际" key="4">103</TabPane>
						<TabPane tab="娱乐" key="5">104</TabPane>
						<TabPane tab="体育" key="6">105</TabPane>
						<TabPane tab="科技" key="7">106</TabPane>
						<TabPane tab="时尚" key="8">107</TabPane>
					</Tabs>
				</div>
			</div>
		)
	}
}