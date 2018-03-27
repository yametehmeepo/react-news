import React, { Component } from 'react';
import PCcarousel from './pccarousel.js';
import NewsBlock from './newsblock.js';
import ImageBlock from './imageblock.js';
import PCProducts from './pcproducts.js'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class PCTopContent extends Component {
	render(){
		return (
			<div className="content">
				<div className="content01 clearfix">
					<div className="leftContainer">
						<PCcarousel />
						<ImageBlock type="guoji" cardTitle="国际头条" width='100%' count={6} imageWidth="112px"/>
					</div>
					<div className="newsList">
						<NewsBlock />
					</div>
					<div className="productList">
						<Tabs
							defaultActiveKey="1"

						>
							<TabPane tab="ReactNews 产品" key="1">
								<PCProducts />
							</TabPane>
						</Tabs>
					</div>
				</div>
				<div className="content02">
					<ImageBlock type="shehui" cardTitle="社会新闻" width='100%' count={8} imageWidth="146px"/>
				</div>
				<div className="content03">
					<ImageBlock type="caijing" cardTitle="财经新闻" width='100%' count={16} imageWidth="146px"/>
				</div>
			</div>
		)
	}
}