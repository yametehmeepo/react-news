import React, { Component } from 'react';
import PCcarousel from './pccarousel.js';
import NewsBlock from './newsblock.js';
import ImageBlock from './imageblock.js';

export default class PCBody extends Component {
	render(){
		return (
			<div className="content">
				<div className="content01 clearfix">
					<div className="leftContainer">
						<PCcarousel />
						<ImageBlock type="guoji" cardTitle="国际头条" width='100%' count={6} imageWidth={112}/>
					</div>
					<div className="newsList">
						<NewsBlock />
					</div>
					<div className="productList">

					</div>
				</div>
				<div className="content02">
					<ImageBlock type="guonei" cardTitle="国内新闻" width='100%' count={8} imageWidth={146}/>
				</div>
				<div className="content03">
					<ImageBlock type="yule" cardTitle="娱乐新闻" width='100%' count={16} imageWidth={146}/>
				</div>
			</div>
		)
	}
}