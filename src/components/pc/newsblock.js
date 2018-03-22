import React, { Component } from 'react';
import { Tabs } from 'antd';
import NewsList from './newslist.js';

const TabPane = Tabs.TabPane;

export default class NewsBlock extends Component {
	render(){
		return (
			<div>
				<Tabs style={{padding: '0 10px 10px'}}>
					<TabPane tab="头条新闻" key="1">
						<NewsList type="top" count="21" />
					</TabPane>
					<TabPane tab="国际" key="2">
						<NewsList type="guoji" count="21" />
					</TabPane>
				</Tabs>
			</div>
		)
	}
}